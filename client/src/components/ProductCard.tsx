import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  onSale?: boolean;
  onAddToCart?: (id: string) => void;
  onClick?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  rating = 4.5,
  isNew = false,
  onSale = false,
  onAddToCart,
  onClick,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(id);
    console.log('Added to cart:', id);
  };

  const handleClick = () => {
    onClick?.(id);
    console.log('Product clicked:', id);
  };

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-transform duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      data-testid={`card-product-${id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-accent/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${id}`}
        />
        {(isNew || onSale) && (
          <div className="absolute top-2 right-2 flex gap-2">
            {isNew && (
              <Badge variant="default" data-testid="badge-new">
                New
              </Badge>
            )}
            {onSale && (
              <Badge variant="destructive" data-testid="badge-sale">
                Sale
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg line-clamp-2" data-testid={`text-name-${id}`}>
              {name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-primary text-primary"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating})</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="text-2xl font-bold" data-testid={`text-price-${id}`}>
            ${price.toFixed(2)}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={`transition-all duration-200 ${
              isHovered ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
            data-testid={`button-add-cart-${id}`}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
