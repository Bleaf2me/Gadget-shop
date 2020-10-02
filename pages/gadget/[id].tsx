import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GadgetContainer } from '@md-modules/gadget-shop/gadget';

const GadgetPage = () => {
  return (
    <MainLayout>
      <GadgetContainer />
    </MainLayout>
  );
};

export default GadgetPage;
