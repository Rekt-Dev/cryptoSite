import { React, useEffect, useState } from "react";
import "../styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

export const PriceList = (props) => {
  const [coins, setCoins] = useState();
  const [currencies, setCurrencies] = useState();
  async function getData() {
    var d = new Date();
    console.log(
      `getData activ8d @ ${d.toString()} // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"}`
    );
    const apiKey =
      "coinrankingdfa125c1105b3ec3b9af03ab2268054ae4a3c06015b4b547";
    const url = "https://api.coinranking.com/v2/coins";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    const queryString = new URLSearchParams({
      mode: `no-cors`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `*`,
      "x-access-token": apiKey,
      search: "Bit"
    });

    await fetch(`${corsAnywhere}${url}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("RESPONSE SUCCESS !!!");
          let coins = response.data.coins;

          console.log(`btcs price:  ${coins[0].price}`);
          setCurrencies(coins);
          setCoins(currencies);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //this uesEffect runs 1 time after 1 sec.
  useEffect(() => {
    const oneTimer = setTimeout(() => {
      getData();
    }, 1000);
    return () => clearTimeout(oneTimer);
  }, []);
  //this uesEffect runs every 85 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 85000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <div className="PriceList">
        <h1>Price list component </h1>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>
            </thead>
            <tbody>
              {coins
                ? coins.map((coin, index) => <div key={index} coin={coin} />)
                : "No data to show,go away"}
            </tbody>
          </table>
        </div>

        <div>
          coins: {coins}
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
