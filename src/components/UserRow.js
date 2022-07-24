import React, { useEffect, useState } from "react";
import "./UserRow.scss";
import { AiOutlineBell } from "react-icons/ai";
import UserInfo from "./UserInfo";

export default function UserRow({ user }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function resize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div className="user">
      <div className="user-row">
        {/* Image and profile section */}
        <div className="img-prfl">
          <img src={user.image} alt="profile" />
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        {windowWidth > 767 && <UserInfo user={user} />}
        <div className="">
          <AiOutlineBell size={30} className="notify" />
        </div>
      </div>
      {windowWidth <= 767 && <UserInfo user={user} />}
    </div>
  );
}
