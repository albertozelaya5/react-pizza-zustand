import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useCart } from "../cart/cartSlice";

export type ActionErrors = {
  phone?: string;
};

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

//* 2. Usamos el tipo oficial de React Router para la función Action
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData) as Record<string, string>;

  // 4. Construimos el objeto declarando 'phone' explícitamente para que TS lo reconozca
  const order = {
    ...data,
    phone: data.phone, // <-- Agrega esta línea explícita
    cart: JSON.parse(data.cart),
    priority: data.priority === "true" || data.priority === "on",
  };

  const errors: ActionErrors = {};
  //* Ahora TypeScript sabe con certeza absoluta que 'order.phone' existe y es un string

  if (!isValidPhone(order.phone || ""))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  //* Limpieza del carrito con Zustand fuera de React
  useCart.getState().clearCart();

  return redirect(`/order/${newOrder.id}`);
}
