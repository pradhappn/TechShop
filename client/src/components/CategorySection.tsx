import { Card } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface CategorySectionProps {
  categories: Category[];
  onCategoryClick?: (id: string) => void;
}

export function CategorySection({ categories, onCategoryClick }: CategorySectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-categories-title">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-categories-subtitle">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-all duration-200"
              onClick={() => {
                onCategoryClick?.(category.id);
                console.log('Category clicked:', category.id);
              }}
              data-testid={`card-category-${category.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-category-${category.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1" data-testid={`text-category-name-${category.id}`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/90" data-testid={`text-category-count-${category.id}`}>
                    {category.productCount} products
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
