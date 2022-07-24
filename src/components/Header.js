import React from "react";
import { BiDumbbell, BiDish } from "react-icons/bi";
import { GiWalk } from "react-icons/gi";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header">
      <div>
        <GiWalk fontSize={25} />
        <h2>Steps</h2>
      </div>
      <div className="workout">
        <BiDumbbell fontSize={25} style={{ transform: "rotate(130deg)" }} />
        <h2>Workout</h2>
      </div>
      <div>
        <BiDish fontSize={25} />
        <h2>Nutrition</h2>
      </div>
    </div>
  );
}
