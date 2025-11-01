import { ProductGrid } from '../ProductGrid';
import headphonesImg from '@assets/generated_images/Premium_wireless_headphones_c677d7eb.png';
import smartwatchImg from '@assets/generated_images/Luxury_smartwatch_41202d1b.png';
import speakerImg from '@assets/generated_images/Portable_bluetooth_speaker_b765af48.png';
import laptopImg from '@assets/generated_images/Ultra-thin_laptop_9ed9a8d3.png';

export default function ProductGridExample() {
  const mockProducts = [
    { id: '1', name: 'Premium Wireless Headphones', price: 299.99, image: headphonesImg, rating: 4.8, isNew: true },
    { id: '2', name: 'Luxury Smartwatch', price: 449.99, image: smartwatchImg, rating: 4.6 },
    { id: '3', name: 'Portable Bluetooth Speaker', price: 129.99, image: speakerImg, rating: 4.7, onSale: true },
    { id: '4', name: 'Ultra-thin Laptop', price: 1299.99, image: laptopImg, rating: 4.9 },
  ];

  return (
    <div className="p-6">
      <ProductGrid
        products={mockProducts}
        onAddToCart={(id) => console.log('Add to cart:', id)}
        onProductClick={(id) => console.log('View product:', id)}
      />
    </div>
  );
}
