import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Layouts } from '@/types/Routes';

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Flatten all routes from all layouts
    const allRoutes = Layouts.flatMap(layout => layout.menuItems);

    // Find the current route
    const currentRoute = allRoutes.find(route => route.path === location.pathname);

    if (currentRoute) {
      // Update document title
      document.title = `${currentRoute.label} - Book Store`;
    } else {
      // Default title for unmatched routes
      document.title = 'Book Store';
    }
  }, [location.pathname]);
};
