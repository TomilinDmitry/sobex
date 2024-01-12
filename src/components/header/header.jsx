import React from "react";
import style from "./header.module.css";
import Logo from "../../images/header/logo.svg";
import searchIcon from "../../images/header/searchIcon.svg";
import explore from "../../images/header/explore.svg";
import overview from "../../images/header/overview.svg";
import profile from "../../images/header/profile.svg";
import signout from "../../images/header/signout.svg";
import downIcon from "../../images/header/downIcon.svg";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img className={style.logo} src={Logo} alt='Logo' />
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
            <a href='/explore'>
              <span>
                <img className={style.navBarIcon} src={explore} alt='explore' />
              </span>
              Explore
              <span>
                <img className={style.downIcon}  src={downIcon} alt='explore' />
              </span>
            </a>
          </li>
          <li>
            <a href='/overview'>
              <span>
                <img className={style.navBarIcon} src={overview} alt='explore' />
              </span>
              Overview
              <span>
                <img className={style.downIcon}  src={downIcon} alt='explore' />
              </span>
            </a>
          </li>
          <li>
            <a href='/profile'>
              <span>
                <img  className={style.navBarIcon} src={profile} alt='explore' />
              </span>
              Profile
              <span>
                <img className={style.downIcon} src={downIcon} alt='explore' />
              </span>
            </a>
          </li>
          <li>
            <a href='/signout'>
              <span>
                <img className={style.navBarIcon} src={signout} alt='explore' />
              </span>
              Sign Out
              <span>
                <img className={style.downIcon} src={downIcon} alt='explore' />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
