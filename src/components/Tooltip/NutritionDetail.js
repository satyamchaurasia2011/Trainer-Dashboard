import React from "react";
import "./NutritionDetail.scss";
export default function NutritionDetail({
  nutrition,
  consumed,
  target,
  color,
}) {
  return (
    <div className="nutrition-det">
      <div className="detal">
        <h3>{nutrition}</h3>
        <h3>{target}g</h3>
      </div>
      <div className="range">
        <div style={{ backgroundColor: color, width: consumed }}></div>
        <p style={{ color }}>{consumed}g</p>
      </div>
    </div>
  );
}
