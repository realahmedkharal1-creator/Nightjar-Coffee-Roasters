import { MenuItem, ReviewItem, FAQItem, GalleryPhoto, TapBeverage } from '../types';

export const BUSINESS_INFO = {
  name: "Nightjar Coffee Roasters",
  tagline: "Direct-Trade Specialty Roastery, Craft Nitro Taps & Counterculture Eatery",
  shortDesc: "Award-winning independent specialty coffee roastery, craft kitchen, and nitro cold brew laboratory located in Warehouse G62, Alserkal Avenue, Dubai.",
  address: "Warehouse G62, Alserkal Avenue Arts & Cultural District, Al Quoz Industrial Area 1, Dubai, United Arab Emirates",
  coordinates: {
    lat: 25.1412,
    lng: 55.2272,
  },
  plusCode: "46RG+FP Dubai, United Arab Emirates",
  phone: "+971 4 330 6635",
  phoneFormatted: "+971 4 330 6635",
  phoneE164: "+97143306635",
  whatsapp: "+971 50 365 1120",
  whatsappE164: "971503651120",
  email: "info@nightjar.coffee",
  ordersEmail: "orders@nightjar.coffee",
  googleMapsUrl: "https://maps.app.goo.gl/7wFhJDmp7kr8kNTZ6",
  deliverooUrl: "https://deliveroo.ae/menu/dubai/al-quoz-1/nightjar-coffee-roasters",
  instagramUrl: "https://www.instagram.com/nightjar.coffee",
  instagramHandle: "@nightjar.coffee",
  websiteUrl: "https://nightjar.coffee",
  ratingGoogle: 4.3,
  reviewCountGoogle: 581,
  ratingDeliveroo: 4.7,
  reviewCountDeliveroo: 520,
  awards: [
    "Time Out Dubai Restaurant Awards — Best Café in Dubai",
    "What's On Awards — Highly Commended Independent Café",
    "#1 Specialty Coffee Spot in Alserkal Avenue"
  ],
  openingHours: [
    { day: "Monday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Tuesday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Wednesday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Thursday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Friday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Saturday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" },
    { day: "Sunday", open: "09:00", close: "22:00", text: "9:00 AM – 10:00 PM" }
  ],
  stats: [
    { label: "Direct-Trade Farms", value: "24+" },
    { label: "Combined Reviews", value: "1,100+" },
    { label: "Rating Across Platforms", value: "4.7★" },
    { label: "Craft Taps Flowing", value: "8" }
  ]
};

