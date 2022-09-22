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
import {Header} from "./components/Header"


export default function App() {
  
  const styles={ User:{color:"blue",},
    
  }
  return (
    <div className="App">
      <div>
    <Header />
   </div>
   <br />
   
   
   <div>
      <User style={styles.User}/>
     <br />

      <Tickers />
     </div>
      <Notifs />
      <div>
      <Fear />
      <Goi />
      </div>
      <BasicCharts />

      <LivePrices />
      <WinLose />
      <Liquidations />
      <Mcap />

      
      

    </div>
  );
}
