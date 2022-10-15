import React from "react";
import "./FinancialChart/FinancialChart";
import { FinancialChart } from "./FinancialChart/FinancialChart";
export const MiniChart = () => {
  return (
    <div
      onClick={() => {
        console.log("minichart clicked ");
      }}
      className="MiniChart"
    >
      <h2> miniChart Component</h2>
      <div></div>
    </div>
  );
};
