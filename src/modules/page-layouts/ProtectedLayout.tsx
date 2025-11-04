import { Outlet } from 'react-router-dom';
import React from 'react';

const ProtectedLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
