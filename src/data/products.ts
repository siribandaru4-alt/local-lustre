export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  fullDescription: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ceramic Vase with Dried Flowers",
    price: 49.99,
    description: "Elegant handmade ceramic vase perfect for dried flower arrangements",
    category: "New Arrivals",
    image: "/src/assets/product-1.jpg",
    fullDescription: "This beautiful handcrafted ceramic vase is the perfect addition to any home. Made by skilled artisans, each piece is unique and features a smooth, elegant finish that complements any décor style.",
    features: [
      "Handcrafted ceramic construction",
      "Includes curated dried flower arrangement",
      "Dimensions: 8\" H x 4\" W",
      "Easy to clean and maintain",
      "Makes a perfect gift"
    ]
  },
  {
    id: 2,
    name: "Artisan Scented Candles",
    price: 29.99,
    description: "Hand-poured soy candles with natural wood wicks",
    category: "Best Sellers",
    image: "/src/assets/product-2.jpg",
    fullDescription: "Experience luxury with our hand-poured artisan candles. Made from premium soy wax and infused with natural essential oils, these candles provide a clean, long-lasting burn.",
    features: [
      "100% natural soy wax",
      "Essential oil fragrances",
      "Wooden wick for crackling ambiance",
      "40+ hour burn time",
      "Eco-friendly packaging"
    ]
  },
  {
    id: 3,
    name: "Leather Bifold Wallet",
    price: 79.99,
    description: "Premium handcrafted leather wallet with brass hardware",
    category: "Best Sellers",
    image: "/src/assets/product-3.jpg",
    fullDescription: "This sophisticated leather wallet is crafted from full-grain leather and designed to age beautifully over time. Features multiple card slots and a secure snap closure.",
    features: [
      "Full-grain leather construction",
      "Brass snap closure",
      "6 card slots + bill compartment",
      "Slim profile design",
      "Handstitched details"
    ]
  },
  {
    id: 4,
    name: "Wooden Cutting Board",
    price: 59.99,
    description: "Premium hardwood cutting board with natural grain patterns",
    category: "New Arrivals",
    image: "/src/assets/product-4.jpg",
    fullDescription: "A stunning addition to any kitchen, this cutting board is crafted from sustainably sourced hardwood. The natural grain patterns make each board one-of-a-kind.",
    features: [
      "Sustainable hardwood",
      "Food-safe finish",
      "Dimensions: 16\" x 10\" x 1\"",
      "Reversible design",
      "Easy to maintain"
    ]
  },
  {
    id: 5,
    name: "Organic Cotton Tote Bag",
    price: 24.99,
    description: "Eco-friendly tote bag with minimalist design",
    category: "Offers",
    image: "/src/assets/product-5.jpg",
    fullDescription: "Perfect for shopping, beach trips, or everyday use. This durable tote is made from 100% organic cotton and features reinforced stitching for long-lasting use.",
    features: [
      "100% organic cotton",
      "Reinforced handles",
      "Large capacity",
      "Machine washable",
      "Minimalist design"
    ]
  },
  {
    id: 6,
    name: "Handmade Ceramic Mug",
    price: 34.99,
    description: "Artisan ceramic mug with unique glaze finish",
    category: "Best Sellers",
    image: "/src/assets/product-6.jpg",
    fullDescription: "Start your day with this beautifully crafted ceramic mug. Each piece is wheel-thrown and hand-glazed, making every mug unique.",
    features: [
      "Wheel-thrown ceramic",
      "Hand-glazed finish",
      "Microwave & dishwasher safe",
      "12 oz capacity",
      "Comfortable handle grip"
    ]
  }
];
