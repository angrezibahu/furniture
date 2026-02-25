export interface Product {
  id: string;
  name: string;
  collection: string;
  category: string;
  price: number;
  wasPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  colors?: string[];
  description: string;
  features: string[];
  dimensions?: string;
  material?: string;
  financeMonthly?: number;
  inStock: boolean;
  deliveryDays: number;
  images: string[];
  videoPlaceholder?: boolean;
}

export const products: Product[] = [
  {
    id: "jordan-corner-sofa",
    name: "Jordan Corner Sofa",
    collection: "Jordan",
    category: "Sofas",
    price: 1299,
    wasPrice: 1699,
    rating: 4.8,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    badge: "Best Seller",
    colors: ["#8B7E74", "#2C2C2C", "#C4B5A5", "#4A5D4A"],
    description: "Sink into the luxurious Jordan Corner Sofa, designed for those who appreciate comfort without compromise. Featuring deep-filled cushions with a high-density foam core wrapped in soft feather topping, this sofa offers the perfect balance of support and indulgence.",
    features: [
      "Deep-filled feather & foam cushions",
      "Hardwood frame construction",
      "Stain-resistant fabric technology",
      "Removable & washable covers",
      "10-year frame guarantee",
    ],
    dimensions: "W290 x D210 x H88cm",
    material: "Premium woven fabric with oak feet",
    financeMonthly: 54,
    inStock: true,
    deliveryDays: 5,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
    ],
    videoPlaceholder: true,
  },
  {
    id: "jordan-3-seater",
    name: "Jordan 3 Seater Sofa",
    collection: "Jordan",
    category: "Sofas",
    price: 899,
    wasPrice: 1199,
    rating: 4.7,
    reviewCount: 218,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
    badge: "Save 25%",
    colors: ["#8B7E74", "#2C2C2C", "#C4B5A5"],
    description: "The Jordan 3 Seater brings the same sumptuous comfort of the corner sofa in a more compact form. Perfect for living rooms where space is at a premium but style is non-negotiable.",
    features: [
      "Deep-filled feather & foam cushions",
      "Hardwood frame construction",
      "Stain-resistant fabric technology",
      "Removable & washable covers",
      "10-year frame guarantee",
    ],
    dimensions: "W220 x D98 x H88cm",
    material: "Premium woven fabric with oak feet",
    financeMonthly: 37,
    inStock: true,
    deliveryDays: 5,
    images: [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    videoPlaceholder: true,
  },
  {
    id: "jordan-2-seater",
    name: "Jordan 2 Seater Sofa",
    collection: "Jordan",
    category: "Sofas",
    price: 699,
    wasPrice: 899,
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
    colors: ["#8B7E74", "#2C2C2C", "#C4B5A5"],
    description: "Compact luxury at its finest. The Jordan 2 Seater is the perfect loveseat, offering the same premium comfort and elegant design in an apartment-friendly size.",
    features: [
      "Deep-filled feather & foam cushions",
      "Hardwood frame construction",
      "Stain-resistant fabric technology",
      "Removable & washable covers",
      "10-year frame guarantee",
    ],
    dimensions: "W180 x D98 x H88cm",
    material: "Premium woven fabric with oak feet",
    financeMonthly: 29,
    inStock: true,
    deliveryDays: 5,
    images: [
      "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
  },
  {
    id: "jordan-footstool",
    name: "Jordan Footstool",
    collection: "Jordan",
    category: "Accessories",
    price: 199,
    rating: 4.7,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    colors: ["#8B7E74", "#2C2C2C", "#C4B5A5"],
    description: "Complete your Jordan collection with the matching footstool. Features internal storage for blankets and magazines.",
    features: [
      "Hidden storage compartment",
      "Matching fabric options",
      "Hardwood legs",
      "Lightweight & portable",
    ],
    dimensions: "W65 x D50 x H42cm",
    material: "Premium woven fabric with oak feet",
    inStock: true,
    deliveryDays: 3,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    ],
  },
  {
    id: "oakley-dining-table",
    name: "Oakley Extending Dining Table",
    collection: "Oakley",
    category: "Dining",
    price: 799,
    wasPrice: 999,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    badge: "Popular",
    colors: ["#8B7E74", "#2C2C2C"],
    description: "The Oakley Extending Dining Table grows with your family. Crafted from solid oak with a beautiful grain, it extends from 6 to 8 seats effortlessly.",
    features: [
      "Solid oak construction",
      "Butterfly extension mechanism",
      "Seats 6-8 people",
      "Protective lacquer finish",
      "25-year guarantee",
    ],
    dimensions: "W160-200 x D90 x H76cm",
    material: "Solid oak with steel extension mechanism",
    financeMonthly: 33,
    inStock: true,
    deliveryDays: 7,
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    ],
  },
  {
    id: "maya-bed-frame",
    name: "Maya Upholstered Bed Frame",
    collection: "Maya",
    category: "Beds",
    price: 649,
    wasPrice: 849,
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    badge: "Save 24%",
    colors: ["#C4B5A5", "#2C2C2C", "#8B7E74"],
    description: "Transform your bedroom with the Maya Upholstered Bed Frame. Its generous padded headboard and clean lines create a statement of understated elegance.",
    features: [
      "Deep-buttoned padded headboard",
      "Solid slat base included",
      "Under-bed storage clearance",
      "Easy assembly",
      "Available in King & Super King",
    ],
    dimensions: "King: W162 x D218 x H120cm",
    material: "Premium velvet with solid wood frame",
    financeMonthly: 27,
    inStock: true,
    deliveryDays: 7,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    ],
  },
  {
    id: "harper-bookcase",
    name: "Harper Tall Bookcase",
    collection: "Harper",
    category: "Storage",
    price: 349,
    rating: 4.5,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    colors: ["#8B7E74", "#FFFFFF"],
    description: "The Harper Tall Bookcase combines form and function with its elegant open shelving design. Display your books, art, and treasured items in style.",
    features: [
      "5 spacious shelves",
      "Anti-tip wall fixing included",
      "Solid wood frame",
      "Easy assembly",
    ],
    dimensions: "W80 x D35 x H185cm",
    material: "Engineered wood with oak veneer",
    inStock: true,
    deliveryDays: 5,
    images: [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    ],
  },
];

export const categories = [
  {
    name: "Sofas & Corners",
    slug: "sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    count: 48,
  },
  {
    name: "Beds & Mattresses",
    slug: "beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    count: 36,
  },
  {
    name: "Dining & Kitchen",
    slug: "dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    count: 29,
  },
  {
    name: "Storage & Shelving",
    slug: "storage",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    count: 31,
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80",
    count: 52,
  },
];

export const collections = [
  { name: "Jordan", description: "Contemporary comfort", productCount: 5 },
  { name: "Oakley", description: "Timeless oak dining", productCount: 8 },
  { name: "Maya", description: "Elegant bedroom", productCount: 6 },
  { name: "Harper", description: "Modern storage", productCount: 4 },
];
