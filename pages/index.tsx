import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { AllGadgetsPresentation } from '@md-modules/gadget-shop/all-gadgets/layers/presentation';

const AllGadgetsPage = () => {
  return (
    <MainLayout>
      <AllGadgetsPresentation />
    </MainLayout>
  );
};

export default AllGadgetsPage;
