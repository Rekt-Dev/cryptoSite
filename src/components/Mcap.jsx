import Button from "react-bootstrap/Button";
import React from "react";
import { FinancialChart } from "../components/FinancialChart/FinancialChart";

export const Mcap = (props) => {
  return (
    <div className="Mcap">
      <div>
        <p>{Number(props.mcapBtc)}</p>
      </div>
      MarketCaps Component
    </div>
  );
};
