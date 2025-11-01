import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  onCheckout?: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateQuantity = (id: string, change: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      onUpdateQuantity?.(id, newQuantity);
      console.log('Update quantity:', id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    onRemoveItem?.(id);
    console.log('Remove item:', id);
  };

  const handleCheckout = () => {
    onCheckout?.();
    console.log('Proceed to checkout');
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
        data-testid="overlay-cart"
      />
      <div
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background border-l z-50 flex flex-col"
        data-testid="drawer-cart"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold" data-testid="text-cart-title">
            Shopping Cart
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-cart">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-cart-empty">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                  data-testid={`cart-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md bg-accent/20"
                    data-testid={`img-cart-${item.id}`}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium line-clamp-2" data-testid={`text-cart-name-${item.id}`}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1" data-testid={`text-cart-price-${item.id}`}>
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        data-testid={`button-decrease-${item.id}`}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center" data-testid={`text-quantity-${item.id}`}>
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        data-testid={`button-increase-${item.id}`}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto"
                        onClick={() => handleRemoveItem(item.id)}
                        data-testid={`button-remove-${item.id}`}
                      >
                        <Trash2 className="h-3 w-3 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span data-testid="text-subtotal-label">Subtotal</span>
              <span data-testid="text-subtotal-amount">${subtotal.toFixed(2)}</span>
            </div>
            <Separator />
            <Button
              className="w-full"
              size="lg"
              onClick={handleCheckout}
              data-testid="button-checkout"
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
