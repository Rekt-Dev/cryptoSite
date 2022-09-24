import React from "react"
export const Tickers=()=>{
    const getBtcData=()=>{
        //fetch here
    }
    return(<div className="Tickers">
      
      
   <div className="flexRow tickerNames">   
      <div className="tickers-internal">
          BTC {getBtcData}
      </div>
      
      
       <div className="tickers-internal">
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