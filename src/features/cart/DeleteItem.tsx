import Button from "../../ui/Button";
import { useCart } from "./cartSlice";

interface DeleteItemProps {
  pizzaId: number;
}

export function DeleteItem({ pizzaId }: DeleteItemProps) {
  const deleteItem = useCart((state) => state.deleteItem);

  return (
    <Button type="small" onClick={() => deleteItem(pizzaId)}>
      Delete
    </Button>
  );
}
