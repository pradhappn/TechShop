import { ProductCard } from "./ProductCard";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  onSale?: boolean;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (id: string) => void;
  onProductClick?: (id: string) => void;
}

export function ProductGrid({ products, onAddToCart, onProductClick }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
}
