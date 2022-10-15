import React from "react";
import "../styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
export const PriceList = (props) => {
  return (
    <div>
      <div className="PriceList">
        <h1>Price list component </h1>
        <div>
          {props.coins}
          {/*  {jsonData.data
            ? jsonData.data.map((artWork, index) => (
                <Card key={index} item={artWork} />
              ))
            : "No data to show"} */}
        </div>
      </div>
    </div>
  );
};
