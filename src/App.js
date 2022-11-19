import "./styles.css";
import { useEffect, useState } from "react";
import User from "./components/User/User";
import { FearnGreed } from "./components/FearnGreed";

//import { Swiper } from "react-id-swiper";
import { Tickers } from "./components/Tickers/Tickers.jsx";
//import { Goi } from "./components/Goi";
import { BestPerformers } from "./components/BestPerformers";
//import { Card } from "./components/Card";

import { useNavigate } from "react-router-dom";
/* import { FinancialChart } from "../components/FinancialChart/FinancialChart";
 */
//import { Notifs } from "./components/Notifs";
import { Mcap } from "./components/Mcap"; //import { CanvasJs } from "./components/CanvasJs"; //import {Fear} from "./components/Fear" //import {Goi} from "./components/Goi"
import { BasicCharts } from "./components/BasicCharts";
import { LivePrices } from "./components/LivePrices";
import { WinLose } from "./components/WinLose";
import { Liquidations } from "./components/Liquidations";
import { Header } from "./components/Header.jsx";
import { MarketData } from "./components/MarketData";
//import { getData } from "./services/getData.jsx";
//import {consoleLog} from "./components/Tickers"
//import {query} from "./services/fetch"
//import cmc from "./services/cmc";
export default function App() {
  const [dataMessari, setDataMessari] = useState({});
  const [mcapBtc, setMcapBtc] = useState("btcs Mcap");
  const [btcIcon, setBtcIcon] = useState("linkBtc");
  const [ethIcon, setEthIcon] = useState("linkEth");
  const [bnbIcon, setBnbIcon] = useState("linkBnb");
  const [xrpIcon, setXrpIcon] = useState("linkEth");
  const [adaIcon, setAdaIcon] = useState("linkEth");
  const [solIcon, setSolIcon] = useState("linkEth");
  const [dogeIcon, setDogeIcon] = useState("linkEth");
  const [dotIcon, setDotIcon] = useState("linkEth");
  // const [shibIcon, setShibIcon] = useState("linkEth");
  const [daiIcon, setDaiIcon] = useState("linkEth");
  const [coinMcapName, setCoinMcapName] = useState("");
  // const [obj, setObj] = useState({});
  // const [jsonData, setJsonData] = useState([]);
  const [coins, setCoins] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [btcsPrice, setBtcsPrice] = useState(1000000);
  const [toilethsPrice, setToilethsPrice] = useState(-1500);
  const [bnbsPrice, setBnbsPrice] = useState([0]);
  const [xrpeesPrice, setXrpeessPrice] = useState([-3]);
  const [adasPrice, setAdasPrice] = useState([0]);
  const [solsPrice, setSolsPrice] = useState([]);
  const [dogesPrice, setDogesPrice] = useState([]);
  const [dotsPrice, setDotsPrice] = useState([]);
  const [maticsPrice, setMaticsPrice] = useState([]);
  const [daisPrice, setDaisPrice] = useState([]);

  const navigate = useNavigate();
  // this is  for running the same getData but for the first time, (i.e component did mount), the depedencyarray[] is the thing that is making the useEffect trigger only once.coz there are none
  useEffect(() => {
    const oneTimer = setTimeout(() => {
      getData();
      getDataMessari();
      setCoins(coins);
      // setObj(coins);
      console.log(`this is the default oneTimer useeffect `);
    }, 1000);
    return () => clearTimeout(oneTimer);
  }, []);
  //uesEffect runs every 85 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
      getDataMessari();
      setDataMessari(getDataMessari());
      // setObj(coins);
      setCoins(coins);

      console.log(`this is  from 85 sec recurring useeffect `);
    }, 85000);
    return () => clearInterval(interval);
  });

  //const loggedIn
  async function getData() {
    console.log(`getData activ8d async`);

    /* const apiKey =
      "coinrankingdfa125c1105b3ec3b9af03ab2268054ae4a3c06015b4b547";
 */ const url =
      "https://api.coinranking.com/v2/coins";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    /*  const queryString = new URLSearchParams({
      mode: `no-cors`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `*`,
      "x-access-token": apiKey,
      search: "Bit"
    });
 */
    await fetch(`${corsAnywhere}${url}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("RESPONSE SUCCESS !!!");
          console.log(`this is btcIcon ${btcIcon}`);
          console.log(coins);
          let coins = response.data.coins;

          console.log(`btcs price: ${coins[0].price}`);
          setCurrencies(coins);
          setBtcsPrice(coins[0].price);
          setToilethsPrice(coins[1].price);
          setBnbsPrice(coins[3].price);
          setXrpeessPrice(coins[5].price);
          setAdasPrice(coins[7].price);
          setSolsPrice(coins[8].price);
          setDogesPrice(coins[15].price);
          setDotsPrice(coins[10].price);
          setMaticsPrice(coins[11].price);
          setDaisPrice(coins[12].price);
          setBtcIcon(coins[0].iconUrl);

          setEthIcon(coins[1].iconUrl);
          setBnbIcon(coins[2].iconUrl);
          setXrpIcon(coins[3].iconUrl);
          setAdaIcon(coins[5].iconUrl);
          setSolIcon(coins[6].iconUrl);
          setDogeIcon(coins[7].iconUrl);
          setDotIcon(coins[8].iconUrl);
          setDaiIcon(coins[10].iconUrl);
          setMcapBtc(coins[0].marketCap);
          setCoinMcapName(coins[0].name);
          setMcapBtc(coins[0].marketCap);
          setDaisPrice(coins[13].price);
          console.log(currencies);
          return currencies;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function getDataMessari() {
    console.log(`getDataMessari activ8d `);

    const url =
      "https://data.messari.io/api/v1/assets?bitcoin fields=id,slug,symbol,metrics";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    await fetch(`${corsAnywhere}${url}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("RESPONSE SUCCESS from messari !!!");
          console.log(response);
          console.log(`this is btcIcon ${btcIcon}`);
          let coins = response.data.coins;

          console.log(`btcs price: ${coins[0].price}`);
          setCurrencies(coins);
          setBtcsPrice(coins[0].price);
          setToilethsPrice(coins[1].price);
          setBnbsPrice(coins[4].price);
          setXrpeessPrice(coins[5].price);
          setAdasPrice(coins[7].price);
          setSolsPrice(coins[8].price);
          setDogesPrice(coins[9].price);
          setDotsPrice(coins[10].price);
          setMaticsPrice(coins[11].price);
          setDaisPrice(coins[12].price);
          setBtcIcon(coins[0].iconUrl);

          setEthIcon(coins[1].iconUrl);
          setBnbIcon(coins[2].iconUrl);
          setXrpIcon(coins[3].iconUrl);
          setAdaIcon(coins[5].iconUrl);
          setSolIcon(coins[6].iconUrl);
          setDogeIcon(coins[7].iconUrl);
          setDotIcon(coins[8].iconUrl);
          setDaiIcon(coins[10].iconUrl);
          setMcapBtc(coins[0].marketCap);
          setCoinMcapName(coins[0].name);
          setMcapBtc(coins[0].marketCap);
          setDaisPrice(coins[13].price);
          console.log(currencies);
          return currencies;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //loggedIn?

  return (
    <div className="App">
      <div>
        <div className="Header justifyCenter">
          <Header />
          <div className="flexRow">
            <Tickers
              coins={[
                btcsPrice,
                toilethsPrice,
                bnbsPrice,
                xrpeesPrice,
                adasPrice,
                solsPrice,
                dogesPrice,
                dotsPrice,
                maticsPrice,
                daisPrice,
                ethIcon,
                bnbIcon,
                xrpIcon,
                adaIcon,
                solIcon,
                dogeIcon,
                dotIcon,
                daiIcon
              ]}
              obj={currencies}
            />
          </div>

          <Mcap function={getData} mcapBtc={mcapBtc} joseph={coinMcapName} />
        </div>

        <div
          onClick={() => console.log("i was clicked ticker names")}
          className="tickerNames"
        ></div>
        <div id="wrapper-column" className="flexRow">
          <div className="flexColumn justifyCenter">
            <User />
            <WinLose />
            <Liquidations />
            <div>
              <FearnGreed />
            </div>
          </div>
          <div
            onClick={() => console.log("i was clicked basic charts")}
            className="Charts flexRow"
          >
            <BasicCharts
              coins={[
                btcsPrice,
                toilethsPrice,
                bnbsPrice,
                xrpeesPrice,
                adasPrice,
                solsPrice,
                dogesPrice,
                dotsPrice,
                maticsPrice,
                daisPrice,
                btcIcon
              ]}
              function={getData}
            />
          </div>
          <div className="flexColumn">
            <BestPerformers />
            <WinLose />
            <Liquidations />
          </div>
          {/*   <div>
            <CanvasJs />
          </div> */}
          <div className="flexColumn">
            <div onClick={() => navigate(`pricelist`)}>
              <LivePrices />
            </div>
            <WinLose />
            <Liquidations />
          </div>

          <div className="News">
            <MarketData
              coins={[
                btcsPrice,
                toilethsPrice,
                bnbsPrice,
                xrpeesPrice,
                adasPrice,
                solsPrice,
                dogesPrice,
                dotsPrice,
                maticsPrice,
                daisPrice,
                ethIcon,
                bnbIcon,
                xrpIcon,
                adaIcon,
                solIcon,
                dogeIcon,
                dotIcon,
                daiIcon,
                dataMessari
              ]}
              obj={currencies}
            />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
