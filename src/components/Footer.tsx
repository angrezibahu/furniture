import { Link } from "react-router-dom";
import {
  Star,
  Truck,
  CreditCard,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-white">
      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-stone-dark">From 3 working days</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-sm font-medium">0% Finance</p>
                <p className="text-xs text-stone-dark">
                  Spread the cost
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-sm font-medium">10 Year Guarantee</p>
                <p className="text-xs text-stone-dark">On all frames</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <p className="text-sm font-medium">40,000+ Reviews</p>
                <p className="text-xs text-stone-dark">Rated Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Newsletter */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h3 className="font-display text-2xl sm:text-3xl font-medium mb-2">
            Join the NCF Family
          </h3>
          <p className="text-stone-dark text-sm mb-6 max-w-md mx-auto">
            Be the first to hear about new collections, exclusive offers, and
            interior inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-stone-dark text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <button
              type="submit"
              className="btn-luxury btn-gold text-sm py-3"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-gold-light">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {[
                "Sofas & Corners",
                "Beds & Mattresses",
                "Dining & Kitchen",
                "Sale",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-stone-dark hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-gold-light">
              Help & Support
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Delivery Information", to: "/" },
                { label: "Returns & Refunds", to: "/returns" },
                { label: "Finance Options", to: "/" },
                { label: "FAQs", to: "/" },
                { label: "Care Guides", to: "/" },
                { label: "Assembly Guides", to: "/" },
                { label: "Track Your Order", to: "/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-stone-dark hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-gold-light">
              About NCF
            </h4>
            <ul className="space-y-2.5">
              {[
                "Our Story",
                "Sustainability",
                "Careers",
                "Press",
                "Reviews",
                "Showrooms",
                "Trade & Contract",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-stone-dark hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-gold-light">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:03330154567"
                  className="flex items-center gap-2 text-sm text-stone-dark hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0333 015 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ncf.co.uk"
                  className="flex items-center gap-2 text-sm text-stone-dark hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@ncf.co.uk
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-stone-dark">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  NCF Living, Unit 5, Furniture Park, Newcastle-under-Lyme,
                  ST5 1AB
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold">NCF</span>
              <span className="text-xs text-stone-dark">
                &copy; 2026 NCF Living. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-stone-dark">
              <Link to="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
