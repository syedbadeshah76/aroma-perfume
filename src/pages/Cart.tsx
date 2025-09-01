import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";

const Cart = () => {
  const { state, dispatch } = useApp();

  const updateQuantity = (id: string, change: number) => {
    const item = state.cart.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      } else {
        dispatch({
          type: "UPDATE_CART_QUANTITY",
          payload: { id, quantity: newQuantity },
        });
      }
    }
  };

  const getTotalPrice = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (state.cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty 🛒</h2>
        <p className="text-muted-foreground">
          Start adding perfumes to enjoy shopping!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {state.cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                {/* agar size hai tab dikhao */}
                {item.size && (
                  <p className="text-sm text-muted-foreground">{item.size}</p>
                )}
                <p className="text-primary font-medium">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-6 text-center">{item.quantity}</span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>

              <Button
                variant="destructive"
                size="icon"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center text-lg font-semibold">
        <span>Total:</span>
        <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
      </div>

      <Button className="w-full mt-6">Proceed to Checkout 💳</Button>
    </div>
  );
};

export default Cart;
