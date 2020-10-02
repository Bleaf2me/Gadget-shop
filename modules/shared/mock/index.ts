export interface Gadget {
  id: string;
  title: string;
  price: string;
  coverImage: string;
}

export const allGadgets: Gadget[] = [
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
