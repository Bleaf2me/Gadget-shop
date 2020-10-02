import * as React from 'react';
import { GadgetAPIContextProvider } from '@md-gs-gadget/layers/api/gadget';
import { GadgetBLContextProvider } from '@md-gs-gadget/layers/business';
import { GadgetPresentation } from './components/gadget-info';

const GadgetContainer = () => (
  <GadgetAPIContextProvider>
    <GadgetBLContextProvider>
      <GadgetPresentation />
    </GadgetBLContextProvider>
  </GadgetAPIContextProvider>
);

export { GadgetContainer };
