// import React from "react";
import style from "../Styles/LeftSideBar.module.css";

const LeftSideBar = ({ changeOpt, flag }) => {
  return (
    <div id={style.leftSideBar}>
      <div className={style.leftSideBarTop}>
        <div className={style.leftTop}>
          <img src="/nifty.png" />
          <h1>NFTify</h1>
        </div>
        <div
          onClick={() => changeOpt(true)}
          className={`${style.leftTop} ${style.leftTopHover}`}
          style={{ background: `${flag ? "#F30050" : ""}` }}
        >
          <img src="/token.png" />
          <h2>Token Address</h2>
        </div>
        <div
          onClick={() => changeOpt(false)}
          className={`${style.leftTop} ${style.leftTopHover}`}
          style={{ background: `${!flag ? "#F30050" : ""}` }}
        >
          <img src="/pair.png" />
          <h2> Pair Address</h2>
        </div>
      </div>
      <div id={style.leftSideBarBottom}>
        <div className={style.leftSideBarBottomSocialMedia}>
          <div className={style.leftSideBarBottomSocialMediaIcons}>
            <img src="/facebook.png" />
          </div>
          <div className={style.leftSideBarBottomSocialMediaIcons}>
            <img src="/linkedin.png" />
          </div>
          <div className={style.leftSideBarBottomSocialMediaIcons}>
            <img src="/twitter.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
