import * as React from 'react';
// view components
import { Header } from '@md-ui/headers/main';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export { MainLayout };
