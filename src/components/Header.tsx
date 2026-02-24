import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";

const navItems = [
  {
    label: "Sofas",
    href: "/products?category=Sofas",
    submenu: [
      "Corner Sofas",
      "3 Seater Sofas",
      "2 Seater Sofas",
      "Sofa Beds",
      "Chaise Sofas",
      "Modular Sofas",
    ],
  },
  {
    label: "Beds",
    href: "/products?category=Beds",
    submenu: [
      "Double Beds",
      "King Size Beds",
      "Super King Beds",
      "Ottoman Beds",
      "Divan Beds",
      "Mattresses",
    ],
  },
  {
    label: "Dining",
    href: "/products?category=Dining",
    submenu: [
      "Dining Tables",
      "Dining Chairs",
      "Dining Sets",
      "Bar Stools",
      "Sideboards",
    ],
  },
  {
    label: "Chairs",
    href: "/products?category=Chairs",
    submenu: [
      "Armchairs",
      "Accent Chairs",
      "Recliners",
      "Swivel Chairs",
      "Footstools",
    ],
  },
  {
    label: "Storage",
    href: "/products?category=Storage",
    submenu: [
      "TV Units",
      "Bookcases",
      "Sideboards",
      "Coffee Tables",
      "Console Tables",
    ],
  },
  { label: "Sale", href: "/products?sale=true", highlight: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Main header row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="text-center">
                <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-charcoal leading-none">
                  NCF
                </h1>
                <p className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-taupe font-light leading-none mt-0.5">
                  Living &bull; Refined
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.label)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                      item.highlight
                        ? "text-red-600 hover:text-red-700"
                        : "text-charcoal hover:text-gold"
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    )}
                  </Link>
                  {/* Dropdown */}
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border border-stone/30 min-w-[220px] py-3 animate-slide-down">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub}
                          to={item.href}
                          className="block px-5 py-2 text-sm text-charcoal-light hover:text-charcoal hover:bg-cream transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                      <div className="border-t border-stone/30 mt-2 pt-2 px-5">
                        <Link
                          to={item.href}
                          className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                        >
                          View All {item.label} &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 md:gap-3">
              <a
                href="tel:01onal"
                className="hidden lg:flex items-center gap-1.5 text-sm text-taupe hover:text-charcoal transition-colors mr-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0333 015 4567</span>
              </a>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/"
                className="p-2 text-charcoal hover:text-gold transition-colors hidden md:block"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="p-2 text-charcoal hover:text-gold transition-colors hidden md:block"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="p-2 text-charcoal hover:text-gold transition-colors relative"
                aria-label="Basket"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar slide-down */}
        {searchOpen && (
          <div className="border-t border-stone/30 bg-white animate-slide-down">
            <div className="max-w-3xl mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for sofas, beds, dining tables..."
                  className="w-full pl-12 pr-4 py-3 bg-cream border border-stone/40 text-charcoal placeholder-taupe text-sm focus:outline-none focus:border-gold transition-colors"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-charcoal"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 mobile-nav-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 w-[300px] h-full bg-white shadow-2xl overflow-y-auto animate-fade-in">
            <div className="p-6 border-b border-stone/30">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-charcoal">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-taupe hover:text-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <nav className="py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-base font-medium ${
                      item.highlight
                        ? "text-red-600"
                        : "text-charcoal"
                    } hover:bg-cream transition-colors`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-10 pb-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-taupe hover:text-charcoal transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-stone/30 p-6">
              <a
                href="tel:03330154567"
                className="flex items-center gap-2 text-sm text-charcoal font-medium"
              >
                <Phone className="w-4 h-4 text-gold" />
                0333 015 4567
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
