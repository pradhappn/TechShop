import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/E-commerce_hero_banner_d02a0a83.png";

interface HeroProps {
  onShopNowClick?: () => void;
}

export function Hero({ onShopNowClick }: HeroProps) {
  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
            Premium Tech
            <br />
            Delivered Fast
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            Discover our curated collection of premium electronics and gadgets.
            Free shipping on orders over $50.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              onClick={onShopNowClick}
              data-testid="button-shop-now"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
