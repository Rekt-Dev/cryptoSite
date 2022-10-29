import React from "react";
import Button from "react-bootstrap/Button";
import { MiniChart } from "../components/MiniChart";
import { Card } from "../components/Card";

import { FearnGreed } from "../components/FearnGreed";
import { FinancialChart } from "../components/FinancialChart/FinancialChart";
/* import { Swiper } from "../components/Swiper";
 */
/* import Swiper from "react-id-swiper";
 */

export const BasicCharts = (props) => {
  /* var myDataSource = {
    chart: {
      caption: "Top 10 iOS Apps - July 2017",
      subCaption: "Downloads (In Millions)",
      canvasBgAlpha: "0",
      bgColor: "#ffffff",
      bgAlpha: "70",
      baseFont: "Roboto",
      baseFontSize: "14",
      showAlternateVGridColor: "1",
      alternateVGridAlpha: "5",
      labelFontSize: "15",
      captionFontSize: "20",
      subCaptionFontSize: "16",
      toolTipColor: "#000000",
      toolTipBgColor: "#ffffff",
      toolTipAlpha: "90",
      captionFontBold: "0",
      subCaptionFontBold: "0",
      paletteColors: "#8E24AA",
      valueFontSize: "13",
      valueFontBold: "0",
      animation: "0",
      divLineAlpha: "15",
      divLineDashed: "0",
      plotFillAlpha: "90",
      theme: "ocean"
    },
    data: [
      {
        label: "Sarahah",
        value: "3880000"
      },
      {
        label: "Messenger",
        value: "2570000"
      },
      {
        label: "Snake vs Block",
        value: "2420000"
      },
      {
        label: "Facebook",
        value: "2140000"
      },
      {
        label: "Amazon",
        value: "1830000"
      },
      {
        label: "Spotify Music",
        value: "1540000"
      },
      {
        label: "Netflix",
        value: "1530000"
      },
      {
        label: "Word Connect",
        value: "1440000"
      },
      {
        label: "Pandora",
        value: "1300000"
      },
      {
        label: "WhatsApp Messenger",
        value: "1210000"
      }
    ]
  };

  var barChartConfigs = {
    id: "bar-chart",
    renderAt: "chart-container",
    type: "bar2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource
  }; */

  return (
    <div className="Charts">
      <div>Basic charts</div>
      <div>
        <div>
          <div>{props.coins[11]}</div>

          <Card
            coinss={[
              props.coins[0],
              props.coins[1],
              props.coins.bnbsPrice,
              props.coins.xrpeesPrice,
              props.coins.adasPrice,
              props.coins.solsPrice,
              props.coins.dogesPrice,
              props.coins.dotsPrice,
              props.coins.maticsPrice,
              props.coins.daisPrice,
              props.coins[10]
            ]}
          />
        </div>
      </div>

      <div id="chart-container">
        {/*         <Swiper />
         */}
      </div>
      <div>{}</div>
    </div>
  );
};
