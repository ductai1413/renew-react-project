import type { ComponentType } from 'react';

export type MenuItem = {
  label: string;
  path: string;
  icon?: string;
  id?: string;
  component: ComponentType;
  submenu?: MenuItem[];
};
