import React from "react";
import { ReactComponent as FacebookLogo } from "../assets/icons/svg/facebook.svg";
import Search from "./Search";
import SVG from "react-inlinesvg";
import { HiPlus } from 'react-icons/hi';
import { FaFacebookMessenger } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';

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
      <div className="items-container">
        <div className="items-container__item">
          <div className="item-box">
            <SVG src={require("../assets/icons/svg/home.svg")} />
            <div className="items-container__tooltips">Home</div>
          </div>
        </div>
        <div className="items-container__item">
          <div className="item-box">
            <SVG src={require("../assets/icons/svg/watch.svg")} />
            <div className="items-container__tooltips">Watch</div>
          </div>
        </div>
        <div className="items-container__item">
          <div className="item-box">
            <SVG src={require("../assets/icons/svg/market.svg")} />
            <div className="items-container__tooltips">Market</div>
          </div>
        </div>
        <div className="items-container__item">
          <div className="item-box">
            <SVG src={require("../assets/icons/svg/group.svg")} />
            <div className="items-container__tooltips">Group</div>
          </div>
        </div>
        <div className="items-container__item">
          <div className="item-box">
            <SVG src={require("../assets/icons/svg/gaming.svg")} />
            <div className="items-container__tooltips">Gaming</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderRight = () => {
  return (
    <div className="header__right">
      <div className="avatar-wrapper">
        <img
          src="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.0-1/p100x100/83799814_10216337728137533_3515890250326999040_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=XcLOFbPQ7ewAX_xN6JU&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=b612288712dc10d3b6a930049ccd7825&oe=5FAEB06B"
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
