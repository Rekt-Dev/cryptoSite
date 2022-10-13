import React from "react";
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
          This is beh teh sehs price{props.state[0]} <br />
          This is toileths price{props.state[1]}
          <br />
          This is bnbs price {props.state[2]}
          <br />
          This is xrpees price{props.state[3]}
          <br />
          This is adas price{props.state[4]}
          <br />
          This is sols price{props.state[5]}
          <br />
          This is doges price{props.state[6]}
          <br />
          This is dots price{props.state[7]}
          <br />
          This is matics price{props.state[8]}
          <br />
          This is dais price{props.state[9]}
        </div>
      </div>

      <div id="chart-container"></div>
    </div>
  );
};
