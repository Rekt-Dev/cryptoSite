import { useState } from "react";
import {Card} from "../components/Card"
export async function querySvr() {
    const [coinData,setCoinData]=useState([])
    
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  const apiKey = "ae892c4004msh44f9eb6e9b4441cp13282cjsn9e8bfa4b5636";
  const url = `${corsAnywhere}https://api.coinranking.com/v2/coins`;
  const queryString = new URLSearchParams({
    "x-access-token": apiKey,
    search: "Bit",
  });

  await fetch(`${url}?${queryString}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "success") {
        console.log("fetch success", response);
        setCoinData(response)
return (<div>
    <Card key={index} item={coin}
    />
    
    ))
    : "No data to show"}
        </div> )
        }
    
        