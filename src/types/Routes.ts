import {
  Dashboard,
  DashboardLayout,
  DefaultLayout,
  FormElements,
  ProductList,
  ProtectedLayout,
  UserProfile,
  WelcomePage,
} from '@/modules';
import SignIn from '@/modules/auth-pages/SignIn';
import SignUp from '@/modules/auth-pages/SignUp';
import type { MenuItem } from '@/types/MenuItem';

export const ROUTES: MenuItem[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: '🏠',
    component: Dashboard,
  },
  {
    path: '/profile',
    label: 'User Profile',
    icon: 'ℹ️',
    component: UserProfile,
  },
  {
    path: '/form-elements',
    label: 'Form Management',
    icon: '📦',
    submenu: [],
    component: FormElements,
  },
  {
    path: '/products',
    label: 'Products Management',
    icon: '📦',
    submenu: [],
    component: ProductList,
  },
];

export const Layouts: {
  layout: React.ComponentType;
  layoutProps?: unknown;
  menuItems: MenuItem[];
}[] = [
  {
    layout: DashboardLayout,
    menuItems: ROUTES,
  },
  {
    layout: DefaultLayout,
    menuItems: [
      {
        path: '/',
        label: 'Welcome Page',
        icon: '📦',
        component: WelcomePage,
      },
    ],
  },
  {
    layout: ProtectedLayout,
    menuItems: [
      {
        path: '/signin',
        label: 'Sign In',
        icon: '📦',
        component: SignIn,
      },
      {
        path: '/signup',
        label: 'Sign Up',
        icon: '📦',
        component: SignUp,
      },
    ],
  },
];
