import {React, useState} from "react"


export const Tickers=()=>{
    
    const [jsonData,setJsonData]=useState({})
    
    const consoleLog=()=>{
        console.log("i was clicked")
    }
    
    const refreshBtcPrice=()=>{
        
        console.log("btc price refreshed")        
    }

          async function getData() {
    const response = await fetch(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    setJsonData(await response.json());
    console.log(jsonData);
    
  
        
        
return (<div>div {jsonData.price}</div>)
    }
    return(<div className="Tickers">
      
      
   <div className="flexRow tickerNames">   
      <div className="tickers-internal justifyCenter">
          BTC {consoleLog}
      </div>
      
      
       <div onClick={()=>{consoleLog}}className="tickers-internal ">
          ETH
      </div > <div className="tickers-internal">
          USDT
      </div> <div className="tickers-internal">
          BNB
      </div> <div className="tickers-internal">
          XRP
      </div> <div className="tickers-internal">
          ADA
      </div> <div className="tickers-internal">
          SOL
      </div> <div className="tickers-internal">
          DOGE
      </div> <div className="tickers-internal">
          9th
      </div> <div className="tickers-internal">
          10th
      </div>
      
    </div>
    </div>
    )
}