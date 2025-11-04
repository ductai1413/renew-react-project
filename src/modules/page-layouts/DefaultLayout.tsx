import { LogoDark } from '@/assets/Icons';
import PageContent from '@/modules/page-layouts/PageContent';
import { Link, Outlet } from 'react-router';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <PageContent>
        <img src={LogoDark} alt="Logo" width={150} height={40} />
        <Link to="/dashboard">Go to Dashboard</Link>
        <>Welcome</>
        <Outlet />
      </PageContent>
    </>
  );
};

export default DefaultLayout;
