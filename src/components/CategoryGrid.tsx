import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const CategoryGrid = () => {
  return (
    <section className="py-16 sm:py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Browse by Room
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-medium mt-2">
            Shop by Category
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="category-card group relative overflow-hidden aspect-[4/3] sm:aspect-[3/2]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="category-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-white font-medium">
                  {category.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white/70 text-xs sm:text-sm">
                    {category.count} products
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
