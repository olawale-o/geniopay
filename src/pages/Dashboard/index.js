import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import { SideNav } from '../../components/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
};

export default Dashboard;
