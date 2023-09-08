// import React from 'react'
import style from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.inputBox}>
         <input placeholder="Search"/>
         <img src="/SearchIcon.png" alt="searchIcon"/>
      </div>
      <div className={style.connect}>Connect</div>
    </div>
  )
}

export default Navbar