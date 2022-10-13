import React from "react";
export const MiniChart = () => {
  return (
    <div
      onClick={() => {
        console.log("minichart clicked ");
      }}
      className="Mcap"
    >
      <h2> miniChart Component</h2>
      <div></div>
    </div>
  );
};
