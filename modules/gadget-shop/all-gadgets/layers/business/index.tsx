import * as React from 'react';
// context
import { AllGadgetsAPIContext } from '@md-gs-all-gadgets/layers/api/all-gadgets';
// mock
import { Gadget } from '@md-modules/shared/mock';
import { updateShoppingCart, CartItem } from './reducers';

interface Context {
  gadgetList: Pick<Gadget, 'id' | 'title' | 'price' | 'coverImage'>[];
  shoppingCart: CartItem[];
  onAddedToCart(gadgetId: string): any;
  onDeleteGadget(gadgetId: string): any;
  onRemoveGadget(gadgetId: string): any;
}

const AllGadgetsBLContext = React.createContext<Context>({
  gadgetList: [],
  shoppingCart: [],
  onAddedToCart() {},
  onDeleteGadget() {},
  onRemoveGadget() {}
});

const AllGadgetsBLContextProvider: React.FC = ({ children }) => {
  const { allGadgets } = React.useContext(AllGadgetsAPIContext);
  const allGadgetsList = React.useMemo<Pick<Gadget, 'id' | 'title' | 'price' | 'coverImage'>[]>(() => {
    if (!allGadgets) {
      return [];
    }

    return allGadgets.map(({ id, title, price, coverImage }) => ({
      id,
      title,
      price,
      coverImage
    }));
  }, [typeof allGadgets === 'undefined']);

  const initialState = [
    {
      id: '1',
      title: 'Microphone',
      price: '32',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61y99KRMiPL._AC_SL1000_.jpg'
    },
    {
      id: '2',
      title: 'Headphones',
      price: '45',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg'
    },
    {
      id: '3',
      title: 'Mouse',
      price: '80',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81A11OxpgXL._AC_SL1500_.jpg'
    }
  ];

  const [shCart, dispatch] = React.useReducer(updateShoppingCart, {
    gadgetList: initialState,
    shoppingCart: []
  });

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart') || '{}');

    if (data) {
      shCart.shoppingCart = data;
    }
  }, []);

  React.useEffect(() => {
    const data = JSON.stringify(shCart.shoppingCart);
    localStorage.setItem('cart', data);
  }, [shCart]);

  const onAddedToCart = (gadgetId: string) => {
    dispatch({
      type: 'GADGET_ADDED_TO_CART',
      gadgetId: gadgetId
    });
  };

  const onDeleteGadget = (gadgetId: string) => {
    dispatch({
      type: 'GADGET_DELETED',
      gadgetId: gadgetId
    });
  };

  const onRemoveGadget = (gadgetId: string) => {
    dispatch({
      type: 'GADGET_REMOVED',
      gadgetId: gadgetId
    });
  };

  return (
    <AllGadgetsBLContext.Provider
      value={{
        gadgetList: allGadgetsList,
        shoppingCart: shCart.shoppingCart,
        onAddedToCart,
        onDeleteGadget,
        onRemoveGadget
      }}
    >
      {children}
    </AllGadgetsBLContext.Provider>
  );
};

export { AllGadgetsBLContextProvider, AllGadgetsBLContext };
