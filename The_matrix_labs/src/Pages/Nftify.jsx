// import React from 'react'
import Footer from "../Components/Footer";
import GridSection from "../Components/GridSection";
import LeftSideBar from "../Components/LeftSideBar";
import Navbar from "../Components/Navbar";
import style from "../Styles/Nftify.module.css";

const Nftify = ({ data, flag, changeOpt,tokendata, pairdata }) => {
  return (
    <div id={style.main}>
      {console.log("data::", data)}
      <div id={style.box}>
        <LeftSideBar changeOpt={changeOpt} flag={flag} />
        <Navbar  />
        {
          flag?<GridSection header="Token Search Results" flag={flag} data={tokendata} />:<GridSection header="Pair Search Results" flag={flag} data={pairdata} />
        }
      </div>
      <Footer />
    </div>
  );
};

export default Nftify;
