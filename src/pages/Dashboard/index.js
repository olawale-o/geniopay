import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import { SideNav } from '../../components/Navbar';
import ToggleContext from '../../context/toggleContext';

const Dashboard = () => {
  const { isOpen } = React.useContext(ToggleContext);
  return (
    <div className={`dashboard ${isOpen ? "active" : ""}`}>
      <SideNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
};

export default Dashboard;
