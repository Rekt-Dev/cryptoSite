import {useState} from "react"
     

export  async function queryData() {
    
    const [jsonData,setJsonData]=useState({})
    const response = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    setJsonData=(await response.json());
    console.log(jsonData);
  }