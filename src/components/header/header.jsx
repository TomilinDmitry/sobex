import React from "react";
import style from "./header.module.css";
import Logo from "../../images/header/logo.svg";
import searchIcon from "../../images/header/searchIcon.svg";
import explore from "../../images/header/explore.svg";
import overview from "../../images/header/overview.svg";
import profile from "../../images/header/profile.svg";
import signout from "../../images/header/signout.svg";
import downIcon from "../../images/header/downIcon.svg";
import { BrowserRouter, Link } from "react-router-dom";
const Header = () => {
  return (
    <BrowserRouter>
    <header className={style.header}>
      <div className={style.container}>
       <Link to='/'> <img className={style.logo} src={Logo} alt='Logo' /></Link>
        <div className={style.searchInput}>
          <img
            className={style.searchIcon}
            src={searchIcon}
            alt='searchIcon'
          />
          <input
            className={style.input}
            type='search'
            name='search'
            placeholder='Search item here...'
          />
        </div>
      </div>
      <nav className={style.navBar}>
        <ul className={style.navBarList}>
        <li>
              <span>
                <img className={style.navBarIcon} src={explore} alt='explore' />
              </span>
             <Link to="/explore"> Explore </Link>
              <span>
                <img className={style.downIcon}  src={downIcon} alt='explore' />
              </span>
          </li>
          <li>
            
              <span>
                <img className={style.navBarIcon} src={overview} alt='explore' />
              </span>
              Overview
              <span>
                <img className={style.downIcon}  src={downIcon} alt='explore' />
              </span>
            
          </li>
          <li>
            
              <span>
                <img  className={style.navBarIcon} src={profile} alt='explore' />
              </span>
              Profile
              <span>
                <img className={style.downIcon} src={downIcon} alt='explore' />
              </span>
            
          </li>
          <li>
              <span>
                <img className={style.navBarIcon} src={signout} alt='explore' />
              </span>
              Sign Out
              <span>
                <img className={style.downIcon} src={downIcon} alt='explore' />
              </span>
           
          </li>
        </ul>
      </nav>
    </header>
    </BrowserRouter>
  );
};

export default Header;
