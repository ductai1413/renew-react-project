export type MenuItem = {
  label: string;
  path: string;
  icon?: string;
  id?: string;
  submenu?: MenuItem[];
  component: React.ComponentType;
  /* layout?: React.ComponentType<{ children: ReactNode }>; */
};
