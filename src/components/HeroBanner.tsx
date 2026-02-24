import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
          alt="Beautifully styled living room with Jordan sofa collection"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-28 md:py-36 lg:py-44 max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold-light text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6">
              The Jordan Collection
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-4 sm:mb-6">
              Affordable
              <br />
              <span className="italic text-gold-light">Luxury</span>
              <br />
              for Every Home
            </h2>
            <p className="text-stone text-base sm:text-lg max-w-md mb-8 sm:mb-10 font-light leading-relaxed">
              Beautifully crafted furniture designed for real life. Premium
              quality you can see and feel, at prices that make sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn-luxury btn-white inline-flex items-center gap-2"
              >
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product/jordan-corner-sofa"
                className="btn-luxury btn-outline border-white/40 text-white hover:bg-white hover:text-charcoal"
              >
                From &pound;29/mo with 0% Finance
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
};

export default HeroBanner;
