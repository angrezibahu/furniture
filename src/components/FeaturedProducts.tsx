import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Star, Heart, Eye } from "lucide-react";
import { useState } from "react";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.badge);

  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Curated for You
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-medium mt-2">
            Featured Pieces
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-taupe mt-4 text-sm sm:text-base max-w-lg mx-auto">
            Handpicked favourites from our collections, loved by thousands of
            happy customers
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/products"
            className="btn-luxury btn-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={
            isHovered && product.hoverImage
              ? product.hoverImage
              : product.image
          }
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] sm:text-xs font-semibold tracking-wide uppercase ${
              product.badge === "New"
                ? "bg-charcoal text-white"
                : product.badge.includes("Save")
                ? "bg-red-600 text-white"
                : "bg-gold text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Quick actions */}
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted
                  ? "fill-red-500 text-red-500"
                  : "text-charcoal"
              }`}
            />
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          >
            <Eye className="w-4 h-4 text-charcoal" />
          </button>
        </div>

        {/* Finance tag */}
        {product.financeMonthly && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] sm:text-xs font-medium text-charcoal shadow-sm">
            From &pound;{product.financeMonthly}/mo
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4">
        <p className="text-[10px] sm:text-xs text-gold font-medium tracking-wider uppercase mb-1">
          {product.collection} Collection
        </p>
        <h3 className="font-medium text-sm sm:text-base text-charcoal leading-tight mb-2 group-hover:text-gold-dark transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i <= Math.round(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-stone"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs text-taupe">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-base sm:text-lg font-semibold text-charcoal">
            &pound;{product.price.toLocaleString()}
          </span>
          {product.wasPrice && (
            <span className="text-xs sm:text-sm price-was">
              &pound;{product.wasPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Color swatches */}
        {product.colors && (
          <div className="flex items-center gap-1.5 mt-2">
            {product.colors.map((color) => (
              <span
                key={color}
                className="w-4 h-4 rounded-full border border-stone/40"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default FeaturedProducts;
