import { Gadget } from '@md-modules/shared/mock';

export interface CartItem {
  id: number;
  title: string;
  count: number;
  total: number;
}

export interface ReducerState {
  gadgetList: Gadget[];
  shoppingCart: CartItem[];
}

export type Action =
  | { type: 'GADGET_ADDED_TO_CART'; gadgetId: number }
  | { type: 'GADGET_DELETED'; gadgetId: number }
  | { type: 'GADGET_REMOVED'; gadgetId: number };

const updateOrder = (state: ReducerState, gadgetId: number, quantity: number) => {
  const { gadgetList, shoppingCart } = state;
  const gadget = gadgetList.find(({ id }: { id: number }) => id === gadgetId);

  const itemIndex = shoppingCart.findIndex(({ id }: { id: number }) => id === gadgetId);
  const item = shoppingCart[itemIndex];
  const newItem = updateCartItem(gadget!, item, quantity);

  return {
    ...state,
    shoppingCart: updateCartItems(shoppingCart, newItem, itemIndex)
  };
};

const updateCartItem = (gadget: Gadget, item = {} as CartItem, quantity: number) => {
  const { id = gadget.id, count = 0, title = gadget.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * gadget.price
  };
};

const updateCartItems = (shoppingCart: CartItem[], item: CartItem, idx: number): CartItem[] => {
  if (item.count === 0) {
    return [...shoppingCart.slice(0, idx), ...shoppingCart.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...shoppingCart, item];
  }
  return [...shoppingCart.slice(0, idx), item, ...shoppingCart.slice(idx + 1)];
};

export const updateShoppingCart = (state: ReducerState, action: Action) => {
  let item;

  switch (action.type) {
    case 'GADGET_ADDED_TO_CART':
      return updateOrder(state, action.gadgetId, 1);
    case 'GADGET_DELETED':
      item = state.shoppingCart.find(({ id }: { id: number }) => id === action.gadgetId);
      return updateOrder(state, action.gadgetId, -item!.count);
    case 'GADGET_REMOVED':
      return updateOrder(state, action.gadgetId, -1);
    default:
      return state;
  }
};
