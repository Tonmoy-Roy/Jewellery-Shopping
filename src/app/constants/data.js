const PRODUCTS = [
  {
    id: 1,
    name: "Awesome Wooden Watch",
    category: "Accessories",
    brand: "TimberCraft",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/10.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    reviews: 18,
    price: 678.23,
    inStock: true,
    shortDescription: "Eco-luxury wooden watch with 15kt gold bezel and Swiss quartz movement. Sustainable style redefined."
  },
  {
    id: 2,
    name: "Gold Ring Deluxe",
    category: "Rings",
    brand: "Ariel",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    reviews: 15,
    price: 780.55,
    inStock: true,
    shortDescription: "18kt yellow gold dome ring with brushed texture. Ethical, timeless, and comfort-fit."
  },
  {
    id: 3,
    name: "Diamond Necklace",
    category: "Necklaces",
    brand: "Gordon",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/10.jpg"
    ],
    reviews: 22,
    price: 1200.99,
    inStock: false,
    shortDescription: "0.75ct GIA-certified diamond pendant in 14kt white gold. Adjustable chain. Out of stock."
  },
  // === Jewellery ===
  {
    id: 4,
    name: "Platinum Infinity Ring",
    category: "Jewellery",
    brand: "Lizzie",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    reviews: 38,
    price: 3250.00,
    inStock: true,
    shortDescription: "22kt platinum infinity ring with micro-pavé diamonds. Symbol of eternal love."
  },
  {
    id: 5,
    name: "Ruby Heart Pendant",
    category: "Jewellery",
    brand: "Mejuri",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    reviews: 25,
    price: 980.00,
    inStock: true,
    shortDescription: "1.2ct Burmese ruby heart in 18kt rose gold. Passion in every beat."
  },
  {
    id: 6,
    name: "Turquoise Beaded Anklet",
    category: "Jewellery",
    brand: "Mandiler",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    reviews: 44,
    price: 180.50,
    inStock: true,
    shortDescription: "Hand-strung Kingman turquoise anklet with 15kt gold accents. Bohemian summer essential."
  },
  {
    id: 7,
    name: "Opal Cluster Earrings",
    category: "Jewellery",
    brand: "LuxeOpal",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    reviews: 31,
    price: 650.00,
    inStock: false,
    shortDescription: "Australian opal cluster earrings in 14kt gold. Cosmic fire. Out of stock."
  },
  {
    id: 8,
    name: "Silver Charm Bracelet",
    category: "Jewellery",
    brand: "Charmelle",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    reviews: 52,
    price: 220.00,
    inStock: true,
    shortDescription: "15kt gold vermeil charm bracelet with 5 starter charms. Build your story."
  },
  {
    id: 9,
    name: "Diamond Tennis Necklace",
    category: "Jewellery",
    brand: "BrillianceCo",
    carats: "24kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    reviews: 27,
    price: 4200.00,
    inStock: true,
    shortDescription: "4.8ctw diamond tennis necklace in 24kt white gold. Red-carpet sparkle."
  },
  {
    id: 10,
    name: "Aquamarine Halo Ring",
    category: "Jewellery",
    brand: "AquaLuxe",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 39,
    price: 1780.00,
    inStock: true,
    shortDescription: "2.3ct oval aquamarine with diamond halo in 18kt white gold. Ocean serenity."
  },
  {
    id: 11,
    name: "Garnet Teardrop Earrings",
    category: "Jewellery",
    brand: "CrimsonGem",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 4,
    reviews: 22,
    price: 410.00,
    inStock: false,
    shortDescription: "1.8ct Mozambique garnet drops in 14kt rose gold. Passionate elegance. Out of stock."
  },
  {
    id: 12,
    name: "Moonstone Layered Necklace",
    category: "Jewellery",
    brand: "LunarLight",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 5,
    reviews: 48,
    price: 520.00,
    inStock: true,
    shortDescription: "Triple-layer rainbow moonstone necklace in 15kt gold. Lunar magic."
  },
  {
    id: 13,
    name: "Citrine Cocktail Ring",
    category: "Jewellery",
    brand: "Sunburst",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 4,
    reviews: 35,
    price: 890.00,
    inStock: true,
    shortDescription: "Bold 3.5ct citrine in 22kt gold. Sunshine on your finger."
  },
  {
    id: 14,
    name: "Tanzanite Stud Earrings",
    category: "Jewellery",
    brand: "VioletRare",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 29,
    price: 1350.00,
    inStock: true,
    shortDescription: "Rare 1ct tanzanite studs in 18kt white gold. Violet fire."
  },
  {
    id: 15,
    name: "Black Onyx Cuff Bracelet",
    category: "Jewellery",
    brand: "ObsidianEdge",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 4,
    reviews: 41,
    price: 680.00,
    inStock: true,
    shortDescription: "Sleek black onyx cuff in 15kt gold. Modern power piece."
  },
  {
    id: 16,
    name: "Peridot Pendant Necklace",
    category: "Jewellery",
    brand: "GreenGlow",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 33,
    price: 720.00,
    inStock: false,
    shortDescription: "1.8ct peridot pendant in 14kt gold. August’s green glow. Out of stock."
  },
  // === Accessories ===
  {
    id: 17,
    category: "Accessories",
    name: "Gold Chain Belt",
    brand: "GildedLink",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 5,
    reviews: 44,
    price: 280.00,
    inStock: true,
    shortDescription: "18kt gold chain belt. Elevates any dress or jeans."
  },
  {
    id: 18,
    category: "Accessories",
    name: "Leather Cuff Bracelet",
    brand: "UrbanHide",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 4,
    reviews: 38,
    price: 95.00,
    inStock: true,
    shortDescription: "Italian leather cuff with 15kt gold clasp. Urban edge."
  },
  {
    id: 19,
    category: "Accessories",
    name: "Silk Scarf with Gem Clasp",
    brand: "SilkenGem",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 29,
    price: 180.00,
    inStock: true,
    shortDescription: "Hand-printed silk scarf with 14kt gemstone clasp. Luxe touch."
  },
  {
    id: 20,
    category: "Accessories",
    name: "Beaded Tassel Keychain",
    brand: "BohoBead",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    rating: 4,
    reviews: 52,
    price: 45.00,
    inStock: true,
    shortDescription: "Gemstone beaded keychain with tassel. Boho charm on the go."
  },
  {
    id: 21,
    category: "Accessories",
    name: "Crystal Hair Pin Set",
    brand: "SparklePin",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 5,
    reviews: 61,
    price: 75.00,
    inStock: false,
    shortDescription: "Set of 3 crystal hair pins in 15kt gold. Bridal sparkle. Out of stock."
  },
  {
    id: 22,
    category: "Accessories",
    name: "Velvet Choker with Pearl",
    brand: "VelvetPearl",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 33,
    price: 120.00,
    inStock: true,
    shortDescription: "Black velvet choker with freshwater pearl. '90s revival luxury."
  },
  {
    id: 23,
    category: "Accessories",
    name: "Sterling Silver Anklet",
    brand: "SilverStep",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 4,
    reviews: 47,
    price: 85.00,
    inStock: true,
    shortDescription: "Dainty sterling silver anklet with heart charm. Everyday shimmer."
  },
  // === Diamonds ===
  {
    id: 24,
    category: "Diamonds",
    name: "1.5ct Princess Cut Studs",
    brand: "DiamondElite",
    carats: "24kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 55,
    price: 3200.00,
    inStock: true,
    shortDescription: "1.5ctw princess-cut diamond studs in 24kt white gold. Timeless brilliance."
  },
  {
    id: 25,
    category: "Diamonds",
    name: "Eternity Band 2ct",
    brand: "ForeverBand",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 5,
    reviews: 41,
    price: 4800.00,
    inStock: false,
    shortDescription: "2ctw diamond eternity band in 22kt gold. Forever sparkle. Out of stock."
  },
  {
    id: 26,
    category: "Diamonds",
    name: "Marquise Diamond Pendant",
    brand: "MarquiseLux",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 5,
    reviews: 36,
    price: 2150.00,
    inStock: true,
    shortDescription: "1ct marquise diamond pendant in 18kt gold. Elegant elongation."
  },
  {
    id: 27,
    category: "Diamonds",
    name: "Three-Stone Diamond Ring",
    brand: "TrinityGlow",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 5,
    reviews: 49,
    price: 5900.00,
    inStock: true,
    shortDescription: "3ctw three-stone diamond ring in 14kt white gold. Past, present, future."
  },
  {
    id: 28,
    category: "Diamonds",
    name: "Diamond Cross Necklace",
    brand: "FaithSpark",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 4,
    reviews: 30,
    price: 1850.00,
    inStock: true,
    shortDescription: "Diamond cross pendant in 18kt gold. Faith in sparkle."
  },
  {
    id: 29,
    category: "Diamonds",
    name: "Halo Diamond Bracelet",
    brand: "HaloHeaven",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 27,
    price: 4200.00,
    inStock: false,
    shortDescription: "3ctw halo diamond bracelet in 22kt gold. Heavenly glow. Out of stock."
  },
  {
    id: 30,
    category: "Diamonds",
    name: "Round Brilliant Drop Earrings",
    brand: "BrillDrop",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 58,
    price: 2900.00,
    inStock: true,
    shortDescription: "2ctw round brilliant drop earrings in 14kt gold. Classic motion."
  },
  // === Earrings ===
  {
    id: 31,
    category: "Earrings",
    name: "Hoop Earrings with Charms",
    brand: "CharmHoop",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 4,
    reviews: 66,
    price: 130.00,
    inStock: true,
    shortDescription: "18kt gold hoops with 3 removable charms. Mix and match."
  },
  {
    id: 32,
    category: "Earrings",
    name: "Chandelier Crystal Earrings",
    brand: "CrystalChandelier",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 40,
    price: 210.00,
    inStock: true,
    shortDescription: "Swarovski crystal chandeliers in 15kt gold. Gala-ready drama."
  },
  {
    id: 33,
    category: "Earrings",
    name: "Threader Chain Earrings",
    brand: "ThreadLux",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 4,
    reviews: 53,
    price: 90.00,
    inStock: true,
    shortDescription: "Minimal 15kt gold threader chains. Effortless cool."
  },
  {
    id: 34,
    category: "Earrings",
    name: "Pearl Drop Earrings",
    brand: "PearlGrace",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 5,
    reviews: 45,
    price: 160.00,
    inStock: false,
    shortDescription: "Akoya pearl drops in 15kt gold. Timeless grace. Out of stock."
  },
  {
    id: 35,
    category: "Earrings",
    name: "Geometric Gold Earrings",
    brand: "GeoGold",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    rating: 5,
    reviews: 37,
    price: 195.00,
    inStock: true,
    shortDescription: "Bold geometric studs in 14kt gold. Modern art for ears."
  },
  {
    id: 36,
    category: "Earrings",
    name: "Emerald Cluster Earrings",
    brand: "EmeraldBloom",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 4,
    reviews: 31,
    price: 380.00,
    inStock: true,
    shortDescription: "Colombian emerald clusters in 18kt gold. Green glamour."
  },
  {
    id: 37,
    category: "Earrings",
    name: "Minimalist Bar Studs",
    brand: "BarEssence",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 72,
    price: 65.00,
    inStock: true,
    shortDescription: "Sleek 15kt gold bar studs. Everyday minimalism."
  },
  // === Gift Sets ===
  {
    id: 38,
    category: "Gift Sets",
    name: "Pearl Necklace & Earring Set",
    brand: "PearlHarmony",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 50,
    price: 320.00,
    inStock: true,
    shortDescription: "Matching pearl necklace + earrings in 15kt gold. Gift-ready elegance."
  },
  {
    id: 39,
    category: "Gift Sets",
    name: "Silver Jewelry Trio",
    brand: "SilverTrio",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 4,
    reviews: 43,
    price: 180.00,
    inStock: true,
    shortDescription: "Necklace, bracelet, ring in silver. Perfect starter set."
  },
  {
    id: 40,
    category: "Gift Sets",
    name: "Gemstone Ring Collection",
    brand: "GemCollective",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 39,
    price: 450.00,
    inStock: false,
    shortDescription: "5 birthstone stackable rings in 22kt gold. Out of stock."
  },
  {
    id: 41,
    category: "Gift Sets",
    name: "Luxury Diamond Pendant Set",
    brand: "LuxePendant",
    carats: "24kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 28,
    price: 1200.00,
    inStock: true,
    shortDescription: "Diamond pendant + chain in 24kt gold. Luxury gifting."
  },
  {
    id: 42,
    category: "Gift Sets",
    name: "Birthstone Bracelet & Ring",
    brand: "BirthGlow",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    rating: 4,
    reviews: 35,
    price: 210.00,
    inStock: true,
    shortDescription: "Custom birthstone bracelet + ring duo in 14kt gold."
  },
  {
    id: 43,
    category: "Gift Sets",
    name: "Gold Plated Essentials Set",
    brand: "GoldEssence",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 5,
    reviews: 47,
    price: 250.00,
    inStock: true,
    shortDescription: "Necklace, earrings, ring in 15kt gold plate. Everyday luxe."
  },
  // === Pearls ===
  {
    id: 44,
    category: "Pearls",
    name: "Akoya Pearl Strand 18in",
    brand: "AkoyaPure",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 5,
    reviews: 42,
    price: 890.00,
    inStock: true,
    shortDescription: "AAA Akoya pearl strand with 15kt gold clasp. Classic heirloom."
  },
  {
    id: 45,
    category: "Pearls",
    name: "Baroque Pearl Earrings",
    brand: "BaroqueBeauty",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 36,
    price: 280.00,
    inStock: true,
    shortDescription: "Organic baroque pearl drops in 15kt gold. One-of-a-kind."
  },
  {
    id: 46,
    category: "Pearls",
    name: "Tahitian Black Pearl Ring",
    brand: "TahitianNoir",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    rating: 4,
    reviews: 29,
    price: 620.00,
    inStock: false,
    shortDescription: "10mm Tahitian black pearl in 18kt gold. Mysterious luxe. Out of stock."
  },
  {
    id: 47,
    category: "Pearls",
    name: "Freshwater Pearl Lariat",
    brand: "FreshPearl",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 5,
    reviews: 51,
    price: 195.00,
    inStock: true,
    shortDescription: "Y-drop freshwater pearl lariat in 15kt gold. Modern romance."
  },
  {
    id: 48,
    category: "Pearls",
    name: "Pearl & Gold Cuff",
    brand: "PearlGold",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 33,
    price: 410.00,
    inStock: true,
    shortDescription: "Pearl-accented cuff in 22kt gold. Bold elegance."
  },
  // === Rings ===
  {
    id: 49,
    category: "Rings",
    name: "Vintage Sapphire Ring",
    brand: "VintageBlue",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 5,
    reviews: 46,
    price: 1350.00,
    inStock: true,
    shortDescription: "2ct Ceylon sapphire in 14kt gold filigree. Vintage royalty."
  },
  {
    id: 50,
    category: "Rings",
    name: "Stackable Gemstone Rings",
    brand: "StackGem",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 4,
    reviews: 59,
    price: 220.00,
    inStock: true,
    shortDescription: "Set of 3 gemstone stackers in 18kt gold. Mix your mood."
  },
  {
    id: 51,
    category: "Rings",
    name: "Rose Gold Signet Ring",
    brand: "RoseSignet",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 40,
    price: 380.00,
    inStock: false,
    shortDescription: "Engravable rose gold signet in 14kt. Personal legacy. Out of stock."
  },
  {
    id: 52,
    category: "Rings",
    name: "Oval Emerald Cocktail Ring",
    brand: "EmeraldOval",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 5,
    reviews: 32,
    price: 980.00,
    inStock: true,
    shortDescription: "4ct Colombian emerald oval in 22kt gold. Statement green."
  },
  {
    id: 53,
    category: "Rings",
    name: "Platinum Diamond Band",
    brand: "PlatinumBand",
    carats: "24kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 55,
    price: 2900.00,
    inStock: true,
    shortDescription: "1.5ctw diamond band in 24kt platinum. Modern eternity."
  },
  // === Wedding ===
  {
    id: 54,
    category: "Wedding",
    name: "His & Hers Wedding Bands",
    brand: "EternalPair",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 5,
    reviews: 68,
    price: 1800.00,
    inStock: true,
    shortDescription: "Matching 18kt gold wedding bands. His 6mm, hers 4mm."
  },
  {
    id: 55,
    category: "Wedding",
    name: "Engagement Ring with Side Stones",
    brand: "PromiseRing",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 5,
    reviews: 44,
    price: 5200.00,
    inStock: false,
    shortDescription: "2ct center + side stones in 22kt gold. Proposal ready. Out of stock."
  },
  {
    id: 56,
    category: "Wedding",
    name: "Vintage Lace Bridal Set",
    brand: "LaceLegacy",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 37,
    price: 3400.00,
    inStock: true,
    shortDescription: "Milgrain lace engagement + band set in 14kt gold."
  },
  {
    id: 57,
    category: "Wedding",
    name: "Titanium Matte Wedding Ring",
    brand: "TitanStrong",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 4,
    reviews: 49,
    price: 380.00,
    inStock: true,
    shortDescription: "Brushed titanium band with 15kt gold inlay. Modern strength."
  },
  {
    id: 58,
    category: "Wedding",
    name: "Pearl Bridal Tiara",
    brand: "BridalPearl",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 5,
    reviews: 41,
    price: 620.00,
    inStock: true,
    shortDescription: "Pearl & crystal tiara in 15kt gold. Royal bride glow."
  },
  {
    id: 59,
    category: "Wedding",
    name: "Custom Engraved Ring Pair",
    brand: "ForeverEngraved",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg"
    ],
    rating: 5,
    reviews: 53,
    price: 950.00,
    inStock: true,
    shortDescription: "Personalized 18kt gold ring duo. Your words, forever."
  },
  {
    id: 60,
    category: "Wedding",
    name: "Diamond Infinity Wedding Band",
    brand: "InfinityBond",
    carats: "24kt",
    images: [
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg"
    ],
    rating: 5,
    reviews: 35,
    price: 2150.00,
    inStock: false,
    shortDescription: "Infinity diamond band in 24kt gold. Eternal love. Out of stock."
  },
  {
    id: 61,
    category: "Wedding",
    name: "Rose Gold Bridal Earrings",
    brand: "RoseBride",
    carats: "14kt",
    images: [
      "/images/OlightAllImage/2ShopPage/3.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    rating: 5,
    reviews: 39,
    price: 480.00,
    inStock: true,
    shortDescription: "Rose gold drop earrings with pearls. Bridal blush."
  },
  {
    id: 62,
    category: "Wedding",
    name: "Matching Couple Necklaces",
    brand: "LoveLink",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg"
    ],
    rating: 4,
    reviews: 57,
    price: 320.00,
    inStock: true,
    shortDescription: "His & hers puzzle heart pendants in 15kt gold."
  },
  {
    id: 63,
    category: "Wedding",
    name: "Floral Pearl Hair Comb",
    brand: "FloralPearl",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/4.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg"
    ],
    rating: 5,
    reviews: 45,
    price: 190.00,
    inStock: true,
    shortDescription: "Pearl flower hair comb in 15kt gold. Garden bride."
  },
  {
    id: 64,
    category: "Wedding",
    name: "Classic Solitaire Engagement",
    brand: "ClassicSolitaire",
    carats: "22kt",
    images: [
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg"
    ],
    rating: 5,
    reviews: 61,
    price: 6800.00,
    inStock: true,
    shortDescription: "1.5ct D/FL solitaire in 22kt platinum. Iconic forever."
  },
  {
    id: 65,
    category: "Wedding",
    name: "Groom's Black Onyx Cufflinks",
    brand: "GroomOnyx",
    carats: "15kt",
    images: [
      "/images/OlightAllImage/2ShopPage/2.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg"
    ],
    rating: 5,
    reviews: 33,
    price: 210.00,
    inStock: false,
    shortDescription: "Black onyx cufflinks in 15kt gold. Sharp groom style. Out of stock."
  },
  {
    id: 66,
    category: "Wedding",
    name: "Eternity Diamond Anklet",
    brand: "EternalAnklet",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/5.jpg",
      "/images/OlightAllImage/2ShopPage/7.jpg",
      "/images/OlightAllImage/2ShopPage/3.jpg"
    ],
    rating: 5,
    reviews: 29,
    price: 890.00,
    inStock: true,
    shortDescription: "Diamond eternity anklet in 18kt gold. Hidden sparkle."
  },
  {
    id: 67,
    name: "Diamond Necklace",
    category: "Necklaces",
    brand: "Ariel",
    carats: "18kt",
    images: [
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/10.jpg"
    ],
    reviews: 22,
    price: 1200.99,
    inStock: true,
    shortDescription: "Floating diamond station necklace in 18kt gold. Everyday luxury."
  },
  {
    id: 68,
    name: "Diamond Necklace",
    category: "Necklaces",
    brand: "Rings",
    carats: "10kt",
    images: [
      "/images/OlightAllImage/2ShopPage/10.jpg",
      "/images/OlightAllImage/2ShopPage/8.jpg",
      "/images/OlightAllImage/2ShopPage/9.jpg",
      "/images/OlightAllImage/2ShopPage/6.jpg"
    ],
    reviews: 22,
    price: 1200.99,
    inStock: false,
    shortDescription: "Duplicate listing (see ID 67). Out of stock. Under review."
  },
];

export default PRODUCTS;