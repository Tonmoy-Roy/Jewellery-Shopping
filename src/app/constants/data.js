const PRODUCTS = [
  {
    id: 1,
    name: "Awesome Wooden Watch",
    category: "Accessories",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    reviews: 18,
    price: 678.23,
  },
  {
    id: 2,
    name: "Gold Ring Deluxe",
    category: "Rings",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    reviews: 15,
    price: 780.55,
  },
  {
    id: 3,
    name: "Diamond Necklace",
    category: "Necklaces",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    reviews: 22,
    price: 1200.99,
  },
  {
    id: 4,
    name: "Platinum Infinity Ring",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    reviews: 38,
    price: 3250.00
  },
  {
    id: 5,
    name: "Ruby Heart Pendant",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    reviews: 25,
    price: 980.00
  },
  {
    id: 6,
    name: "Turquoise Beaded Anklet",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    reviews: 44,
    price: 180.50
  },
  {
    id: 7,
    name: "Opal Cluster Earrings",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    reviews: 31,
    price: 650.00
  },
  {
    id: 8,
    name: "Silver Charm Bracelet",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    reviews: 52,
    price: 220.00
  },
  {
    id: 9,
    name: "Diamond Tennis Necklace",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    reviews: 27,
    price: 4200.00
  },
  {
    id: 10,
    name: "Aquamarine Halo Ring",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 39,
    price: 1780.00
  },
  {
    id: 11,
    name: "Garnet Teardrop Earrings",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 22,
    price: 410.00
  },
  {
    id: 12,
    name: "Moonstone Layered Necklace",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 48,
    price: 520.00
  },
  {
    id: 13,
    name: "Citrine Cocktail Ring",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 35,
    price: 890.00
  },
  {
    id: 14,
    name: "Tanzanite Stud Earrings",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 29,
    price: 1350.00
  },
  {
    id: 15,
    name: "Black Onyx Cuff Bracelet",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 4,
    reviews: 41,
    price: 680.00
  },
  {
    id: 16,
    name: "Peridot Pendant Necklace",
    category: "Jewellery",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 33,
    price: 720.00
  },
  {
    id: 17,
    category: "Accessories",
    name: "Gold Chain Belt",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 44,
    price: 280.00
  },
  {
    id: 18,
    category: "Accessories",
    name: "Leather Cuff Bracelet",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 4,
    reviews: 38,
    price: 95.00
  },
  {
    id: 19,
    category: "Accessories",
    name: "Silk Scarf with Gem Clasp",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 29,
    price: 180.00
  },
  {
    id: 20,
    category: "Accessories",
    name: "Beaded Tassel Keychain",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 4,
    reviews: 52,
    price: 45.00
  },
  {
    id: 21,
    category: "Accessories",
    name: "Crystal Hair Pin Set",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 61,
    price: 75.00
  },
  {
    id: 22,
    category: "Accessories",
    name: "Velvet Choker with Pearl",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 33,
    price: 120.00
  },
  {
    id: 23,
    category: "Accessories",
    name: "Sterling Silver Anklet",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 47,
    price: 85.00
  },
  {
    id: 24,
    category: "Diamonds",
    name: "1.5ct Princess Cut Studs",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 55,
    price: 3200.00
  },
  {
    id: 25,
    category: "Diamonds",
    name: "Eternity Band 2ct",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 41,
    price: 4800.00
  },
  {
    id: 26,
    category: "Diamonds",
    name: "Marquise Diamond Pendant",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 36,
    price: 2150.00
  },
  {
    id: 27,
    category: "Diamonds",
    name: "Three-Stone Diamond Ring",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 49,
    price: 5900.00
  },
  {
    id: 28,
    category: "Diamonds",
    name: "Diamond Cross Necklace",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 4,
    reviews: 30,
    price: 1850.00
  },
  {
    id: 29,
    category: "Diamonds",
    name: "Halo Diamond Bracelet",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 27,
    price: 4200.00
  },
  {
    id: 30,
    category: "Diamonds",
    name: "Round Brilliant Drop Earrings",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 58,
    price: 2900.00
  },
  {
    id: 31,
    category: "Earrings",
    name: "Hoop Earrings with Charms",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 66,
    price: 130.00
  },
  {
    id: 32,
    category: "Earrings",
    name: "Chandelier Crystal Earrings",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 40,
    price: 210.00
  },
  {
    id: 33,
    category: "Earrings",
    name: "Threader Chain Earrings",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 53,
    price: 90.00
  },
  {
    id: 34,
    category: "Earrings",
    name: "Pearl Drop Earrings",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 45,
    price: 160.00
  },
  {
    id: 35,
    category: "Earrings",
    name: "Geometric Gold Earrings",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 37,
    price: 195.00
  },
  {
    id: 36,
    category: "Earrings",
    name: "Emerald Cluster Earrings",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 4,
    reviews: 31,
    price: 380.00
  },
  {
    id: 37,
    category: "Earrings",
    name: "Minimalist Bar Studs",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 72,
    price: 65.00
  },
  {
    id: 38,
    category: "Gift Sets",
    name: "Pearl Necklace & Earring Set",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 50,
    price: 320.00
  },
  {
    id: 39,
    category: "Gift Sets",
    name: "Silver Jewelry Trio",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 4,
    reviews: 43,
    price: 180.00
  },
  {
    id: 40,
    category: "Gift Sets",
    name: "Gemstone Ring Collection",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 39,
    price: 450.00
  },
  {
    id: 41,
    category: "Gift Sets",
    name: "Luxury Diamond Pendant Set",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 28,
    price: 1200.00
  },
  {
    id: 42,
    category: "Gift Sets",
    name: "Birthstone Bracelet & Ring",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 4,
    reviews: 35,
    price: 210.00
  },
  {
    id: 43,
    category: "Gift Sets",
    name: "Gold Plated Essentials Set",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 47,
    price: 250.00
  },
  {
    id: 44,
    category: "Pearls",
    name: "Akoya Pearl Strand 18in",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 42,
    price: 890.00
  },
  {
    id: 45,
    category: "Pearls",
    name: "Baroque Pearl Earrings",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 36,
    price: 280.00
  },
  {
    id: 46,
    category: "Pearls",
    name: "Tahitian Black Pearl Ring",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 4,
    reviews: 29,
    price: 620.00
  },
  {
    id: 47,
    category: "Pearls",
    name: "Freshwater Pearl Lariat",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 51,
    price: 195.00
  },
  {
    id: 48,
    category: "Pearls",
    name: "Pearl & Gold Cuff",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 33,
    price: 410.00
  },
  {
    id: 49,
    category: "Rings",
    name: "Vintage Sapphire Ring",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 46,
    price: 1350.00
  },
  {
    id: 50,
    category: "Rings",
    name: "Stackable Gemstone Rings",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 4,
    reviews: 59,
    price: 220.00
  },
  {
    id: 51,
    category: "Rings",
    name: "Rose Gold Signet Ring",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 40,
    price: 380.00
  },
  {
    id: 52,
    category: "Rings",
    name: "Oval Emerald Cocktail Ring",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 32,
    price: 980.00
  },
  {
    id: 53,
    category: "Rings",
    name: "Platinum Diamond Band",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 55,
    price: 2900.00
  },
  {
    id: 54,
    category: "Wedding",
    name: "His & Hers Wedding Bands",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 5,
    reviews: 68,
    price: 1800.00
  },
  {
    id: 55,
    category: "Wedding",
    name: "Engagement Ring with Side Stones",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 44,
    price: 5200.00
  },
  {
    id: 56,
    category: "Wedding",
    name: "Vintage Lace Bridal Set",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 37,
    price: 3400.00
  },
  {
    id: 57,
    category: "Wedding",
    name: "Titanium Matte Wedding Ring",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 4,
    reviews: 49,
    price: 380.00
  },
  {
    id: 58,
    category: "Wedding",
    name: "Pearl Bridal Tiara",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 41,
    price: 620.00
  },
  {
    id: 59,
    category: "Wedding",
    name: "Custom Engraved Ring Pair",
    image: "/images/OlightAllImage/2ShopPage/5.jpg",
    rating: 5,
    reviews: 53,
    price: 950.00
  },
  {
    id: 60,
    category: "Wedding",
    name: "Diamond Infinity Wedding Band",
    image: "/images/OlightAllImage/2ShopPage/7.jpg",
    rating: 5,
    reviews: 35,
    price: 2150.00
  },
  {
    id: 61,
    category: "Wedding",
    name: "Rose Gold Bridal Earrings",
    image: "/images/OlightAllImage/2ShopPage/3.jpg",
    rating: 5,
    reviews: 39,
    price: 480.00
  },
  {
    id: 62,
    category: "Wedding",
    name: "Matching Couple Necklaces",
    image: "/images/OlightAllImage/2ShopPage/8.jpg",
    rating: 4,
    reviews: 57,
    price: 320.00
  },
  {
    id: 63,
    category: "Wedding",
    name: "Floral Pearl Hair Comb",
    image: "/images/OlightAllImage/2ShopPage/4.jpg",
    rating: 5,
    reviews: 45,
    price: 190.00
  },
  {
    id: 64,
    category: "Wedding",
    name: "Classic Solitaire Engagement",
    image: "/images/OlightAllImage/2ShopPage/6.jpg",
    rating: 5,
    reviews: 61,
    price: 6800.00
  },
  {
    id: 65,
    category: "Wedding",
    name: "Groom's Black Onyx Cufflinks",
    image: "/images/OlightAllImage/2ShopPage/2.jpg",
    rating: 5,
    reviews: 33,
    price: 210.00
  },
  {
    id: 66,
    category: "Wedding",
    name: "Eternity Diamond Anklet",
    image: "/images/OlightAllImage/2ShopPage/9.jpg",
    rating: 5,
    reviews: 29,
    price: 890.00
  }
];

export default PRODUCTS;