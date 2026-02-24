import { Star, Truck, CreditCard, ShieldCheck } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-cream border-b border-stone/30">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* TrustPilot */}
          <div className="flex items-center gap-3 justify-center">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-trustpilot text-trustpilot"
                />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-semibold text-charcoal">Excellent</span>
              <span className="text-taupe ml-1">40,000+ reviews</span>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-center gap-2.5 justify-center">
            <Truck className="w-5 h-5 text-charcoal flex-shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-charcoal">
                Express Delivery
              </span>
              <span className="text-taupe hidden sm:inline ml-1">
                from 3 days
              </span>
            </div>
          </div>

          {/* 0% Finance */}
          <div className="flex items-center gap-2.5 justify-center">
            <CreditCard className="w-5 h-5 text-charcoal flex-shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-charcoal">0% Finance</span>
              <span className="text-taupe hidden sm:inline ml-1">
                available
              </span>
            </div>
          </div>

          {/* Guarantee */}
          <div className="hidden md:flex items-center gap-2.5 justify-center">
            <ShieldCheck className="w-5 h-5 text-charcoal flex-shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-charcoal">
                10 Year Guarantee
              </span>
              <span className="text-taupe ml-1">on frames</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
