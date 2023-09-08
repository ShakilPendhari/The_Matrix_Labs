import axios from "axios";
import "./App.css";
import Nftify from "./Pages/Nftify";
import { useEffect, useState } from "react";

async function takeTokenValue() {
  try {
    let data = await axios(
      "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    );

    return data.data.pairs

  } catch (err) {
    console.log("Error:", err);
  }
}
async function takePairValue() {
  try {
    let data = await axios(
      "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
    );

    return data.data.pairs

  } catch (err) {
    console.log("Error:", err);
  }
}
function App() {
  const [tokendata, setTokenData] = useState([]);
  const [pairdata, setPairData] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  async function getData(){
    try{
      let valueToken = await takeTokenValue();
      let valuePair = await takePairValue();
     
      setTokenData(valueToken);
      setPairData(valuePair);
    }
    catch(err){
      console.log("Error:",err)
    }
  }
  const changeOpt = (f)=>{
    setFlag(f);
  }

  return (
    <>
      <Nftify flag={flag} changeOpt={changeOpt} tokendata={tokendata} pairdata={pairdata} />
    </>
  );
}

export default App;
