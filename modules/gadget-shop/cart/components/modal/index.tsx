import React from 'react';
import Modal from 'react-modal';
import { AllGadgetsBLContext } from '@md-modules/gadget-shop/all-gadgets/layers/business';
import ShoppingCartTable from '../shopping-cart/shopping-cart-table';
import { CartWrapper, CloseButton, YC } from './view';

const customStyles = {
  content: {
    top: '20%',
    left: '30%',
    right: 'auto',
    bottom: 'auto',
    width: '40%'
  }
};

Modal.setAppElement('#__next');

export function ModalWindow() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const context = React.useContext(AllGadgetsBLContext);

  let count = 0;
  let total = 0;
  for (const item in context.shoppingCart) {
    count += context.shoppingCart[item].count;
    total += context.shoppingCart[item].total;
  }

  return (
    <div>
      <CartWrapper onClick={openModal}>
        <YC>Your Cart</YC>
        <div className='qty'>{count} items</div>
      </CartWrapper>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
        <CloseButton onClick={closeModal}>close</CloseButton>
        <ShoppingCartTable closeModal={closeModal} total={total} />
      </Modal>
    </div>
  );
}
