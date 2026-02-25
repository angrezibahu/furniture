import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const BedroomHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
        {/* Image side */}
        <div className="relative img-zoom">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80"
            alt="Elegant bedroom with Maya bed frame"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Video play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg group">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal ml-1 group-hover:text-gold transition-colors" />
            </button>
          </div>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:to-transparent" />
        </div>

        {/* Content side */}
        <div className="flex items-center bg-cream-dark px-8 sm:px-12 lg:px-20 py-12 md:py-0">
          <div className="max-w-md">
            <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
              Transform Your Bedroom
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium mt-3 leading-tight">
              Sleep in
              <br />
              <span className="italic">Style</span>
            </h2>
            <p className="text-taupe mt-4 text-sm sm:text-base leading-relaxed">
              Discover our curated bedroom collection. From statement bed frames
              to cosy mattresses, create your perfect sanctuary without breaking
              the bank.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="text-charcoal">
                  Fast delivery from 3 working days
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="text-charcoal">
                  0% finance from &pound;27/month
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="text-charcoal">
                  100-night comfort guarantee
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/products?category=Beds"
                className="btn-luxury btn-primary inline-flex items-center gap-2"
              >
                Shop Bedroom
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product/maya-bed-frame"
                className="btn-luxury btn-outline"
              >
                View Maya Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BedroomHero;
