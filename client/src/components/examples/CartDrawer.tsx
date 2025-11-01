import { CartDrawer } from '../CartDrawer';
import { useState } from 'react';
import headphonesImg from '@assets/generated_images/Premium_wireless_headphones_c677d7eb.png';
import smartwatchImg from '@assets/generated_images/Luxury_smartwatch_41202d1b.png';

export default function CartDrawerExample() {
  const [isOpen, setIsOpen] = useState(true);
  const mockItems = [
    { id: '1', name: 'Premium Wireless Headphones', price: 299.99, quantity: 1, image: headphonesImg },
    { id: '2', name: 'Luxury Smartwatch', price: 449.99, quantity: 2, image: smartwatchImg },
  ];

  return (
    <CartDrawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      items={mockItems}
      onUpdateQuantity={(id, qty) => console.log('Update:', id, qty)}
      onRemoveItem={(id) => console.log('Remove:', id)}
      onCheckout={() => console.log('Checkout')}
    />
  );
}
