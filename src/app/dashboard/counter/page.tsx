import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <span>Productos en el carrito</span>

      <CartCounter value={20}/>
    </div>
  );
}
