import React from "react";

export const MarketData = (props) => {
  return (
    <div>
      Market Data component
      <div></div>
      <div>
        <button
          onClick={() => {
            console.log(`object from messari ${props.coins[18]}`);
          }}
        >
          get data from Messari{" "}
        </button>
      </div>
      <div>3 </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  );
};
