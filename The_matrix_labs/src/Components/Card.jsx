// import React from 'react'
import style from "../Styles/Card.module.css";
import SingleCard from "./SingleCard";

const Card = ({ data }) => {
  return (
    <div className={style.CardWrap}>
      {data &&
        data?.map((el,i) => {
          return <div className={style.card} key={i}>
            <SingleCard
              header="Basic Info"
              h1="Pair created at"
              h5={el.pairCreatedAt}
              h2="Symbol"
              h6={el.baseToken.symbol}
              h3="Dex ID"
              h7={`#${el.dexId}`}
              h4="Pair Address"
              h8={el.pairAddress}
            />
            <SingleCard
              header="Basic Token"
              h1="Name"
              h5={el.baseToken.name}
              h2="Symbol"
              h6={el.baseToken.symbol}
              h3="Address"
              h7={el.baseToken.address}

            />
            <SingleCard
              header="Quote Token"
              h1="Name"
              h5={el.quoteToken.name}
              h2="Symbol"
              h6={el.quoteToken.symbol}
              h3="Address"
              h7={el.quoteToken.address}
            />
            <SingleCard header="Price" h1="Price Native" h5={el.priceNative} h2="Price USD" h6={el.priceUsd} />
          </div>;
        })}
    </div>
  );
};

export default Card;
