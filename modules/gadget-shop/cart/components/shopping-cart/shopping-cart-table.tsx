import React from 'react';

import { AllGadgetsBLContext } from '@md-modules/gadget-shop/all-gadgets/layers/business';
import { CartItem } from '@md-modules/gadget-shop/all-gadgets/layers/business/reducers';
import { AddButton, RemoveButton, DeleteButton, TableH, Table, TD, TR, TB } from './view';

interface SCProps {
  closeModal: () => void;
  total: number;
}

const ShoppingCartTable: React.FC<SCProps> = ({ closeModal, total }) => {
  const context = React.useContext(AllGadgetsBLContext);

  const { shoppingCart, onAddedToCart, onRemoveGadget, onDeleteGadget } = context;

  const renderRow = (item: CartItem, idx: number) => {
    const { id, title, count, total } = item;

    const closeAfterRemove = () => {
      if (shoppingCart.length < 2 && count === 1) {
        closeModal();
      }
    };

    const closeAfterDelete = () => {
      if (shoppingCart.length < 2) {
        closeModal();
      }
    };

    return (
      <TR key={id}>
        <TD>{idx + 1}</TD>
        <TD>{title}</TD>
        <TD>{count}</TD>
        <TD>${total}</TD>
        <TD>
          <RemoveButton
            onClick={() => {
              onRemoveGadget(id), closeAfterRemove();
            }}
            className='btn btn-outline-danger btn-sm float-right'
          >
            REMOVE
          </RemoveButton>
          <AddButton onClick={() => onAddedToCart(id)} className='btn btn-outline-success btn-sm float-right'>
            ADD
          </AddButton>
          <DeleteButton
            onClick={() => {
              onDeleteGadget(id), closeAfterDelete();
            }}
            className='btn btn-outline-warning btn-sm float-right'
          >
            DELETE
          </DeleteButton>
        </TD>
      </TR>
    );
  };

  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <h3>Total: {total}$</h3>
      <Table>
        <thead>
          <TR>
            <TableH>#</TableH>
            <TableH>Item</TableH>
            <TableH>Count</TableH>
            <TableH>Total</TableH>
            <TableH>Action</TableH>
          </TR>
        </thead>
        <TB>
          {shoppingCart.length > 0 ? (
            shoppingCart.map(renderRow)
          ) : (
            <TR>
              <TD>Cart is empty</TD>
            </TR>
          )}
        </TB>
      </Table>
    </div>
  );
};

export default ShoppingCartTable;
