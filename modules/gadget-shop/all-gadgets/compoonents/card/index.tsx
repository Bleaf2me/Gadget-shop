import * as React from 'react';
// views
import {
  CardFooterPrice,
  AddButton,
  CardWrapper,
  CardImgWrapper,
  CardImg,
  CardFooter,
  CardFooterTitle,
  ViewButton
} from './views';
// view components
import { GadgetLink } from '../gadget-link';

interface Props {
  id: number;
  name: string;
  price: number;
  coverImage: string;
  onAddedToCart: () => void;
}

const Card: React.FC<Props> = ({ id, name, price, coverImage, onAddedToCart }) => {
  return (
    <CardWrapper key={id}>
      <CardImgWrapper>
        <CardImg src={coverImage} alt={`${name}-${id}`} />
      </CardImgWrapper>
      <CardFooter>
        <GadgetLink gId={id}>
          <CardFooterTitle>{name}</CardFooterTitle>
        </GadgetLink>
        <CardFooterPrice>Price: {price}$</CardFooterPrice>
        <GadgetLink gId={id}>
          <ViewButton>Details</ViewButton>
        </GadgetLink>
        <AddButton onClick={onAddedToCart}>Add to cart</AddButton>
      </CardFooter>
    </CardWrapper>
  );
};

export { Card };
