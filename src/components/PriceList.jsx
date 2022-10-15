import React from "react";
import "../styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
export const PriceList = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="PriceList">
        <h1>Price list component </h1>
        <div>
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
