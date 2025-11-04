import {
  BoxCubeIcon,
  CalenderIcon,
  GridIcon,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from '@/assets/Icons';

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; new?: boolean; pro?: boolean }[];
};

export const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: 'Dashboard',
    subItems: [
      { name: 'Ecommerce', path: '/ecommerce' },
      { name: 'Dashboard Management', path: '/dashboard' },
    ],
  },
  {
    icon: <CalenderIcon />,
    name: 'Calendar',
    path: '/calendar',
  },
  {
    icon: <UserCircleIcon />,
    name: 'User Profile',
    path: '/profile',
  },
  {
    name: 'Forms',
    icon: <ListIcon />,
    subItems: [{ name: 'Form Management', path: '/form-elements' }],
  },
  {
    name: 'Products Management',
    icon: <TableIcon />,
    subItems: [{ name: 'Products', path: '/products' }],
  },
  {
    name: 'Pages',
    path: '/pages',
    icon: <PageIcon />,
    subItems: [
      { name: 'Blank Page', path: '/blank' },
      { name: '404 Error', path: '/error-404' },
    ],
  },
];

export const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: 'Charts',
    path: '/charts',
    subItems: [
      { name: 'Line Chart', path: '/line-chart' },
      { name: 'Bar Chart', path: '/bar-chart' },
    ],
  },
  {
    icon: <BoxCubeIcon />,
    name: 'UI Elements',
    path: '/ui-elements',
    subItems: [
      { name: 'Alerts', path: '/alerts' },
      { name: 'Avatar', path: '/avatars' },
      { name: 'Badge', path: '/badge' },
      { name: 'Buttons', path: '/buttons' },
      { name: 'Images', path: '/images' },
      { name: 'Videos', path: '/videos' },
    ],
  },
  {
    icon: <PlugInIcon />,
    name: 'Authentication',
    subItems: [
      { name: 'Sign In', path: '/signin' },
      { name: 'Sign Up', path: '/signup' },
    ],
  },
];

export const hiddenItems: string[] = [
  '/calendar',
  '/alerts',
  '/avatars',
  '/badge',
  '/buttons',
  '/images',
  '/videos',
  '/line-chart',
  '/bar-chart',
  '/ui-elements',
  '/charts',
  '/blank',
  '/pages',
];
