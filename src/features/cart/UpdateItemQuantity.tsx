import Button from "../../ui/Button";
import { useCart } from "./cartSlice";

interface UpdateItemQuantityProps {
  pizzaId: number;
  currentQuantity: number;
}

export function UpdateItemQuantity({
  pizzaId,
  currentQuantity,
}: UpdateItemQuantityProps) {
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => decreaseItemQuantity(pizzaId)}>
        -
      </Button>

      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button type="round" onClick={() => increaseItemQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
}
