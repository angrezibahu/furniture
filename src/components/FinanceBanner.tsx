import { Link } from "react-router-dom";
import { CreditCard, CheckCircle2, ArrowRight, Calculator } from "lucide-react";

const FinanceBanner = () => {
  return (
    <section className="py-16 sm:py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-gold-light" />
              <span className="text-gold-light text-xs font-medium tracking-[0.2em] uppercase">
                Spread the Cost
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              0% Interest
              <br />
              <span className="italic text-gold-light">Free Finance</span>
            </h2>
            <p className="text-stone mt-4 text-sm sm:text-base leading-relaxed max-w-md">
              Make your dream home a reality today. Spread the cost over 12, 24,
              or 36 months with absolutely no interest. No hidden fees, no
              catches.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "0% APR on orders over £299",
                "Quick online application — instant decision",
                "Flexible 12, 24, or 36 month terms",
                "No deposit required",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-light flex-shrink-0" />
                  <span className="text-sm text-stone-dark">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/products"
                className="btn-luxury btn-gold inline-flex items-center gap-2"
              >
                Shop with Finance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Calculator preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-gold-light" />
              <span className="text-sm font-medium text-white">
                Finance Example
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-sm text-stone-dark">
                  Jordan Corner Sofa
                </span>
                <span className="text-sm font-medium">&pound;1,299</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-sm text-stone-dark">Finance term</span>
                <span className="text-sm font-medium">24 months</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-sm text-stone-dark">Interest rate</span>
                <span className="text-sm font-medium text-gold-light">
                  0% APR
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-sm text-stone-dark">Deposit</span>
                <span className="text-sm font-medium">&pound;0</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-base font-medium text-white">
                  Monthly payment
                </span>
                <span className="text-2xl font-display font-semibold text-gold-light">
                  &pound;54/mo
                </span>
              </div>
            </div>

            <p className="text-[10px] text-stone-dark mt-4 leading-relaxed">
              Representative example: Cash price &pound;1,299. 0% APR. 24
              monthly payments of &pound;54.13. Total amount payable
              &pound;1,299. Credit subject to status. Terms and conditions
              apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceBanner;
