import { ProductDetail } from '../ProductDetail';
import headphonesImg from '@assets/generated_images/Premium_wireless_headphones_c677d7eb.png';

export default function ProductDetailExample() {
  return (
    <ProductDetail
      name="Premium Wireless Headphones"
      price={299.99}
      description="Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design. Perfect for music lovers and professionals alike."
      images={[headphonesImg, headphonesImg, headphonesImg, headphonesImg]}
      rating={4.8}
      reviewCount={245}
      isNew={true}
      onAddToCart={() => console.log('Added to cart')}
    />
  );
}
