import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import wallet from "../../assets/images/wallet.png";
import slq from "../../assets/images/slq.png";
import tree from '../../assets/images/tree.png';
import annoucement from "../../assets/images/annoucement.png";
import links from "../../constants/sideLinks";
import { Notification } from "../Svg";
import { AiOutlineClose } from "react-icons/ai";
import ToggleContext from '../../context/toggleContext';

const SideNav = () => {
  const { toggle } = React.useContext(ToggleContext);
  return (
    <div className="sidenav">
      <button type="button" className="close__menu" onClick={() => toggle()}>
        <AiOutlineClose />
      </button>
      <Link to="/screenone" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="sm">
        <div className="plant">
          <img src={tree} alt="tree" />
          <span className="qty">0 Planted</span>
        </div>
        <span className="notification">
          <Notification strokecolor="#000" />
        </span>
      </div>
      <div className="top">
        <div className="wallet__summary">
          <div className="item">
            <div className="summary__icon">
              <img src={wallet} alt="wallet" />
            </div>
            <div className="summary__details">
              <span className="title">Wallet balance</span>
              <span className="amount">$15,001.00</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="item">
            <div className="summary__icon">
              <img src={slq} alt="slq" />
            </div>
            <div className="summary__details">
              <span className="title">Awarded Points</span>
              <span className="amount">35</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="summary__actions">
            <button className="btn__pay in">Pay-In</button>
            <button className="btn__pay out">Pay-Out</button>
          </div>
        </div>
      </div>
  
      <div className="menu">
        <ul className="list">
          {links.map((link) => (
            <li className="list__item" key={link.id}>
              <Link to={link.url} className="item__link">
                <span className="link__icons">{link.icon}</span>
                <span className="link__text">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <div className="footer">
          <div className="container">
            <div className="top__content">
              <div className="img__box">
                <img src={annoucement} alt="annoucement" />
              </div>
              <div className="headline">
                <h6>Refer and earn</h6>
                <p>Use the below links to inivite friends</p>
              </div>
            </div>

            <button className="btn__primary w-100 p-2">Invite Friends</button>
          </div>
        </div>
    </div>
  );
};

export default SideNav;
