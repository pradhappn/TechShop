import { CategorySection } from '../CategorySection';
import audioBanner from '@assets/generated_images/Audio_category_banner_945bea94.png';
import heroBanner from '@assets/generated_images/E-commerce_hero_banner_d02a0a83.png';

export default function CategorySectionExample() {
  const mockCategories = [
    { id: '1', name: 'Audio', image: audioBanner, productCount: 45 },
    { id: '2', name: 'Computers', image: heroBanner, productCount: 32 },
    { id: '3', name: 'Accessories', image: audioBanner, productCount: 78 },
  ];

  return (
    <CategorySection
      categories={mockCategories}
      onCategoryClick={(id) => console.log('Category:', id)}
    />
  );
}
