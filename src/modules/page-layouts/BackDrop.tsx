import UseSidebar from '@/contexts/UseSideBar';

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = UseSidebar();

  if (!isMobileOpen) return null;
  return (
    <div className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden" onClick={toggleMobileSidebar} />
  );
};

export default Backdrop;
