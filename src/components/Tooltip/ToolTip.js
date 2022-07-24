import React from "react";
import NutritionDetail from "./NutritionDetail";
import "./ToolTip.scss";
export default function ToolTip({ nutrition }) {
  return (
    <div className="tooltip">
      <NutritionDetail
        nutrition="Protein"
        consumed={nutrition.proteinConsumed}
        target={nutrition.proteinTarget}
        color="#F45C84"
      />
      <NutritionDetail
        nutrition="Fats"
        consumed={nutrition.fatConsumed}
        target={nutrition.fatTarget}
        color="#03C6FA"
      />
      <NutritionDetail
        nutrition="Carbs"
        consumed={nutrition.carbConsumed}
        target={nutrition.carbTarget}
        color="#F0C50F"
      />
    </div>
  );
}
