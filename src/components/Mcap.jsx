import Button from "react-bootstrap/Button";
import React from "react";
export const Mcap = (props) => {
  return (
    <div className="Mcap">
      <div>
        <Button onClick={props.function}> manual price update </Button>
      </div>
      MarketCaps Component
    </div>
  );
};
