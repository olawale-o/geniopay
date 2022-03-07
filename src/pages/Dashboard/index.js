import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../../components/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <div>
        <Outlet />
      </div>
    </div>
  )
};

export default Dashboard;
