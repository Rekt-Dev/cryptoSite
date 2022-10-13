import React from "react";
import Button from "react-bootstrap/Button";

export const BasicCharts = (props) => {
  var myDataSource = {
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
  };

  return (
    <div>
      <div className="">
        <h3> Basic Charts</h3>
      </div>

      <div>
        <div>
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
        </div>
      </div>
      <Button onClick={props.function}>bitcoins price update </Button>
      <div id="chart-container"></div>
    </div>
  );
};
