import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import UserRow from "../components/UserRow";
import "./Dashboard.scss";
export default function Dashboard() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div className="dashboard">
      <Header />
      {userData.map((user) => {
        return <UserRow user={user} key={user.userId} />;
      })}
    </div>
  );
}
