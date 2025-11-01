import { Header } from "@/components/Header";
import { ProductDetail } from "@/components/ProductDetail";
import { Footer } from "@/components/Footer";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";
import { useState } from "react";
import { useLocation, useRoute } from "wouter";

import headphonesImg from "@assets/generated_images/Premium_wireless_headphones_c677d7eb.png";
import smartwatchImg from "@assets/generated_images/Luxury_smartwatch_41202d1b.png";
import speakerImg from "@assets/generated_images/Portable_bluetooth_speaker_b765af48.png";
import laptopImg from "@assets/generated_images/Ultra-thin_laptop_9ed9a8d3.png";
import cameraImg from "@assets/generated_images/Professional_mirrorless_camera_d165b720.png";
import keyboardImg from "@assets/generated_images/RGB_mechanical_keyboard_77ee680d.png";

//todo: remove mock functionality
const mockProductDetails: Record<string, any> = {
  "1": {
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design. Perfect for music lovers and professionals alike.",
    images: [headphonesImg, headphonesImg, headphonesImg, headphonesImg],
    rating: 4.8,
    reviewCount: 245,
    isNew: true,
  },
  "2": {
    name: "Luxury Smartwatch",
    price: 449.99,
    description: "Stay connected and track your fitness with our luxury smartwatch. Features include heart rate monitoring, GPS, and 7-day battery life.",
    images: [smartwatchImg, smartwatchImg, smartwatchImg, smartwatchImg],
    rating: 4.6,
    reviewCount: 189,
  },
  "3": {
    name: "Portable Bluetooth Speaker",
    price: 129.99,
    description: "Powerful sound in a compact design. Waterproof, 12-hour battery, and deep bass response.",
    images: [speakerImg, speakerImg, speakerImg, speakerImg],
    rating: 4.7,
    reviewCount: 312,
    onSale: true,
  },
  "4": {
    name: "Ultra-thin Laptop",
    price: 1299.99,
    description: "Powerful performance in an ultra-portable design. Intel i7, 16GB RAM, 512GB SSD.",
    images: [laptopImg, laptopImg, laptopImg, laptopImg],
    rating: 4.9,
    reviewCount: 156,
  },
  "5": {
    name: "Professional Mirrorless Camera",
    price: 1899.99,
    description: "Capture stunning photos and videos with professional-grade quality. 24MP sensor, 4K video.",
    images: [cameraImg, cameraImg, cameraImg, cameraImg],
    rating: 4.9,
    reviewCount: 98,
    isNew: true,
  },
  "6": {
    name: "RGB Mechanical Keyboard",
    price: 189.99,
    description: "Gaming-grade mechanical keyboard with customizable RGB lighting and premium switches.",
    images: [keyboardImg, keyboardImg, keyboardImg, keyboardImg],
    rating: 4.5,
    reviewCount: 267,
  },
};

export default function ProductPage() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const productId = params?.id || "1";
  const product = mockProductDetails[productId] || mockProductDetails["1"];

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: productId,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.images[0],
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setLocation("/checkout");
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <ProductDetail {...product} onAddToCart={handleAddToCart} />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
