import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';

const CartDrawer = () => {
  const { state, dispatch } = useApp();

  const updateQuantity = (id: string, size: string, change: number) => {
    const item = state.cart.find(item => item.id === id && item.size === size);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: `${id}-${size}` });
      } else {
        dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: `${id}-${size}`, quantity: newQuantity } });
      }
    }
  };

  const getTotalPrice = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (!state.isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={() => dispatch({ type: 'TOGGLE_CART', payload: false })}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 shadow-luxury">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              {getTotalItems() > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {getTotalItems()}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch({ type: 'TOGGLE_CART', payload: false })}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Add some beautiful fragrances to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 p-4 rounded-lg bg-background border border-border">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.size}</p>
                      <p className="text-sm font-semibold text-primary">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.size!, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.size!, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.cart.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button variant="hero" className="w-full">
                  Checkout
                </Button>
                <Button variant="outline" className="w-full">
                  View Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;