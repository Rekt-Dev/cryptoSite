


export async function getData() {
    
    const[jsonData,setJsonData]=useState([])
    
    const response = await fetch(`https://api.coinbase.com/v2/prices/BTC-USD/buy`);
    setJsonData(await response.json());
    console.log(jsonData);
  }

