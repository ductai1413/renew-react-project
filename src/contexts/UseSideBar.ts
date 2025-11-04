import { createContext, useContext } from 'react';
import { SidebarContextType } from '@/types/SidebarContextType';

export const sidebarContext = createContext<SidebarContextType | undefined>(undefined);

const UseSidebar = () => {
  const context = useContext(sidebarContext);
  if (!context) {
    throw new Error('UseSidebar must be used within a SidebarProvider');
  }
  return context;
};

export default UseSidebar;
