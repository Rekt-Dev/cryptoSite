import "./styles.css";
import {User} from "./components/User"
import {Tickers} from "./components/Tickers"
import {Notifs} from "./components/Notifs"
import {Mcap} from "./components/Mcap"
import {BasicCharts} from "./components/BasicCharts"
import {Fear} from "./components/Fear"
import {Goi} from "./components/Goi"
import {LivePrices} from "./components/LivePrices"
import {WinLose} from "./components/WinLose"
import {Liquidations} from "./components/Liquidations"


export default function App() {
  return (
    <div className="App">
      <User />
      <Tickers />
      <Notifs />
      <BasicCharts />
      <Fear />
      <Goi />
      <LivePrices />
      <Mcap />
      <WinLose />
      <Liquidations />
      
      
      <h1>oFears CryptoSite</h1>
      <h2>Charts, Analysis, and more...</h2>
    </div>
  );
}
