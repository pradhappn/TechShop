import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductDetailProps {
  name: string;
  price: number;
  description: string;
  images: string[];
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  onSale?: boolean;
  onAddToCart?: () => void;
}

export function ProductDetail({
  name,
  price,
  description,
  images,
  rating = 4.5,
  reviewCount = 128,
  isNew = false,
  onSale = false,
  onAddToCart,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart?.();
    console.log('Added to cart:', { name, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-accent/20">
            <img
              src={images[selectedImage]}
              alt={name}
              className="w-full h-full object-cover"
              data-testid="img-main-product"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-md hover-elevate active-elevate-2 ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                data-testid={`button-thumb-${index}`}
              >
                <img
                  src={image}
                  alt={`${name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex gap-2 mb-2">
              {isNew && <Badge data-testid="badge-new">New</Badge>}
              {onSale && <Badge variant="destructive" data-testid="badge-sale">Sale</Badge>}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-product-name">
              {name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground" data-testid="text-review-count">
                ({reviewCount} reviews)
              </span>
            </div>
            <div className="text-4xl font-bold mb-6" data-testid="text-product-price">
              ${price.toFixed(2)}
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-product-description">
              {description}
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              data-testid="button-add-to-cart"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="button-wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping">
              <AccordionTrigger data-testid="accordion-shipping">Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Free shipping on orders over $50</p>
                  <p>Standard shipping: 5-7 business days</p>
                  <p>30-day return policy</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="specs">
              <AccordionTrigger data-testid="accordion-specs">Product Specifications</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground">
                  Detailed specifications will be displayed here.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
