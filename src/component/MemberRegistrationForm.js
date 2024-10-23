import React, { useState } from "react";

const MemberRegistrationForm = ({ addMember }) => {
  const [name, setName] = useState("");
  const [membershipType, setMembershipType] = useState("Monthly");
  const [startDate, setStartDate] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [membershipFee, setMembershipFee] = useState(0);

  const membershipPlans = {
    "Monthly": 50,
    "Quarterly": 135,
    "Yearly": 500
  };

  const calculateRenewalDate = (startDate, membershipType) => {
    const start = new Date(startDate);
    switch (membershipType) {
      case "Monthly":
        start.setMonth(start.getMonth() + 1);
        break;
      case "Quarterly":
        start.setMonth(start.getMonth() + 3);
        break;
      case "Yearly":
        start.setFullYear(start.getFullYear() + 1);
        break;
      default:
        break;
    }
    return start.toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const calculatedRenewalDate = calculateRenewalDate(startDate, membershipType);
    setRenewalDate(calculatedRenewalDate);
    setMembershipFee(membershipPlans[membershipType]);

    const newMember = {
      name,
      membershipType,
      startDate,
      renewalDate: calculatedRenewalDate,
      membershipFee: membershipPlans[membershipType]
    };

    addMember(newMember);

    // Reset form
    setName("");
    setMembershipType("Monthly");
    setStartDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Member</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Membership Type:</label>
        <select
          value={membershipType}
          onChange={(e) => setMembershipType(e.target.value)}
        >
          <option value="Monthly">Monthly - $50</option>
          <option value="Quarterly">Quarterly - $135</option>
          <option value="Yearly">Yearly - $500</option>
        </select>
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register Member</button>
    </form>
  );
};

export default MemberRegistrationForm;
