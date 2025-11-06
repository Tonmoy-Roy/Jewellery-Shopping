const PRODUCTS = [
  {
    id: 1,
    name: "Awesome Wooden Watch",
    category: "Accessories",
    brand: "TimberCraft",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    reviews: 18,
    price: 678.23,
  },
  {
    id: 2,
    name: "Gold Ring Deluxe",
    category: "Rings",
    brand: "Ariel",
    carats: "18kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    reviews: 15,
    price: 780.55,
  },
  {
    id: 3,
    name: "Diamond Necklace",
    category: "Necklaces",
    brand: "Gordon",
    carats: "14kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    reviews: 22,
    price: 1200.99,
  },
  {
    id: 4,
    name: "Platinum Infinity Ring",
    category: "Jewellery",
    brand: "Lizzie",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    reviews: 38,
    price: 3250.00
  },
  {
    id: 5,
    name: "Ruby Heart Pendant",
    category: "Jewellery",
    brand: "Mejuri",
    carats: "18kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    reviews: 25,
    price: 980.00
  },
  {
    id: 6,
    name: "Turquoise Beaded Anklet",
    category: "Jewellery",
    brand: "Mandiler",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    reviews: 44,
    price: 180.50
  },
  {
    id: 7,
    name: "Opal Cluster Earrings",
    category: "Jewellery",
    brand: "LuxeOpal",
    carats: "14kt",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    reviews: 31,
    price: 650.00
  },
  {
    id: 8,
    name: "Silver Charm Bracelet",
    category: "Jewellery",
    brand: "Charmelle",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    reviews: 52,
    price: 220.00
  },
  {
    id: 9,
    name: "Diamond Tennis Necklace",
    category: "Jewellery",
    brand: "BrillianceCo",
    carats: "24kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    reviews: 27,
    price: 4200.00
  },
  {
    id: 10,
    name: "Aquamarine Halo Ring",
    category: "Jewellery",
    brand: "AquaLuxe",
    carats: "18kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 39,
    price: 1780.00
  },
  {
    id: 11,
    name: "Garnet Teardrop Earrings",
    category: "Jewellery",
    brand: "CrimsonGem",
    carats: "14kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 22,
    price: 410.00
  },
  {
    id: 12,
    name: "Moonstone Layered Necklace",
    category: "Jewellery",
    brand: "LunarLight",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 48,
    price: 520.00
  },
  {
    id: 13,
    name: "Citrine Cocktail Ring",
    category: "Jewellery",
    brand: "Sunburst",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 35,
    price: 890.00
  },
  {
    id: 14,
    name: "Tanzanite Stud Earrings",
    category: "Jewellery",
    brand: "VioletRare",
    carats: "18kt",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 29,
    price: 1350.00
  },
  {
    id: 15,
    name: "Black Onyx Cuff Bracelet",
    category: "Jewellery",
    brand: "ObsidianEdge",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 4,
    reviews: 41,
    price: 680.00
  },
  {
    id: 16,
    name: "Peridot Pendant Necklace",
    category: "Jewellery",
    brand: "GreenGlow",
    carats: "14kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 33,
    price: 720.00
  },
  {
    id: 17,
    category: "Accessories",
    name: "Gold Chain Belt",
    brand: "GildedLink",
    carats: "18kt",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 44,
    price: 280.00
  },
  {
    id: 18,
    category: "Accessories",
    name: "Leather Cuff Bracelet",
    brand: "UrbanHide",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 4,
    reviews: 38,
    price: 95.00
  },
  {
    id: 19,
    category: "Accessories",
    name: "Silk Scarf with Gem Clasp",
    brand: "SilkenGem",
    carats: "14kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 29,
    price: 180.00
  },
  {
    id: 20,
    category: "Accessories",
    name: "Beaded Tassel Keychain",
    brand: "BohoBead",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 4,
    reviews: 52,
    price: 45.00
  },
  {
    id: 21,
    category: "Accessories",
    name: "Crystal Hair Pin Set",
    brand: "SparklePin",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 61,
    price: 75.00
  },
  {
    id: 22,
    category: "Accessories",
    name: "Velvet Choker with Pearl",
    brand: "VelvetPearl",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 33,
    price: 120.00
  },
  {
    id: 23,
    category: "Accessories",
    name: "Sterling Silver Anklet",
    brand: "SilverStep",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 47,
    price: 85.00
  },
  {
    id: 24,
    category: "Diamonds",
    name: "1.5ct Princess Cut Studs",
    brand: "DiamondElite",
    carats: "24kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 55,
    price: 3200.00
  },
  {
    id: 25,
    category: "Diamonds",
    name: "Eternity Band 2ct",
    brand: "ForeverBand",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 41,
    price: 4800.00
  },
  
  
  
  {
    id: 29,
    category: "Diamonds",
    name: "Halo Diamond Bracelet",
    brand: "HaloHeaven",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 27,
    price: 4200.00
  },
  
  {
    id: 32,
    category: "Earrings",
    name: "Chandelier Crystal Earrings",
    brand: "CrystalChandelier",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 40,
    price: 210.00
  },
  {
    id: 33,
    category: "Earrings",
    name: "Threader Chain Earrings",
    brand: "ThreadLux",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 53,
    price: 90.00
  },
  {
    id: 34,
    category: "Earrings",
    name: "Pearl Drop Earrings",
    brand: "PearlGrace",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 45,
    price: 160.00
  },
  
 
  {
    id: 37,
    category: "Earrings",
    name: "Minimalist Bar Studs",
    brand: "BarEssence",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 72,
    price: 65.00
  },
  {
    id: 38,
    category: "Gift Sets",
    name: "Pearl Necklace & Earring Set",
    brand: "PearlHarmony",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 50,
    price: 320.00
  },
  {
    id: 39,
    category: "Gift Sets",
    name: "Silver Jewelry Trio",
    brand: "SilverTrio",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 43,
    price: 180.00
  },
  {
    id: 40,
    category: "Gift Sets",
    name: "Gemstone Ring Collection",
    brand: "GemCollective",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 39,
    price: 450.00
  },
  {
    id: 41,
    category: "Gift Sets",
    name: "Luxury Diamond Pendant Set",
    brand: "LuxePendant",
    carats: "24kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 28,
    price: 1200.00
  },
  
  {
    id: 43,
    category: "Gift Sets",
    name: "Gold Plated Essentials Set",
    brand: "GoldEssence",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 47,
    price: 250.00
  },
  {
    id: 44,
    category: "Pearls",
    name: "Akoya Pearl Strand 18in",
    brand: "AkoyaPure",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 42,
    price: 890.00
  },
  {
    id: 45,
    category: "Pearls",
    name: "Baroque Pearl Earrings",
    brand: "BaroqueBeauty",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 36,
    price: 280.00
  },
  
  {
    id: 47,
    category: "Pearls",
    name: "Freshwater Pearl Lariat",
    brand: "FreshPearl",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 51,
    price: 195.00
  },
  {
    id: 48,
    category: "Pearls",
    name: "Pearl & Gold Cuff",
    brand: "PearlGold",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 33,
    price: 410.00
  },
  
 
  
  {
    id: 52,
    category: "Rings",
    name: "Oval Emerald Cocktail Ring",
    brand: "EmeraldOval",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 32,
    price: 980.00
  },
  {
    id: 53,
    category: "Rings",
    name: "Platinum Diamond Band",
    brand: "PlatinumBand",
    carats: "24kt",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 55,
    price: 2900.00
  },
  
  {
    id: 55,
    category: "Wedding",
    name: "Engagement Ring with Side Stones",
    brand: "PromiseRing",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 44,
    price: 5200.00
  },
  
  {
    id: 57,
    category: "Wedding",
    name: "Titanium Matte Wedding Ring",
    brand: "TitanStrong",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 49,
    price: 380.00
  },
  {
    id: 58,
    category: "Wedding",
    name: "Pearl Bridal Tiara",
    brand: "BridalPearl",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 41,
    price: 620.00
  },
 
  {
    id: 60,
    category: "Wedding",
    name: "Diamond Infinity Wedding Band",
    brand: "InfinityBond",
    carats: "24kt",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 35,
    price: 2150.00
  },
  {
    id: 62,
    category: "Wedding",
    name: "Matching Couple Necklaces",
    brand: "LoveLink",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 4,
    reviews: 57,
    price: 320.00
  },
  {
    id: 63,
    category: "Wedding",
    name: "Floral Pearl Hair Comb",
    brand: "FloralPearl",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 45,
    price: 190.00
  },
  {
    id: 64,
    category: "Wedding",
    name: "Classic Solitaire Engagement",
    brand: "ClassicSolitaire",
    carats: "22kt",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 61,
    price: 6800.00
  },
  {
    id: 65,
    category: "Wedding",
    name: "Groom's Black Onyx Cufflinks",
    brand: "GroomOnyx",
    carats: "13kt",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 33,
    price: 210.00
  },
];

export default PRODUCTS;