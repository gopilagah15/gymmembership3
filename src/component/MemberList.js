import React from "react";

const MemberList = ({ members }) => {
  return (
    <div>
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Membership Type</th>
            <th>Start Date</th>
            <th>Renewal Date</th>
            <th>Membership Fee</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.membershipType}</td>
              <td>{member.startDate}</td>
              <td>{member.renewalDate}</td>
              <td>${member.membershipFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
