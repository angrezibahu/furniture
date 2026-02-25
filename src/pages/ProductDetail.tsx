import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
  Play,
  Upload,
  CheckCircle2,
  Share2,
} from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "description" | "dimensions" | "delivery" | "reviews"
  >("description");

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-white">
        <AnnouncementBar />
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-charcoal mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="btn-luxury btn-outline">
            Browse Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  );

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
            <ChevronRight className="w-3 h-3" />
            <Link
              to="/products"
              className="hover:text-charcoal transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square bg-cream overflow-hidden group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase ${
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

              {/* Video play overlay for video placeholder */}
              {product.videoPlaceholder && selectedImage === 0 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg">
                    <Play className="w-6 h-6 text-charcoal ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-20 h-20 border-2 transition-colors overflow-hidden ${
                    selectedImage === i
                      ? "border-charcoal"
                      : "border-stone/30 hover:border-stone"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              {/* Video thumbnail placeholder */}
              {product.videoPlaceholder && (
                <button
                  onClick={() => setShowVideoUpload(true)}
                  className="flex-shrink-0 w-20 h-20 border-2 border-dashed border-stone/40 flex flex-col items-center justify-center hover:border-gold transition-colors bg-cream"
                >
                  <Play className="w-4 h-4 text-taupe mb-0.5" />
                  <span className="text-[8px] text-taupe uppercase tracking-wider">
                    Video
                  </span>
                </button>
              )}
            </div>

            {/* Video upload zone */}
            {showVideoUpload && (
              <div className="border-2 border-dashed border-gold/40 bg-cream p-6 text-center animate-fade-in">
                <Upload className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-sm font-medium text-charcoal mb-1">
                  Upload Product Video
                </p>
                <p className="text-xs text-taupe mb-3">
                  Drag & drop or click to upload MP4, MOV, or WebM
                </p>
                <label className="btn-luxury btn-outline text-xs cursor-pointer inline-block">
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                  />
                  Choose Video File
                </label>
                <button
                  onClick={() => setShowVideoUpload(false)}
                  className="block mx-auto mt-3 text-xs text-taupe hover:text-charcoal"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <div className="mb-4">
              <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
                {product.collection} Collection
              </span>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium mt-1">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= Math.round(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-stone"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal font-medium">
                {product.rating}
              </span>
              <span className="text-sm text-taupe">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold text-charcoal">
                &pound;{product.price.toLocaleString()}
              </span>
              {product.wasPrice && (
                <>
                  <span className="text-lg price-was">
                    &pound;{product.wasPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-0.5">
                    Save &pound;
                    {(product.wasPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Finance callout */}
            {product.financeMonthly && (
              <div className="bg-cream border border-stone/30 p-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-charcoal">
                    0% Finance Available
                  </span>
                </div>
                <p className="text-sm text-taupe">
                  From{" "}
                  <span className="font-semibold text-charcoal">
                    &pound;{product.financeMonthly}/month
                  </span>{" "}
                  over 24 months, 0% APR. No deposit required.
                </p>
              </div>
            )}

            {/* Color selection */}
            {product.colors && (
              <div className="mb-6">
                <p className="text-sm font-medium text-charcoal mb-2">
                  Colour:{" "}
                  <span className="text-taupe font-normal">
                    {
                      [
                        "Natural Taupe",
                        "Charcoal",
                        "Stone",
                        "Forest Green",
                        "Blush",
                      ][selectedColor] || "Natural"
                    }
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === i
                          ? "border-charcoal scale-110"
                          : "border-stone/40 hover:border-stone"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to basket */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center border border-stone/40">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-11 h-11 flex items-center justify-center text-sm font-medium text-charcoal border-x border-stone/40">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="btn-luxury btn-primary flex-1 gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Basket
              </button>

              <button className="btn-luxury btn-outline w-11 h-11 p-0 flex-shrink-0 flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </button>

              <button className="btn-luxury btn-outline w-11 h-11 p-0 flex-shrink-0 flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Trust signals */}
            <div className="space-y-2.5 py-6 border-y border-stone/30">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm text-charcoal">
                  <span className="font-medium">
                    Fast delivery in {product.deliveryDays} working days
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm text-charcoal">
                  0% finance available &mdash; spread the cost
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm text-charcoal">
                  10-year frame guarantee
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm text-charcoal font-medium">
                  {product.inStock ? "In Stock" : "Made to Order"}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6">
              <div className="flex border-b border-stone/30 gap-6">
                {(
                  [
                    "description",
                    "dimensions",
                    "delivery",
                    "reviews",
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium capitalize transition-colors relative ${
                      activeTab === tab
                        ? "text-charcoal"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                    )}
                  </button>
                ))}
              </div>

              <div className="py-6">
                {activeTab === "description" && (
                  <div className="animate-fade-in">
                    <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-sm text-charcoal-light"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    {product.material && (
                      <p className="text-sm text-taupe mt-4">
                        <span className="font-medium text-charcoal">
                          Material:
                        </span>{" "}
                        {product.material}
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "dimensions" && (
                  <div className="animate-fade-in">
                    {product.dimensions ? (
                      <div>
                        <p className="text-sm text-charcoal-light mb-3">
                          <span className="font-medium text-charcoal">
                            Dimensions:
                          </span>{" "}
                          {product.dimensions}
                        </p>
                        <div className="bg-cream p-4 border border-stone/30">
                          <p className="text-xs text-taupe">
                            Please ensure you measure your space carefully
                            before ordering. All measurements are approximate
                            and may vary by +/- 3cm.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-taupe">
                        Dimensions information coming soon.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "delivery" && (
                  <div className="animate-fade-in space-y-3">
                    <div className="flex items-start gap-2.5">
                      <Truck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Standard Delivery
                        </p>
                        <p className="text-sm text-taupe">
                          {product.deliveryDays} working days &mdash;{" "}
                          {product.price >= 499 ? "FREE" : "from £29.99"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Truck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Room of Choice Delivery
                        </p>
                        <p className="text-sm text-taupe">
                          Delivered to the room of your choice, packaging
                          removed &mdash; from £49.99
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-display font-semibold text-charcoal">
                          {product.rating}
                        </div>
                        <div className="flex items-center gap-0.5 mt-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i <= Math.round(product.rating)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-stone"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-taupe mt-1">
                          {product.reviewCount} reviews
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Sarah M.",
                          rating: 5,
                          text: "Absolutely stunning sofa. The quality is incredible for the price. So comfortable!",
                        },
                        {
                          name: "James T.",
                          rating: 5,
                          text: "Delivery was quick and the team were brilliant. Looks even better in person.",
                        },
                        {
                          name: "Lisa W.",
                          rating: 4,
                          text: "Really pleased with this purchase. Great value for money.",
                        },
                      ].map((review, i) => (
                        <div
                          key={i}
                          className="border-b border-stone/20 pb-4"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                  key={s}
                                  className={`w-3 h-3 ${
                                    s <= review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-stone"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs font-medium text-charcoal">
                              {review.name}
                            </span>
                          </div>
                          <p className="text-sm text-charcoal-light">
                            {review.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-12 border-t border-stone/30">
            <div className="text-center mb-10">
              <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
                Complete the Look
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-medium mt-2">
                From the {product.collection} Collection
              </h2>
              <div className="section-divider mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="product-card group bg-white overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden bg-cream">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-medium text-sm text-charcoal leading-tight mb-1 group-hover:text-gold-dark transition-colors">
                      {related.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-charcoal">
                        &pound;{related.price.toLocaleString()}
                      </span>
                      {related.wasPrice && (
                        <span className="text-xs price-was">
                          &pound;{related.wasPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
