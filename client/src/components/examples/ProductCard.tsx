import { ProductCard } from '../ProductCard';
import headphonesImg from '@assets/generated_images/Premium_wireless_headphones_c677d7eb.png';

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-xs">
      <ProductCard
        id="1"
        name="Premium Wireless Headphones"
        price={299.99}
        image={headphonesImg}
        rating={4.8}
        isNew={true}
        onAddToCart={(id) => console.log('Add to cart:', id)}
        onClick={(id) => console.log('View product:', id)}
      />
    </div>
  );
}
