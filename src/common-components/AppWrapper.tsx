import { config } from '@/configs/config';
import { store } from '@/states/store';
import { MenuItem } from '@/types/MenuItem';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { Provider } from 'react-redux';

export interface LayoutWrapperProps {
  Layout: React.ComponentType<{ children: React.ReactNode; [key: string]: unknown }>;
  children: React.ReactNode;
  item?: MenuItem;
}

const clientId = config.googleClientId;

const PageMetadata = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
      </Provider>
    </>
  );
};

export default PageMetadata;
