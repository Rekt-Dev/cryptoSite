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


export default function App() {
  
  const styles={ User:{color:"blue",},
    
  }
  return (<div>
    <div className="Header">
    <Header />
    </div>
    <div className="App">
   
   
   
   <div className="flexRow">
      <User />
     

      <Tickers />
     </div>
     
      <BasicCharts />

      <LivePrices />
      <WinLose />
      <Liquidations />
      <Mcap />

       <div>
              <Notifs />

      <Fear />
      <Goi />
      </div>
      
</div>
    </div>
  );
}
