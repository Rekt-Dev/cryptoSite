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
import {Header} from "./components/Header.jsx"
import {News} from "./components/News.jsx"


export default function App() {
  
  const styles={ User:{color:"blue",},
    
  }
  return (<div className="App  ">
    <div  className="Header">
    <Header />
    </div>
  
    <div className="">
   
   
   
   <div className="flexRow">
      <User />
     

     </div>
     <div className="tickerNames">      <Tickers />
</div>
<div className="Charts">
      <BasicCharts />
</div>
<br />
<div className="flexRow">
      <LivePrices />
      <WinLose />
      <Liquidations />
      <Mcap />
</div>
       <div>
              <Notifs />

      <Fear />
      <Goi />
      </div>
      <div className="News">
        <News />
        </div>
</div>
    </div>
  );
}
