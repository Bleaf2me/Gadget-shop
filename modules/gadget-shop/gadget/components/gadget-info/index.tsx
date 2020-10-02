import * as React from 'react';
// context
import { GadgetAPIContext } from '@md-gs-gadget/layers/api/gadget';
import { GadgetBLContext } from '@md-gs-gadget/layers/business';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { ContentWrapper, GadgetImgContainer, Wrapper } from './views';
import { AllGadgetsBLContext } from '@md-modules/gadget-shop/all-gadgets/layers/business';
import {
  AddButton,
  CardFooterPrice,
  CardFooterTitle
} from '@md-modules/gadget-shop/all-gadgets/compoonents/card/views';

const GadgetPresentation: React.FC = () => {
  const { isLoading } = React.useContext(GadgetAPIContext);
  const {
    gadgetInfo: { id, title, coverImage, price }
  } = React.useContext(GadgetBLContext);
  const { onAddedToCart } = React.useContext(AllGadgetsBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <GadgetImgContainer>
            <img src={coverImage} alt='Kenobi' />
          </GadgetImgContainer>
          <CardFooterTitle>{title}</CardFooterTitle>
          <CardFooterPrice>Price: {price}$</CardFooterPrice>
          <AddButton onClick={() => onAddedToCart(id)}>Add to cart</AddButton>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { GadgetPresentation };
