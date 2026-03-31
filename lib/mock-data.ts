import type { TruckWithStatus, TruckMenu, TruckScheduleStop } from "@/types";

// ─── Trucks (static identity + live status) ───────────────────────────────────
export const MOCK_TRUCKS: TruckWithStatus[] = [
  {
    truck: {
      id: "1",
      name: "Smoky Soul BBQ",
      slug: "smoky-soul-bbq",
      description:
        "Slow-smoked brisket, ribs, and loaded mac straight from the pit. We've been rolling through Austin since 2018 — find us by the smoke.",
      primary_cuisine: "BBQ",
      cuisines: ["BBQ", "American"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: true,
      phone: "(512) 555-0101",
      email: "hello@smokysouldbbq.com",
      website_url: null,
      instagram_url: "https://instagram.com/smokysoulbbq",
      facebook_url: null,
    },
    liveStatus: {
      food_truck_id: "1",
      status: "serving_now",
      open_now: true,
      latitude: 30.2672,
      longitude: -97.7431,
      location_name: "Congress Ave & 6th St",
      address_line1: "600 Congress Ave",
      city: "Austin",
      start_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      wait_time_minutes: 10,
      last_updated_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      stale_state: "fresh",
      is_confirmed: true,
    },
    distance_miles: 0.3,
  },
  {
    truck: {
      id: "2",
      name: "Taco Loco",
      slug: "taco-loco",
      description:
        "Authentic street tacos, birria, and agua fresca made fresh daily. Family recipe, Austin-born since 2015.",
      primary_cuisine: "Mexican",
      cuisines: ["Mexican", "Street Food"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: true,
      phone: "(512) 555-0202",
      email: null,
      website_url: "https://tacolocoatx.com",
      instagram_url: "https://instagram.com/tacolocoatx",
      facebook_url: "https://facebook.com/tacolocoatx",
    },
    liveStatus: {
      food_truck_id: "2",
      status: "busy",
      open_now: true,
      latitude: 30.2651,
      longitude: -97.7478,
      location_name: "South Congress Food Park",
      address_line1: "1412 S Congress Ave",
      city: "Austin",
      start_time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
      wait_time_minutes: 25,
      last_updated_at: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
      stale_state: "fresh",
      is_confirmed: true,
    },
    distance_miles: 0.7,
  },
  {
    truck: {
      id: "3",
      name: "Seoul Bowl",
      slug: "seoul-bowl",
      description:
        "Korean fusion bowls, crispy bibimbap, and the city's best Korean fried chicken. Spicy optional — always recommended.",
      primary_cuisine: "Korean",
      cuisines: ["Korean", "Fusion", "Asian"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: false,
      phone: null,
      email: "seoulbowlatx@gmail.com",
      website_url: null,
      instagram_url: "https://instagram.com/seoulbowlatx",
      facebook_url: null,
    },
    liveStatus: {
      food_truck_id: "3",
      status: "arriving_soon",
      open_now: false,
      latitude: 30.2699,
      longitude: -97.7389,
      location_name: "East 6th & Waller",
      address_line1: "2200 E 6th St",
      city: "Austin",
      start_time: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
      end_time: new Date(Date.now() + 4.5 * 60 * 60 * 1000).toISOString(),
      wait_time_minutes: null,
      last_updated_at: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
      stale_state: "fresh",
      is_confirmed: true,
    },
    distance_miles: 1.1,
  },
  {
    truck: {
      id: "4",
      name: "Napoli Slice",
      slug: "napoli-slice",
      description:
        "Wood-fired Neapolitan pizza by the slice. 900°F oven, 90-second bake. Simple ingredients, serious results.",
      primary_cuisine: "Italian",
      cuisines: ["Italian", "Pizza"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: true,
      phone: "(512) 555-0404",
      email: null,
      website_url: "https://napolislice.com",
      instagram_url: "https://instagram.com/napolisliceatx",
      facebook_url: null,
    },
    liveStatus: {
      food_truck_id: "4",
      status: "sold_out",
      open_now: false,
      latitude: 30.2615,
      longitude: -97.7512,
      location_name: "Barton Springs & Lamar",
      address_line1: "1800 Barton Springs Rd",
      city: "Austin",
      start_time: null,
      end_time: null,
      wait_time_minutes: null,
      last_updated_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
      stale_state: "stale",
      is_confirmed: false,
    },
    distance_miles: 1.8,
  },
  {
    truck: {
      id: "5",
      name: "Viet Bites",
      slug: "viet-bites",
      description:
        "Bánh mì, pho cups, and fresh summer rolls made with herbs from our garden. Light, fresh, and fast.",
      primary_cuisine: "Vietnamese",
      cuisines: ["Vietnamese", "Asian"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: false,
      phone: null,
      email: "vietbitesatx@gmail.com",
      website_url: null,
      instagram_url: "https://instagram.com/vietbitesatx",
      facebook_url: null,
    },
    liveStatus: {
      food_truck_id: "5",
      status: "serving_now",
      open_now: true,
      latitude: 30.2588,
      longitude: -97.7392,
      location_name: "Mueller Farmers Market",
      address_line1: "4209 Airport Blvd",
      city: "Austin",
      start_time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      wait_time_minutes: 5,
      last_updated_at: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
      stale_state: "fresh",
      is_confirmed: true,
    },
    distance_miles: 2.4,
  },
  {
    truck: {
      id: "6",
      name: "The Burger Lab",
      slug: "the-burger-lab",
      description:
        "Smash burgers, loaded fries, and craft shakes. We press hard, season loud, and never apologize.",
      primary_cuisine: "American",
      cuisines: ["American", "Burgers"],
      profile_image_url: null,
      cover_image_url: null,
      city: "Austin",
      state: "TX",
      is_verified: true,
      phone: "(512) 555-0606",
      email: "info@theburgerlab.co",
      website_url: "https://theburgerlab.co",
      instagram_url: "https://instagram.com/theburgerlab",
      facebook_url: "https://facebook.com/theburgerlab",
    },
    liveStatus: {
      food_truck_id: "6",
      status: "offline",
      open_now: false,
      latitude: null,
      longitude: null,
      location_name: null,
      address_line1: null,
      city: null,
      start_time: null,
      end_time: null,
      wait_time_minutes: null,
      last_updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      stale_state: "expired",
      is_confirmed: false,
    },
    distance_miles: 3.1,
  },
];

// ─── Menus ────────────────────────────────────────────────────────────────────
export const MOCK_MENUS: Record<string, TruckMenu> = {
  "1": {
    food_truck_id: "1",
    categories: [
      {
        name: "Plates",
        items: [
          { id: "m1-1", name: "Brisket Plate", description: "½ lb smoked brisket, two sides, pickles & onions", price_cents: 1895, category: "Plates", is_available: true, is_featured: true },
          { id: "m1-2", name: "Ribs Half Rack", description: "Slow-smoked St. Louis ribs, dry rub", price_cents: 2195, category: "Plates", is_available: true, is_featured: false },
          { id: "m1-3", name: "Combo Plate", description: "Choose 2 meats, two sides", price_cents: 2095, category: "Plates", is_available: true, is_featured: true },
        ],
      },
      {
        name: "Sandwiches",
        items: [
          { id: "m1-4", name: "Pulled Pork Sandwich", description: "House-smoked pork, house slaw, house pickles", price_cents: 1295, category: "Sandwiches", is_available: true, is_featured: true },
          { id: "m1-5", name: "Brisket Sandwich", description: "Sliced brisket, caramelized onions, jalapeño", price_cents: 1495, category: "Sandwiches", is_available: true, is_featured: false },
        ],
      },
      {
        name: "Sides",
        items: [
          { id: "m1-6", name: "Loaded Mac & Cheese", description: "Cheddar blend with brisket bits", price_cents: 695, category: "Sides", is_available: true, is_featured: false },
          { id: "m1-7", name: "Collard Greens", description: "Slow-cooked with smoked turkey", price_cents: 495, category: "Sides", is_available: true, is_featured: false },
          { id: "m1-8", name: "Smoked Beans", description: "Brisket drippings, brown sugar, jalapeño", price_cents: 495, category: "Sides", is_available: true, is_featured: false },
        ],
      },
    ],
  },
  "2": {
    food_truck_id: "2",
    categories: [
      {
        name: "Tacos",
        items: [
          { id: "m2-1", name: "Birria Taco", description: "Braised beef, consommé for dipping, cilantro", price_cents: 495, category: "Tacos", is_available: true, is_featured: true },
          { id: "m2-2", name: "Al Pastor Taco", description: "Marinated pork, pineapple, cilantro, onion", price_cents: 395, category: "Tacos", is_available: true, is_featured: true },
          { id: "m2-3", name: "Carne Asada Taco", description: "Grilled steak, guac, pico, cotija", price_cents: 445, category: "Tacos", is_available: true, is_featured: false },
        ],
      },
      {
        name: "Drinks",
        items: [
          { id: "m2-4", name: "Agua de Jamaica", description: "House hibiscus agua fresca", price_cents: 350, category: "Drinks", is_available: true, is_featured: false },
          { id: "m2-5", name: "Horchata", description: "Classic rice milk, cinnamon", price_cents: 350, category: "Drinks", is_available: true, is_featured: false },
        ],
      },
    ],
  },
  "3": {
    food_truck_id: "3",
    categories: [
      {
        name: "Bowls",
        items: [
          { id: "m3-1", name: "Bibimbap Bowl", description: "Rice, seasonal veg, gochujang, fried egg", price_cents: 1395, category: "Bowls", is_available: true, is_featured: true },
          { id: "m3-2", name: "KFC Bowl", description: "Korean fried chicken, kimchi slaw, pickled daikon", price_cents: 1495, category: "Bowls", is_available: true, is_featured: true },
          { id: "m3-3", name: "Bulgogi Bowl", description: "Marinated beef, scallion, sesame, rice", price_cents: 1595, category: "Bowls", is_available: true, is_featured: false },
        ],
      },
    ],
  },
  "4": {
    food_truck_id: "4",
    categories: [
      {
        name: "Pizza by the Slice",
        items: [
          { id: "m4-1", name: "Margherita", description: "San Marzano, fior di latte, fresh basil", price_cents: 595, category: "Pizza by the Slice", is_available: true, is_featured: true },
          { id: "m4-2", name: "Diavola", description: "Spicy salami, mozzarella, chili oil", price_cents: 695, category: "Pizza by the Slice", is_available: true, is_featured: true },
          { id: "m4-3", name: "Funghi", description: "Wild mushroom, truffle oil, pecorino", price_cents: 745, category: "Pizza by the Slice", is_available: false, is_featured: false },
        ],
      },
    ],
  },
  "5": {
    food_truck_id: "5",
    categories: [
      {
        name: "Bánh Mì",
        items: [
          { id: "m5-1", name: "Classic Bánh Mì", description: "Pork, pâté, pickled veg, cilantro, jalapeño", price_cents: 895, category: "Bánh Mì", is_available: true, is_featured: true },
          { id: "m5-2", name: "Lemongrass Chicken", description: "Grilled chicken, cucumber, herbs", price_cents: 995, category: "Bánh Mì", is_available: true, is_featured: false },
        ],
      },
      {
        name: "Bowls & Rolls",
        items: [
          { id: "m5-3", name: "Pho Cup", description: "Rich beef broth, rice noodles, bean sprouts", price_cents: 895, category: "Bowls & Rolls", is_available: true, is_featured: true },
          { id: "m5-4", name: "Summer Rolls (2)", description: "Shrimp, herbs, rice paper, peanut sauce", price_cents: 795, category: "Bowls & Rolls", is_available: true, is_featured: false },
        ],
      },
    ],
  },
  "6": {
    food_truck_id: "6",
    categories: [
      {
        name: "Burgers",
        items: [
          { id: "m6-1", name: "The Classic Smash", description: "Double smash, American cheese, special sauce", price_cents: 1195, category: "Burgers", is_available: true, is_featured: true },
          { id: "m6-2", name: "The Lab Burger", description: "Triple smash, bacon, caramelized onion, gruyère", price_cents: 1595, category: "Burgers", is_available: true, is_featured: true },
          { id: "m6-3", name: "Mushroom Swiss", description: "Double smash, sautéed mushrooms, Swiss, aioli", price_cents: 1295, category: "Burgers", is_available: true, is_featured: false },
        ],
      },
      {
        name: "Sides & Shakes",
        items: [
          { id: "m6-4", name: "Loaded Fries", description: "Crinkle cut, cheese sauce, jalapeños, scallions", price_cents: 795, category: "Sides & Shakes", is_available: true, is_featured: false },
          { id: "m6-5", name: "Craft Shake", description: "Rotating flavors — ask today's", price_cents: 695, category: "Sides & Shakes", is_available: true, is_featured: false },
        ],
      },
    ],
  },
};

// ─── Upcoming schedules ───────────────────────────────────────────────────────
const DAY = 24 * 60 * 60 * 1000;

export const MOCK_SCHEDULES: Record<string, TruckScheduleStop[]> = {
  "1": [
    { id: "s1-1", food_truck_id: "1", venue_name: "Congress Ave & 6th St", address_line1: "600 Congress Ave", city: "Austin", state: "TX", start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
    { id: "s1-2", food_truck_id: "1", venue_name: "Rainey Street", address_line1: "78 Rainey St", city: "Austin", state: "TX", start_time: new Date(Date.now() + 2 * DAY + 17 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 2 * DAY + 22 * 60 * 60 * 1000).toISOString(), notes: "Happy hour special", is_public: true },
    { id: "s1-3", food_truck_id: "1", venue_name: "Mueller Park", address_line1: "4550 Mueller Blvd", city: "Austin", state: "TX", start_time: new Date(Date.now() + 4 * DAY + 10 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 4 * DAY + 14 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
  ],
  "2": [
    { id: "s2-1", food_truck_id: "2", venue_name: "South Congress Food Park", address_line1: "1412 S Congress Ave", city: "Austin", state: "TX", start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
    { id: "s2-2", food_truck_id: "2", venue_name: "Barton Springs Pool", address_line1: "2131 William Barton Dr", city: "Austin", state: "TX", start_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 3 * DAY + 16 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
  ],
  "3": [
    { id: "s3-1", food_truck_id: "3", venue_name: "East 6th & Waller", address_line1: "2200 E 6th St", city: "Austin", state: "TX", start_time: new Date(Date.now() + 0.5 * DAY).toISOString(), end_time: new Date(Date.now() + 0.5 * DAY + 4 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
    { id: "s3-2", food_truck_id: "3", venue_name: "The Domain", address_line1: "3401 Esperanza Crossing", city: "Austin", state: "TX", start_time: new Date(Date.now() + 2 * DAY + 11 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 2 * DAY + 15 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
  ],
  "4": [
    { id: "s4-1", food_truck_id: "4", venue_name: "Barton Springs & Lamar", address_line1: "1800 Barton Springs Rd", city: "Austin", state: "TX", start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
  ],
  "5": [
    { id: "s5-1", food_truck_id: "5", venue_name: "Mueller Farmers Market", address_line1: "4209 Airport Blvd", city: "Austin", state: "TX", start_time: new Date(Date.now() + 1 * DAY + 9 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 1 * DAY + 13 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
    { id: "s5-2", food_truck_id: "5", venue_name: "Cherrywood Coffeehouse", address_line1: "1400 E 38th St", city: "Austin", state: "TX", start_time: new Date(Date.now() + 3 * DAY + 8 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(), notes: "Weekend brunch pop-up", is_public: true },
  ],
  "6": [
    { id: "s6-1", food_truck_id: "6", venue_name: "South Lamar Lot", address_line1: "1209 S Lamar Blvd", city: "Austin", state: "TX", start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(), notes: null, is_public: true },
    { id: "s6-2", food_truck_id: "6", venue_name: "Sixth Street Entertainment", address_line1: "412 E 6th St", city: "Austin", state: "TX", start_time: new Date(Date.now() + 2 * DAY + 20 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 3 * DAY + 0 * 60 * 60 * 1000).toISOString(), notes: "Late night hours", is_public: true },
  ],
};

export const CUISINE_OPTIONS = [
  "BBQ",
  "Mexican",
  "Korean",
  "Italian",
  "Vietnamese",
  "American",
  "Asian",
  "Fusion",
  "Street Food",
  "Pizza",
  "Burgers",
];
