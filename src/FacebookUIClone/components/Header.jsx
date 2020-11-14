import React from "react";
import { ReactComponent as FacebookLogo } from "../assets/icons/svg/facebook.svg";
import Search from "./Search";
import SVG from "react-inlinesvg";
import { HiPlus } from 'react-icons/hi';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HeaderOptionGroup } from "./HeaderOptionGroup";

const HeaderLeft = () => {
  return (
    <div className="header__left">
      <FacebookLogo />
      <Search />
    </div>
  );
};

const HeaderCenter = () => {
  return (
    <div className="header__center">
      <HeaderOptionGroup />
    </div>
  );  
};

const HeaderRight = () => {
  return (
    <div className="header__right">
      <div className="avatar-wrapper">
        <img
          src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-1/p320x320/124354962_10218720359021816_6353348838620994993_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=6e6B7tHtFzoAX84aCz2&_nc_ht=scontent.fkul16-1.fna&tp=6&oh=6f4cbcbc701fb6a741aa08e7b5dc35fe&oe=5FD45B4F"
          className="avatar-wrapper__avatar"
          alt="avatar"
        />
        <div className="avatar-wrapper__name">
          Rong
        </div>
      </div>
      <div className="etc-wrapper">
        <HiPlus size="20px"/>
      </div>
      <div className="etc-wrapper">
        <SVG src={require("../assets/icons/svg/message.svg")} />
      </div>
      <div className="etc-wrapper">
      <SVG src={require("../assets/icons/svg/bell.svg")} />
      </div>
      <div className="etc-wrapper">
        <TiArrowSortedDown size="20px" />
      </div>
    </div>
    
  );
};

export default function Header() {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}
