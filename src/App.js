import React, { useState } from "react";
import MemberRegistrationForm from "./component/MemberRegistrationForm";
import MemberList from "./component/MemberList";
import MonthlyReport from "./component/MonthlyReport";
 

function App() {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  return (
    <div>
      <h1>Gym Membership System</h1>
      <MemberRegistrationForm addMember={addMember} />
      <MemberList members={members} />
      <MonthlyReport members={members} />
    </div>
  );
}

export default App;
