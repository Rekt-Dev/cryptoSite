import React from "react";
import "../styles.css";

export const PriceList = (props) => {
  return (
    <div>
      <div className="PriceList">
        <h1>Price list component </h1>
        <div>
          {jsonData.data
            ? jsonData.data.map((artWork, index) => (
                <Card key={index} item={artWork} />
              ))
            : "No data to show"}
        </div>
      </div>
    </div>
  );
};
