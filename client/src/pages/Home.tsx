import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid, type Product } from "@/components/ProductGrid";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";
import { useState } from "react";
import { useLocation } from "wouter";




//todo: remove mock functionality
const mockProducts: Product[] = [
  { id: "1", name: "Premium Wireless Headphones", price: 299.99, image: '/generated_images/Premium_wireless_headphones_c677d7eb.png', rating: 4.8, isNew: true },
  { id: "2", name: "Luxury Smartwatch", price: 449.99, image: '/generated_images/Luxury_smartwatch_41202d1b.png', rating: 4.6 },
  { id: "3", name: "Portable Bluetooth Speaker", price: 129.99, image: '/generated_images/Portable_bluetooth_speaker_b765af48.png', rating: 4.7, onSale: true },
  { id: "4", name: "Ultra-thin Laptop", price: 1299.99, image: '/generated_images/Ultra-thin_laptop_9ed9a8d3.png', rating: 4.9 },
  { id: "5", name: "Professional Mirrorless Camera", price: 1899.99, image: '/generated_images/Professional_mirrorless_camera_d165b720.png', rating: 4.9, isNew: true },
  { id: "6", name: "RGB Mechanical Keyboard", price: 189.99, image: '/generated_images/RGB_mechanical_keyboard_77ee680d.png', rating: 4.5 },
];

//todo: remove mock functionality
const mockCategories = [
  { id: "1", name: "Audio", image: '/generated_images/Audio_category_banner_945bea94.png', productCount: 45 },
  { id: "2", name: "Computers", image: '/generated_images/E-commerce_hero_banner_d02a0a83.png', productCount: 32 },
  { id: "3", name: "Accessories", image: '/generated_images/Audio_category_banner_945bea94.png', productCount: 78 },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (productId: string) => {
    const product = mockProducts.find((p) => p.id === productId);
    if (!product) return;

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
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
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

  const handleProductClick = (id: string) => {
    setLocation(`/product/${id}`);
  };

  const filteredProducts = searchQuery
    ? mockProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockProducts;

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        <Hero onShopNowClick={() => window.scrollTo({ top: 800, behavior: "smooth" })} />

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-featured-title">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-featured-subtitle">
                Discover our best-selling items
              </p>
            </div>

            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onProductClick={handleProductClick}
            />
          </div>
        </section>

        <CategorySection
          categories={mockCategories}
          onCategoryClick={(id) => console.log("Category:", id)}
        />
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
