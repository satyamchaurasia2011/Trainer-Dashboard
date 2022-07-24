import React, { useState } from "react";
import "./UserInfo.scss";
import { FiUserCheck } from "react-icons/fi";
import { BsCalendar, BsExclamationLg } from "react-icons/bs";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { PieChart } from "react-minimal-pie-chart";
import ToolTip from "./Tooltip/ToolTip";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineRight } from "react-icons/ai";
export default function UserInfo({ user }) {
  const [stepTarget, setStepTarget] = useState(user.steps.stepsTarget);
  const [calTarget, setCalTarget] = useState(user.nutrition.calorieTarget);
  const [display, setDisplay] = useState(false);
  const styleSheet = {
    date: {
      backgroundColor:
        user.workout.performedDate === user.workout.scheduledDate && "red",
      padding: "3px",
      borderRadius: "4px",
    },
  };
  const calculatePer = (val, totalVal) => (val / totalVal) * 100;
  return (
    <div className="info-user">
      {/* Steps Section */}
      <div className="stps">
        <div className="prog-bar">
          <CircularProgressbarWithChildren
            value={calculatePer(user.steps.stepsWalked, stepTarget)}
          >
            <h2>{user.steps.stepsWalked}</h2>
            <p>walked</p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="target-det">
          <AiOutlinePlus
            onClick={() => setStepTarget(stepTarget + 500)}
            size={13}
            className="icon-a-m"
          />
          <h2>{`${stepTarget / 1000}K`}</h2>
          <p>target</p>
          <AiOutlineMinus
            onClick={() => stepTarget && setStepTarget(stepTarget - 500)}
            size={13}
            className="icon-a-m"
          />
        </div>
      </div>

      {/* Workout Schedule Section */}
      <div className="sch-time">
        <div className="lft-sch">
          <div>
            <FiUserCheck size={19} />
            <h3>{user.workout.performedDate}</h3>
          </div>
          <div style={styleSheet.date}>
            <BsCalendar size={19} />
            <h3>{user.workout.scheduledDate}</h3>
          </div>
        </div>
        <div>
          {user.workout.feedback ? (
            <BsExclamationLg
              style={{ backgroundColor: "red", marginLeft: "5px" }}
              className="icon-a-m right-b"
            />
          ) : (
            <Link to={`${user.userId}/workout`}>
              <AiOutlineRight className="icon-a-m right-b" />
            </Link>
          )}
        </div>
      </div>

      {/* Nutrition Section */}
      <div className="nutri-c">
        <div
          style={{ display: `${display ? "block" : "none"}` }}
          className="tool-pos"
        >
          <ToolTip nutrition={user.nutrition} />
        </div>

        <div
          className="pie"
          onMouseOver={() => setDisplay(true)}
          onMouseOut={() => setDisplay(false)}
        >
          <PieChart
            data={[
              {
                value: calculatePer(
                  user.nutrition.proteinConsumed,
                  user.nutrition.proteinTarget
                ),
                color: "#F45C84",
              },
              {
                value: calculatePer(
                  user.nutrition.fatConsumed,
                  user.nutrition.fatTarget
                ),
                color: "#F0C50F",
              },
              {
                value: calculatePer(
                  user.nutrition.carbConsumed,
                  user.nutrition.carbTarget
                ),
                color: "#03C6FA",
              },
            ]}
            lineWidth={25}
            label={() => user.nutrition.calorieIntake + " cal"}
            labelStyle={{
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontWeight: "500",
              fill: "white",
            }}
            labelPosition={0}
          />
        </div>
        <div className="cal-tar">
          <AiOutlinePlus
            onClick={() => setCalTarget(calTarget + 100)}
            size={13}
            className="icon-a-m"
          />
          <h2>{`${calTarget / 1000}K`}</h2>
          <p>target</p>
          <AiOutlineMinus
            onClick={() => calTarget && setCalTarget(calTarget - 100)}
            size={13}
            className="icon-a-m"
          />
        </div>
        <Link to={`${user.userId}/nutrition`}>
          <AiOutlineRight className="icon-a-m right-b" />
        </Link>
      </div>
    </div>
  );
}
