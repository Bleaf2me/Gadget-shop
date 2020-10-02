const updateCartItems = (shoppingCart: any, item: any, idx: any): any[] => {
  if (item.count === 0) {
    return [...shoppingCart.slice(0, idx), ...shoppingCart.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...shoppingCart, item];
  }
  return [...shoppingCart.slice(0, idx), item, ...shoppingCart.slice(idx + 1)];
};

export interface CartItem {
  id: string;
  title: string;
  count: number;
  total: number;
}

interface ReducerState {
  gadgetList: any[];
  shoppingCart: CartItem[];
}

const updateOrder = (state: ReducerState, gadgetId: string, quantity: number) => {
  const { gadgetList, shoppingCart } = state;
  const gadget = gadgetList.find(({ id }: { id: string }) => id === gadgetId);

  const itemIndex = shoppingCart.findIndex(({ id }: { id: string }) => id === gadgetId);
  const item = shoppingCart[itemIndex];
  const newItem = updateCartItem(gadget, item, quantity);

  return {
    ...state,
    shoppingCart: updateCartItems(shoppingCart, newItem, itemIndex)
  };
};

const updateCartItem = (gadget: any, item: any = {}, quantity: number) => {
  const { id = gadget.id, count = 0, title = gadget.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * gadget.price
  };
};

export const updateShoppingCart = (state: any, action: any) => {
  if (!state) {
    return {
      shoppingCart: []
    };
  }
  let item;
  switch (action.type) {
    case 'GADGET_ADDED_TO_CART':
      return updateOrder(state, action.gadgetId, 1);
    case 'GADGET_DELETED':
      item = state.shoppingCart.find(({ id }: { id: string }) => id === action.gadgetId);
      return updateOrder(state, action.gadgetId, -item.count);
    case 'GADGET_REMOVED':
      return updateOrder(state, action.gadgetId, -1);
    default:
      return state;
  }
};
