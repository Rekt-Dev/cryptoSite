import React from "react";
export const MiniChart = () => {
  return (
    <div
      onClick={() => {
        console.log("liveprices clicked ");
      }}
      className="Liveprices"
    >
      <h2> Live Prices Component</h2>
      <div></div>
    </div>
  );
};
