import React from "react";
import style from "./header.module.css";
import Logo from "../../images/logo.svg";
import searchIcon from "../../images/searchIcon.svg";
import explore from "../../images/explore.svg";
import overview from "../../images/overview.svg";
import profile from "../../images/profile.svg";
import signout from "../../images/signout.svg";
import downIcon from "../../images/downIcon.svg";
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
