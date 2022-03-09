import React from 'react';
import tree from '../../assets/images/tree.png';
import avatar from '../../assets/images/avatar.png';
import { Notification, ChevronDown } from '../Svg';
import { AiOutlineMenu } from "react-icons/ai";
import ToggleContext from '../../context/toggleContext';

const TopNavbar = ({ title }) => {
  const { toggle } = React.useContext(ToggleContext);
  return (
    <header className="header">
      <button type="button" className="top__menu" onClick={() => toggle()}>
        <AiOutlineMenu size={30} />
      </button>
      <nav className="nav">
        <h3 className="title">{title}</h3>
        <div className="right">
          <div className="search__field">
            <span></span>
            <input type="text" className="search__input" placeholder="Search" />
          </div>
          <div className="middle">
            <div className="plant">
              <img src={tree} alt="tree" />
              <span className="qty">0 Planted</span>
            </div>
            <span className="notification">
              <Notification strokecolor="#000" />
            </span>
          </div>
          <button className="profile" type="button">
            <img src={avatar} alt="avatar" className="avatar" />
            <div className="badge">
              <span className='status'>Verified</span>
              <span>Huss Smith</span>
            </div>
            <span>
                <ChevronDown strokecolor="#55676B" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
