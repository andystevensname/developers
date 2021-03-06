import React from "react";
import UtilityNav from "../2_molecules/navigation/utilityNav";
import PrimaryNav from "../2_molecules/navigation/primaryNav";
import PrimaryMobile from "../2_molecules/navigation/primaryMobile";
import UtilityMobile from "../2_molecules/navigation/utilityMobile";

import Logo from "../../images/svgs/new-logo.svg";

const Header = () => (
  <div className="header__wrapper" id="header">
    <header className="header">
      <div className="utility-nav__wrapper">
        <UtilityNav />
      </div>
      <div className="primary-nav__wrapper">
        <div className="primary-nav__container">
          <div className="primary-nav__inner">
            <div className="logo">
              <a href="https://linode.com" className="logo__link">
                <Logo />
              </a>
            </div>
            <div>
              <PrimaryNav />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menus__wrapper" id="mobile-menus">
        <form
          role="search"
          method="get"
          className="header-search-form"
          action="https://linode.com/"
        >
          <label className="header-search-form__label">
            <span className="search-form__placeholder visually-hidden">
              Search for:
            </span>
            <input
              type="search"
              className="search-form__search-field"
              placeholder="Search Linode"
            />
          </label>
          <input
            type="submit"
            className="search-submit visually-hidden"
            value="Search"
          />
        </form>
        <PrimaryMobile />
        <UtilityMobile />
        <div className="mobile-sign-up">
          <a
            href="https://login.linode.com/signup"
            target="_self"
            className="mobile-sign-up__button"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
