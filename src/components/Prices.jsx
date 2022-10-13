import React from "react";

export const Prices = (props) => {

return(<div>
  BTCs price {Number(props.coins[0]).toFixed(0)} <br />
  <br />
  Toileths price {Number(props.coins[1]).toFixed(2)}
  <br />
  <br />
  Bnbs price {Number(props.coins[2]).toFixed(3)}
  <br />
  <br />
  xrpees price {Number(props.coins[3]).toFixed(4)}
  <br />
  <br />
  adas price {Number(props.coins[4]).toFixed(4)}
  <br />
  <br />
  sols price {Number(props.coins[5]).toFixed(4)}
  <br />
  <br />
  doges price {Number(props.coins[6]).toFixed(4)}
  <br />
  <br />
  dots price {Number(props.coins[7]).toFixed(4)}
  <br />
  <br />
  matics price {Number(props.coins[8]).toFixed(4)}
  <br />
  <br />
  dais price {Number(props.coins[9]).toFixed(4)}
</div>;
)
}