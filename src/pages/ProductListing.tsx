import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import {
  Star,
  Heart,
  SlidersHorizontal,
  X,
  ChevronDown,
  Grid3X3,
  LayoutGrid,
  ArrowUpDown,
} from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState<2 | 3>(3);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Collection filter
    if (selectedCollection) {
      result = result.filter(
        (p) => p.collection.toLowerCase() === selectedCollection.toLowerCase()
      );
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedCollection, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedCollection("");
    setPriceRange([0, 2000]);
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory ||
    selectedCollection ||
    priceRange[0] > 0 ||
    priceRange[1] < 2000;

  return (
    <div className="min-h-screen bg-warm-white">
      <AnnouncementBar />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-stone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-taupe">
            <Link to="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium">
              {searchQuery
                ? `Search: "${searchQuery}"`
                : selectedCategory || "All Products"}
            </span>
          </nav>
        </div>
      </div>

      {/* Page header */}
      <div className="bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="font-display text-3xl sm:text-4xl text-charcoal font-medium">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : selectedCategory
              ? categories.find(
                  (c) =>
                    c.slug.toLowerCase() === selectedCategory.toLowerCase()
                )?.name || selectedCategory
              : "All Furniture"}
          </h1>
          <p className="text-taupe mt-2 text-sm">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone/30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold text-white text-[10px] flex items-center justify-center rounded-full">
                  !
                </span>
              )}
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-taupe hover:text-charcoal transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative">
              <div className="flex items-center gap-1.5 text-sm text-charcoal">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer appearance-none pr-5"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-3 h-3 -ml-4" />
              </div>
            </div>

            {/* Grid toggle */}
            <div className="hidden md:flex items-center gap-1 border-l border-stone/30 pl-4">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 ${
                  gridCols === 2 ? "text-charcoal" : "text-stone-dark"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 ${
                  gridCols === 3 ? "text-charcoal" : "text-stone-dark"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="sticky top-24 space-y-6">
              {/* Mobile close */}
              <div className="flex items-center justify-between lg:hidden">
                <span className="font-medium text-charcoal">Filters</span>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 text-taupe"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category filter */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-3 tracking-wide uppercase">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`block text-sm transition-colors ${
                      !selectedCategory
                        ? "text-charcoal font-medium"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === cat.slug ? "" : cat.slug
                        )
                      }
                      className={`block text-sm transition-colors ${
                        selectedCategory.toLowerCase() ===
                        cat.slug.toLowerCase()
                          ? "text-charcoal font-medium"
                          : "text-taupe hover:text-charcoal"
                      }`}
                    >
                      {cat.name}{" "}
                      <span className="text-stone-dark">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Collection filter */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-3 tracking-wide uppercase">
                  Collection
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCollection("")}
                    className={`block text-sm transition-colors ${
                      !selectedCollection
                        ? "text-charcoal font-medium"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    All Collections
                  </button>
                  {["Jordan", "Oakley", "Maya", "Harper"].map((col) => (
                    <button
                      key={col}
                      onClick={() =>
                        setSelectedCollection(
                          selectedCollection === col ? "" : col
                        )
                      }
                      className={`block text-sm transition-colors ${
                        selectedCollection === col
                          ? "text-charcoal font-medium"
                          : "text-taupe hover:text-charcoal"
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-3 tracking-wide uppercase">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                  />
                  <div className="flex items-center justify-between text-xs text-taupe">
                    <span>&pound;{priceRange[0]}</span>
                    <span>&pound;{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-3 tracking-wide uppercase">
                  Availability
                </h3>
                <label className="flex items-center gap-2 text-sm text-charcoal cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-charcoal"
                  />
                  In Stock
                </label>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-display text-2xl text-charcoal mb-2">
                  No products found
                </p>
                <p className="text-taupe text-sm mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-luxury btn-outline text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 ${
                  gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                } gap-4 sm:gap-6 stagger-children`}
              >
                {filteredProducts.map((product) => (
                  <PLPProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function PLPProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
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

        {/* Quick wishlist */}
        <button
          onClick={(e) => e.preventDefault()}
          className={`absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-sm ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Heart className="w-4 h-4 text-charcoal" />
        </button>

        {/* Finance tag */}
        {product.financeMonthly && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] sm:text-xs font-medium text-charcoal shadow-sm">
            From &pound;{product.financeMonthly}/mo &bull; 0% APR
          </div>
        )}

        {/* Video indicator */}
        {product.videoPlaceholder && (
          <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-sm px-2 py-1 text-[10px] text-white flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Video
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

        {/* Delivery */}
        <p className="text-[10px] sm:text-xs text-sage mt-2">
          Delivery in {product.deliveryDays} days
        </p>
      </div>
    </Link>
  );
}

export default ProductListing;
