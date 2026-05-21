//* INTERFACES TS

export type SingleCart = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
export type CartState = {
  cart: SingleCart[];
};
export type CartActions = {
  addItem: (arg1: SingleCart) => any;
  deleteItem: (pizzaId: number) => void;
  increaseItemQuantity: (pizzaId: number) => void;
  decreaseItemQuantity: (pizzaId: number) => void;
  clearCart: () => void;
};
