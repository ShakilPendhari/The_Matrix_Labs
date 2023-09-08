// import React from 'react'
import style from "../Styles/Card.module.css";

const SingleCard = (props) => {
  const { header, h1, h2, h3, h4, h5, h6, h7, h8 } = props;
  return (
    <div>
      <div>
        <div className={style.header}>{header}</div>
        <div></div>
      </div>
      <div>
        <div>{h1}</div>
        <div>{h5 && h5.length>=12?h5.split("").slice(0,12).join("")+"...":h5}</div>
      </div>
      <div>
        <div>{h2}</div>
        <div>{h6 && h6.length>=12?h6.split("").slice(0,12).join("")+"...":h6}</div>
      </div>
      <div>
        <div>{h3}</div>
        <div>{h3 && h7 && h7.length>=12?h7.split("").slice(0,12).join("")+"...":h7 }</div>
      </div>
      <div>
        <div>{h4}</div>
        <div>{h4 && h8 && h8.length>=12?h8.split("").slice(0,12).join("")+"...":h8}</div>
      </div>
      <div className={style.symbol}>
        <img
          src={
            header === "Basic Info"
              ? "/exlaimatory.png"
              : header === "Basic Token"
              ? "/etherium.png"
              : header === "Quote Token"
              ? "/etherium.png"
              : "/doller.png"
          }
          alt="exlaimatory"
        />
      </div>
    </div>
  );
};

export default SingleCard;
