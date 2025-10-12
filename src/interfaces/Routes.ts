import { ProductList, HomePage } from '../modules';
import type { MenuItem } from './MenuItems';

export const ROUTES: MenuItem[] = [
  { path: '/', label: 'Trang Chủ', icon: '🏠', component: HomePage },
  { path: '/about', label: 'Giới Thiệu', icon: 'ℹ️', component: HomePage },
  {
    path: '/products',
    label: 'Sản Phẩm',
    icon: '📦',
    submenu: [
      { path: '/products/new', label: 'Sản Phẩm Mới', component: ProductList },
      { path: '/products/popular', label: 'Sản Phẩm Phổ Biến', component: ProductList },
    ],
    component: ProductList,
  },
  {
    path: '/contact',
    label: 'Liên Hệ',
    icon: '📞',
    component: HomePage,
    submenu: [
      { path: '/contact/faq', label: 'Hỏi Đáp', component: HomePage },
      { path: '/contact/support', label: 'Hỗ Trợ', component: HomePage },
    ],
  },
];