export const TAP_BEVERAGES: TapBeverage[] = [
  {
    id: "nitro-original",
    name: "Original Nitro Cold Brew",
    type: "Nitro Coffee On Tap",
    priceAED: 24,
    originLot: "Single Origin Rwanda Bumbogo",
    tastingNotes: ["Dark Chocolate", "Black Cherry", "Silky Molasses", "Guinness Cream"],
    body: "Heavy & Velvety",
    temp: "Ice-Cold (2°C)",
    caffeine: "High",
    description: "Our world-famous cold brew pulled fresh through custom nitrogen draft faucets. Features a cascading dense foam head with an intensely creamy mouthfeel and naturally sweet chocolate finish.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nitro-infused-orange",
    name: "Infused Nitro: Valencia Orange",
    type: "Botanical Infused Tap",
    priceAED: 28,
    originLot: "Ethiopia Guji Washed + Natural Citrus Peel",
    tastingNotes: ["Blood Orange", "Bergamot", "Honey", "Crisp Cacao"],
    body: "Effervescent & Silky",
    temp: "Ice-Cold (2°C)",
    caffeine: "High",
    description: "Cold-steeped Guji specialty coffee infused with organic Valencia orange oils and cold-pressed citrus, nitrogenated for an electric, refreshing kick.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nitro-infused-maple",
    name: "Infused Nitro: Smoked Maple",
    type: "Artisanal Brew On Tap",
    priceAED: 28,
    originLot: "Colombia Huila Micro-lot",
    tastingNotes: ["Toasted Maple", "Pecan Praline", "Bourbon Vanilla", "Toffee"],
    body: "Rich & Decadent",
    temp: "Ice-Cold (2°C)",
    caffeine: "High",
    description: "Huila micro-lot cold brew gently steeped with Grade-A dark maple and oak essence. Pulled with micro-bubble nitrogen for a dessert-like finish with zero refined sugar.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tap-kombucha",
    name: "House Sparkling Kombucha",
    type: "Living Ferment On Tap",
    priceAED: 30,
    originLot: "Al Quoz Fermentation Lab Batch #402",
    tastingNotes: ["Pink Pomelo", "White Guava", "Fiery Ginger", "Tangy Probiotics"],
    body: "Sparkling & Crisp",
    temp: "Ice-Cold (3°C)",
    caffeine: "Zero",
    description: "Slow-fermented green and black tea base infused with real pomelo fruit and freshly crushed ginger. Unfiltered, naturally effervescent, gut-loving craft fizz.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nitro-peach-tea",
    name: "Nitro Infused Cold Peach Tea",
    type: "Botanical Nitro Tea",
    priceAED: 26,
    originLot: "Single Estate Ceylon Black Tea",
    tastingNotes: ["Ripe Summer Peach", "Wild Meadow Honey", "Floral Blossom", "Velvet Head"],
    body: "Silky & Refreshing",
    temp: "Ice-Cold (2°C)",
    caffeine: "Medium",
    description: "Whole-leaf Ceylon tea cold-brewed for 18 hours with stone-fruit puree and infused under micro-nitrogen draft. Sweet, fragrant, and thirst-quenching.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Taps
  {
    id: "m-nitro-orig",
    name: "Original Nitro Cold Brew",
    category: "tap",
    priceAED: 24,
    description: "Single-origin Rwanda Bumbogo cold-steeped for 20 hours, pulled on draft with pure nitrogen. Creamy cascading head, rich dark chocolate & cherry.",
    tags: ["Signature", "Dairy-Free", "High-Caffeine"],
    popular: true,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-nitro-infused",
    name: "Flavoured Nitro Cold Brew (Orange / Maple / Cherry)",
    category: "tap",
    priceAED: 28,
    description: "Our signature cold brew naturally infused with organic botanical extracts and dispensed cold through nitro taps.",
    tags: ["Specialty", "Direct Trade"],
    popular: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-kombucha-tap",
    name: "House Fermented Kombucha (Pomelo, Guava & Ginger)",
    category: "tap",
    priceAED: 30,
    description: "Raw, unpasteurized kombucha crafted in-house in Alserkal Avenue. Crisp, tart, and naturally effervescent on draft.",
    tags: ["Vegan", "Probiotic", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-nitro-tea",
    name: "Infused Nitro Cold Brew Tea (Peach / Hibiscus)",
    category: "tap",
    priceAED: 26,
    description: "18-hour cold steeped whole leaf tea charged with nitrogen for an ultra-smooth velvety mouthfeel.",
    tags: ["Refreshing", "Low-Tannin"],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },

  // Hot Coffee
  {
    id: "m-v60",
    name: "V-60 Single Origin Pour Over",
    category: "hot-coffee",
    priceAED: 26,
    description: "Hand-poured filter brew highlighting delicate terroir, floral aromatics, and bright stone fruit acidity.",
    tags: ["Filter", "Single Origin"],
    popular: true,
    origin: "Rotating Micro-lots (Ethiopia / Colombia / Kenya)",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-kalita",
    name: "Kalita Wave Filter Brew",
    category: "hot-coffee",
    priceAED: 26,
    description: "Flat-bottom geometry extraction producing a full-bodied, evenly balanced cup with sweet caramelized sugars.",
    tags: ["Filter", "Artisanal"],
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-flat-white",
    name: "Flat White (GONZO Espresso Blend)",
    category: "hot-coffee",
    priceAED: 25,
    description: "Double ristretto shot of our GONZO seasonal roast folded with velvety micro-foamed organic whole or oat milk.",
    tags: ["Milk Coffee", "House Favorite"],
    popular: true,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-spanish-latte",
    name: "Artisan Spanish Latte",
    category: "hot-coffee",
    priceAED: 28,
    description: "House-made condensed milk infusion layered with rich double espresso and textured milk.",
    tags: ["Sweet", "Indulgent"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-cortado",
    name: "Cortado / Piccolo / Macchiato",
    category: "hot-coffee",
    priceAED: 20,
    description: "1:1 ratio of intense espresso to steamed milk in a traditional Gibraltar glass. Pure coffee clarity.",
    tags: ["Classic", "High-Intensity"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },

  // Cold Coffee
  {
    id: "m-cold-brew-tonic",
    name: "Cold Brew Tonic",
    category: "cold-coffee",
    priceAED: 30,
    description: "Concentrated Rwanda cold brew poured over Mediterranean artisan tonic water and fresh orange zest.",
    tags: ["Sparkling", "Crisp"],
    popular: true,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-iced-spanish",
    name: "Iced Spanish Latte",
    category: "cold-coffee",
    priceAED: 30,
    description: "Chilled espresso shaken with signature dulce reduction, poured over block ice and fresh milk.",
    tags: ["Best Seller", "Sweet"],
    popular: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-iced-v60",
    name: "Flash-Chilled Iced V60",
    category: "cold-coffee",
    priceAED: 28,
    description: "Direct pour-over over ice crystals capturing vibrant volatile aromas, juicy acidity, and floral notes.",
    tags: ["Clean", "Filter"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-iced-latte",
    name: "Iced Latte / Iced Americano",
    category: "cold-coffee",
    priceAED: 25,
    description: "Freshly pulled espresso poured over cold filtered water or your choice of organic milk & ice.",
    tags: ["Classic"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },

  // Coffee Beans (Retail)
  {
    id: "m-gonzo-beans",
    name: "GONZO Seasonal Blend (225g / 1kg)",
    category: "beans",
    priceAED: 49,
    description: "Our flagship house espresso roast. Balanced, punchy, and cutting through milk with dark chocolate, hazelnut butter, and sweet molasses.",
    tags: ["Espresso & Milk", "Whole Bean / Ground"],
    popular: true,
    origin: "Brazil Cerrado & Colombia Huila",
    roastLevel: "Medium-Dark",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-sob-beans",
    name: "S.O.B Signature Blend (225g / 1kg)",
    category: "beans",
    priceAED: 45,
    description: "Sweet, punchy, and full of swagger. Ripe berry fruitiness balanced by rich caramelized brown sugar notes.",
    tags: ["Versatile All-Rounder", "Whole Bean / Ground"],
    popular: true,
    origin: "Rwanda & Ethiopia Natural Lots",
    roastLevel: "Medium Roast",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-candyman-beans",
    name: "CANDYMAN Sweet Lot (225g / 1kg)",
    category: "beans",
    priceAED: 55,
    description: "Wildly sweet natural-process micro-lot. Explosive notes of candied strawberries, bubblegum aromatics, and syrupy nectar.",
    tags: ["Filter & Light Espresso", "Limited Edition"],
    popular: true,
    origin: "Ethiopia Yirgacheffe Natural",
    roastLevel: "Light-Medium Roast",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=80"
  },

  // Kitchen & Brunch
  {
    id: "m-rendang-scramble",
    name: "Rendang Chilli Scramble",
    category: "kitchen",
    priceAED: 68,
    description: "Slow-cooked beef rendang brisket, creamy soft scrambled eggs, crispy fried shallots, fresh coriander, and chilli oil on toasted sourdough.",
    tags: ["Chef's Signature", "Brunch Icon", "Spicy"],
    popular: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-dibba-buttie",
    name: "Dibba Bay Oyster Buttie",
    category: "kitchen",
    priceAED: 65,
    description: "Crispy panko-crusted local Dibba Bay UAE oysters, pickled cucumber relish, dill tartare sauce, and shredded iceberg in a toasted brioche bun.",
    tags: ["Local UAE Produce", "Seafood Icon"],
    popular: true,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-alserkal-smash",
    name: "Alserkal Smash Wagyu Burger",
    category: "kitchen",
    priceAED: 70,
    description: "Double smashed Wagyu & Angus patties with crisp lacy edges, melted aged cheddar, secret burger sauce, and house pickles on a buttered potato bun.",
    tags: ["Best Seller", "Comfort Food"],
    popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-reuben-glove",
    name: "The Reuben Glove",
    category: "kitchen",
    priceAED: 70,
    description: "14-day house-cured peppered pastrami brisket, sauerkraut, Swiss gruyère cheese, and Russian dressing toasted crisp inside artisan ciabatta.",
    tags: ["House Cured Meat", "Sandwich Hero"],
    popular: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-philly-steak",
    name: "Philly Cheese Steak Sandwich",
    category: "kitchen",
    priceAED: 75,
    description: "Thinly shaved prime ribeye beef seared with caramelized sweet onions, smoked provolone, and molten cheese whiz in a soft hoagie roll.",
    tags: ["Hearty", "Savory"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-rotisserie-chicken",
    name: "Rotisserie Half Chicken & Herb Butter",
    category: "kitchen",
    priceAED: 75,
    description: "Brined for 24 hours in citrus aromatics, slow roasted to golden crisp perfection, served with garlic roast potatoes and chicken jus.",
    tags: ["Wood Roasted", "Dinner Favorite"],
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-maple-muffin",
    name: "24-Hour Maple Bacon Breakfast Muffin",
    category: "kitchen",
    priceAED: 52,
    description: "House-cured thick cut maple glazed beef bacon, fried free-range egg, American cheddar, and smoky chipotle mayo in a toasted English muffin.",
    tags: ["All-Day Breakfast"],
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-grilled-cheese",
    name: "Artisan 4-Cheese Grilled Toastie",
    category: "kitchen",
    priceAED: 48,
    description: "Melted Montgomery cheddar, gruyère, provolone, and mozzarella with caramelized onion jam between thick golden sourdough slices.",
    tags: ["Vegetarian", "Comfort Classic"],
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m-avocado-toast",
    name: "Avocado on Sourdough with Hazelnut Caponata",
    category: "kitchen",
    priceAED: 54,
    description: "Crushed Hass avocado, roasted eggplant caponata, toasted spiced hazelnuts, pomegranate molasses, and fresh mint on country sourdough.",
    tags: ["Vegan", "Nutrient Dense"],
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Tariq Al-Mansoor",
    rating: 5,
    date: "2 weeks ago",
    source: "Google Reviews",
    comment: "Best nitro cold brew in the UAE by a mile. The Rwanda single origin on tap has this Guinness-like creamy cascade and deep chocolate notes. The Alserkal warehouse vibe is unbeatable.",
    avatarText: "TM",
    dishRecommended: "Original Nitro Cold Brew & Alserkal Smash"
  },
  {
    id: "rev-2",
    name: "Sophie Vandermeer",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    comment: "Leon and the crew have built something genuinely special here. No pretentious hipster snobbery—just world-class roasting, great vinyl tunes, and the Rendang scrambled eggs are legendary.",
    avatarText: "SV",
    dishRecommended: "Rendang Chilli Scramble"
  },
  {
    id: "rev-3",
    name: "Marcus Sterling",
    rating: 5,
    date: "3 weeks ago",
    source: "Google Reviews",
    comment: "The industrial atmosphere in Warehouse G62 is unmatched. You sit right by the roastery smelling freshly cracked beans while sipping their infused cold brew. Hands down the #1 cafe in Dubai.",
    avatarText: "MS",
    dishRecommended: "Smoked Maple Nitro & Reuben Glove"
  },
  {
    id: "rev-4",
    name: "Layla El-Khoury",
    rating: 5,
    date: "2 months ago",
    source: "Deliveroo",
    comment: "Nightjar is an institution in Alserkal. Grabbed the Alserkal Smash burger and a nitro peach tea—phenomenal food for a roastery. Always my first stop whenever I'm in Al Quoz.",
    avatarText: "LK",
    dishRecommended: "Alserkal Smash & Nitro Peach Tea"
  },
  {
    id: "rev-5",
    name: "Oliver Hayes",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    comment: "The Dibba Bay oyster buttie paired with a Kalita pour-over is a combination you won't get anywhere else in the Middle East. Friendly staff, cool counterculture energy, top-tier coffee.",
    avatarText: "OH",
    dishRecommended: "Dibba Bay Oyster Buttie"
  },
  {
    id: "rev-6",
    name: "Farah Siddiqui",
    rating: 5,
    date: "3 months ago",
    source: "Google Reviews",
    comment: "S.O.B and CANDYMAN are my staple beans for home espresso. Visiting the mothership roastery in Al Quoz is always an experience. Great music, passionate baristas, 10/10.",
    avatarText: "FS",
    dishRecommended: "CANDYMAN Roast & Flat White"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    title: "Alserkal Avenue Warehouse G62 Roastery Floor",
    category: "Interior & Vibe",
    alt: "Industrial chic specialty coffee roastery interior at Nightjar Alserkal Avenue"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=80",
    title: "Nitro Cold Brew on Draft Pouring",
    category: "Coffee & Nitro",
    alt: "Creamy nitrogen cold brew cascading in glass tap at Nightjar Dubai"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    title: "Rendang Chilli Scramble on Country Sourdough",
    category: "Food & Brunch",
    alt: "Slow cooked beef rendang scrambled eggs with fresh coriander"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1200&q=80",
    title: "Direct-Trade Fresh Roasted Coffee Beans (GONZO Lot)",
    category: "Roastery & Beans",
    alt: "Artisan roasted coffee beans cooling on roasting tray"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    title: "The Alserkal Smash Wagyu Patty with Melted Cheddar",
    category: "Food & Brunch",
    alt: "Lacy edge double smash burger with cheese and house sauce"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    title: "Single Origin Precision Pour-Over Station",
    category: "Coffee & Nitro",
    alt: "Barista pouring hot water over V60 filter dripper at Nightjar coffee bar"
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    title: "Communal Wooden Bench & Vinyl Decks Corner",
    category: "Interior & Vibe",
    alt: "Raw concrete and warm wood seating corner with art and turntables"
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
    title: "The Reuben Glove Toasted Pastrami Sandwich",
    category: "Food & Brunch",
    alt: "House cured pastrami Reuben sandwich with melted Swiss cheese on ciabatta"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where exactly are you located inside Alserkal Avenue?",
    answer: "We are at Warehouse G62 inside Alserkal Avenue Arts & Cultural District, located in Al Quoz Industrial Area 1. Enter via 8th Street or the main pedestrian gates and follow the aroma of freshly roasted coffee toward the central courtyard.",
    category: "Location & Visit"
  },
  {
    question: "What makes your Nitro Cold Brew different from regular iced coffee?",
    answer: "Our signature cold brew is steeped for 20+ hours using direct-trade single-origin beans (like Rwanda Bumbogo) and charged with pressurized nitrogen gas at 2°C. This creates micro-bubbles and a velvety cascading head similar to draft stout, resulting in a naturally sweet, creamy mouthfeel with zero added dairy or sugar.",
    category: "Coffee & Taps"
  },
  {
    question: "Can I buy freshly roasted beans and have them ground for my home machine?",
    answer: "Yes! We roast multiple times a week in-house. You can pick up bags of GONZO, S.O.B, or CANDYMAN (225g and 1kg bags) in our warehouse shop. Our baristas will custom grind your beans on our EK43 grinder for Espresso, V60, AeroPress, French Press, or Moka Pot at no extra charge.",
    category: "Beans & Retail"
  },
  {
    question: "Is there parking available nearby at Alserkal Avenue?",
    answer: "Yes. Alserkal Avenue offers dedicated visitor parking, as well as extensive RTA parking bays along 8th Street and 17th Street directly surrounding the cultural district. Valet service is also frequently available during major gallery exhibitions.",
    category: "Location & Visit"
  },
  {
    question: "Do you cater to dietary preferences (vegan, gluten-free, halal)?",
    answer: "Absolutely. All our meats are 100% halal certified. We offer plant-based oat and almond milk, gluten-free options, and dedicated vegetarian/vegan brunch staples like our Avocado & Hazelnut Caponata and House Probiotic Kombucha.",
    category: "Food & Menu"
  },
  {
    question: "Can I bring my laptop and work from Nightjar?",
    answer: "We welcome creatives, remote workers, and coffee aficionados! We offer high-speed guest Wi-Fi and power outlets along our communal tables. During busy weekend peak brunch hours (11 AM – 3 PM), we kindly encourage sharing tables with fellow guests.",
    category: "Café Experience"
  },
  {
    question: "Do you supply wholesale coffee and nitro keg systems to other venues?",
    answer: "Yes! Nightjar Coffee Roasters operates one of the region's leading B2B specialty coffee and nitro taproom distribution networks across the UAE and GCC. Contact our wholesale team at orders@nightjar.coffee or through our inquiry form for commercial beans and keg installations.",
    category: "Wholesale & Events"
  },
  {
    question: "Do you accept table reservations or walk-ins?",
    answer: "We primarily operate on a vibrant walk-in basis with quick seating turnover. For large groups of 6+ or special corporate tastings, you can send us a reservation request directly via WhatsApp (+971 50 365 1120) or our contact form.",
    category: "Reservations"
  }
];

export const ROAST_PROFILES = [
  {
    id: "gonzo",
    name: "GONZO Seasonal Blend",
    tagline: "The Unapologetic House Espresso",
    flavorNotes: ["Dark Chocolate Truffle", "Roasted Hazelnut", "Caramelized Molasses", "Blackberry"],
    roastDegree: 4, // out of 5
    acidity: 2,
    body: 5,
    sweetness: 4,
    recommendedBrewing: ["Espresso Machine", "Moka Pot", "French Press", "Milk Drinks"],
    elevation: "1,600m – 1,950m",
    process: "Washed & Pulped Natural",
    price225g: 49,
    price1kg: 205,
    accentColor: "#E08A28"
  },
  {
    id: "sob",
    name: "S.O.B Signature Blend",
    tagline: "Sweet Swagger & Ripe Berry Punch",
    flavorNotes: ["Red Currant", "Milk Chocolate", "Brown Sugar", "Mandarin Zest"],
    roastDegree: 3,
    acidity: 3,
    body: 4,
    sweetness: 4,
    recommendedBrewing: ["V-60 Pour Over", "Aeropress", "All-Round Filter", "Cold Brew"],
    elevation: "1,800m – 2,100m",
    process: "Natural & Honey Process",
    price225g: 45,
    price1kg: 195,
    accentColor: "#C2410C"
  },
  {
    id: "candyman",
    name: "CANDYMAN Sweet Micro-Lot",
    tagline: "Explosive Natural Fruit Syrups",
    flavorNotes: ["Candied Strawberry", "Cotton Candy", "Floral Jasmine", "Peach Nectar"],
    roastDegree: 2,
    acidity: 4,
    body: 3,
    sweetness: 5,
    recommendedBrewing: ["Kalita Wave", "V-60", "Origami Dripper", "Flash Iced"],
    elevation: "2,000m – 2,250m",
    process: "Extended Anaerobic Natural",
    price225g: 55,
    price1kg: 240,
    accentColor: "#D946EF"
  }
];
