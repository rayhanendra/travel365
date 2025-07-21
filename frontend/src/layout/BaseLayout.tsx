import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
