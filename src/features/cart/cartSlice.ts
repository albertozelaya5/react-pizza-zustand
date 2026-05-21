import { create } from "zustand";
import { CartActions, CartState, SingleCart } from "./cartInt";

const initialState: CartState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

export const useCart = create<CartActions & CartState>((set) => ({
  ...initialState,
  addItem: (cart) =>
    set((state) => ({
      cart: [...state.cart, cart],
    })),
  deleteItem: (pizzaId: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.pizzaId !== pizzaId),
    })),
  increaseItemQuantity: (pizzaId: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.pizzaId === pizzaId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.unitPrice,
            }
          : item,
      ),
    })),
  decreaseItemQuantity: (pizzaId: number) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.pizzaId === pizzaId
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity + 1) * item.unitPrice,
            }
          : item,
      );

      const finalCart = updatedCart.filter((item) => item.quantity > 0);
      return { cart: finalCart };
    }),
  clearCart: () => set(() => ({ cart: [] })),
}));

export const getCart = (state: CartState) => state.cart;

export const getTotalCartQuantity = (state: CartState) =>
  state.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalCartPrice = (state: CartState) =>
  state.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: CartState) =>
  state.cart.find((item: SingleCart) => item.pizzaId === id)?.quantity ?? 0;
