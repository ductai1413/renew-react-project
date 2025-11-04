import { PageMetadata } from '@/common-components';
import PageContent from '@/modules/page-layouts/PageContent';

const WelcomePage: React.FC = () => {
  return (
    <>
      <PageMetadata title="Welcome" description="Welcome page" />

      <PageContent>
        <>Welcome!</>
      </PageContent>
    </>
  );
};

export default WelcomePage;
