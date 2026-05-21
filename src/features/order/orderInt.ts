export interface SingleOrder {
  customer: string;
  status: string;
  priority: boolean;
  cart: Cart[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
}

interface Cart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addIngredients: any[];
  removeIngredients: any[];
}