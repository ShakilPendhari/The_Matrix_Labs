// import React from 'react'
import style from "../Styles/GridSection.module.css"
import Card from "./Card"

const GridSection = ({data,header}) => {
  return (
    <div className={style.gridSection}>
        <h2>{header}</h2>
        <div className={style.card}>
            <Card data={data}/>
        </div>
    </div>
  )
}

export default GridSection