import React from 'react';
import { PageSidebar, Backdrop, PageHeader, SideBarProvider } from '@/modules';
import { Outlet } from 'react-router-dom';
import { UseSidebar } from '@/contexts';

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = UseSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <PageSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <PageHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  return (
    <SideBarProvider>
      <LayoutContent />
    </SideBarProvider>
  );
};

export default DashboardLayout;
