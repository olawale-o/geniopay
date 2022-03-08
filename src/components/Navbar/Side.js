import React from "react";
import logo from "../../assets/images/logo.png";
import wallet from "../../assets/images/wallet_fill.png";
import slq from "../../assets/images/slq.png";
import annoucement from "../../assets/images/annoucement.png";
import { Grid, Wallet, Card, Fx, Beneficiary, Perk } from "../Svg";
import { AiOutlineClose } from "react-icons/ai";
import ToggleContext from '../../context/toggleContext';

const SideNav = () => {
  const { toggle } = React.useContext(ToggleContext);
  return (
    <div className="sidenav">
      <button type="button" className="close__menu" onClick={() => toggle()}>
        <AiOutlineClose />
      </button>
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="top">
        <div className="wallet__summary">
          <div className="item">
            <div className="summary__icon">
              <img src={wallet} alt="image" />
            </div>
            <div className="summary__details">
              <span className="title">Wallet balance</span>
              <span className="amount">$15,001.00</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="item">
            <div className="summary__icon">
              <img src={slq} alt="image" />
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
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Grid fillcolor="#fff" />
              </span>
              <span className="link__text">Dashboard</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Wallet strokecolor="#fff" />
              </span>
              <span className="link__text">Wallet</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Card strokecolor="#fff" />
              </span>
              <span className="link__text">Cards</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Fx strokecolor="#fff" />
              </span>
              <span className="link__text">FX Center</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Beneficiary strokecolor="#fff" />
              </span>
              <span className="link__text">Beneficiaries</span>
            </a>
          </li>
          <li className="list__item">
            <a href="#" className="item__link">
              <span className="link__icons">
                <Perk strokecolor="#fff" />
              </span>
              <span className="link__text">Perks</span>
            </a>
          </li>
        </ul>
        </div>

        <div className="footer">
          <div className="container">
            <div className="top__content">
              <div className="img__box">
                <img src={annoucement} alt="image" />
              </div>
              <div className="headline">
                <h6>Refer and earn</h6>
                <p>Use the below links to inivite friends</p>
              </div>
            </div>

            <button className="btn__primary">Invite Friends</button>
          </div>
        </div>
    </div>
  );
};

export default SideNav;
