import '@/App.scss';
import { Route, Routes } from 'react-router';
import ScrollToTop from '@/common-components/ScrollToTop';
import { Layouts } from '@/types/Routes';
import { MenuItem } from '@/types/MenuItem';
import { NotFound } from '@/modules';
import { useMemo } from 'react';

const App: React.FC = () => {
  // Use the hook to automatically update page title
  /* usePageTitle(); */

  const renderRoute = (route: MenuItem) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.component ? <route.component /> : <></>}
      />
    );
  };

  const renderLayout = useMemo(() => {
    return Layouts.map(item => (
      <Route key={item.layout.name} element={<item.layout />}>
        {item.menuItems.map(renderRoute)}
      </Route>
    ));
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {renderLayout}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
