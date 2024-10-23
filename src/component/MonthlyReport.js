import React from "react";

const MonthlyReport = ({ members }) => {
  const getMonthlyActiveMembers = () => {
    const currentDate = new Date();
    return members.filter((member) => {
      const renewalDate = new Date(member.renewalDate);
      return renewalDate > currentDate;
    });
  };

  const activeMembers = getMonthlyActiveMembers();
  const totalFees = activeMembers.reduce((sum, member) => sum + member.membershipFee, 0);

  return (
    <div>
      <h2>Monthly Report</h2>
      <p>Total Active Members: {activeMembers.length}</p>
      <p>Total Fees Collected: ${totalFees}</p>
    </div>
  );
};

export default MonthlyReport;
