import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-gs-all-gadgets/compoonents/card';
import { Gadget } from '@md-modules/shared/mock';
// context
import { AllGadgetsAPIContext } from '@md-gs-all-gadgets/layers/api/all-gadgets';
import { AllGadgetsBLContext } from '@md-gs-all-gadgets/layers/business';
// views
import { Wrapper } from './views';

const AllGadgetsPresentation = () => {
  const { isLoading } = React.useContext(AllGadgetsAPIContext);
  const { gadgetList, onAddedToCart } = React.useContext(AllGadgetsBLContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {gadgetList.map((gadget: Gadget) => (
          <Card
            {...gadget}
            key={gadget.id}
            name={gadget.title}
            price={gadget.price}
            onAddedToCart={() => onAddedToCart(gadget.id)}
            coverImage={gadget.coverImage}
          />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};

export { AllGadgetsPresentation };
