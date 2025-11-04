import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import '@/styles/main.scss';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import { AppWrapper } from '@/common-components/AppWrapper';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppWrapper>
  </StrictMode>,
);
