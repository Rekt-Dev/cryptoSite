import { React, useEffect, useState } from "react";
import "../styles.css";
import { Card } from "./Card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

export const PriceList = () => {
  const [coins, setCoins] = useState([]);
  async function getData() {
    let d = new Date();
    console.log(`getData activ8d @ ${d.toString()} `);
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
          let coinz = response.data.coins;
          setCoins(coinz);

          console.log(`btcs price:  ${coins[0].price}`);
          console.log(`this is coins ${coins}`);
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
  //this uesEffect runs every 85 seconds, this is coz of herokus core limitations, hopefully after we fnish buildign our reverse proxy, we will be free to use 5 api calls a sec every sec. which is awesome..craig wright is an obese toilet.
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
          <div>{coins ? coins[0] : "lul nada here"}</div>
          <div>
            {coins
              ? coins.map((coin, index) => (
                  <Card key={index} coin={coin.rank} />
                ))
              : "No data to show,go away"}
          </div>
          <table>
            <thead>
              <tr>
                <th>3</th>
                <th>2</th>
                <th>{coins ? coins : "nodata 2 show bruv"}</th>
                {/*                 <th>{coins ? coins[0].name : "nodata 2 show bruv"}</th>
                 */}{" "}
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>{" "}
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>{" "}
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>{" "}
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>{" "}
              <tr>
                <th></th>
                <th></th>
                <th>3</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>4</th>
                <th>sort by</th>
              </tr>{" "}
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
              {/*       {coins
                ? coins.map((coin, index) => <div key={index} coin={coin} />)
                : "No data to show,go away"} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
