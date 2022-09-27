import React from "react"
import { useState } from "react/cjs/react.production.min"


export const Tickers=()=>{
    const [jsonData,setJsonData]=useState({})
    const refreshBtcPrice=()=>{
        
        console.log("btc price refreshed")        
    }

          async function getData() {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`
    );
    setJsonData(await response.json());
    console.log(jsonData);
    
  
        
        
return (<div>div {btcData.price}</div>)
    }
    return(<div className="Tickers">
      
      
   <div className="flexRow tickerNames">   
      <div className="tickers-internal justifyCenter">
          BTC {getData}
      </div>
      
      
       <div onClick={refreshBtcPrice}className="tickers-internal ">
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