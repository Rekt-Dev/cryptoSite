import "./styles.css";
import {User} from "./components/User"
import {Tickers} from "./components/Tickers"
import {Notifs} from "./components/Notifs"

export default function App() {
  return (
    <div className="App">
      <User />
      <Tickers />
      <Notifs />
      <h1>oFears CryptoSite</h1>
      <h2>Charts, Analysis, and more...</h2>
    </div>
  );
}
