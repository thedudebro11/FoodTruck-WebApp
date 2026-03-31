module.exports = [
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUISINE_OPTIONS",
    ()=>CUISINE_OPTIONS,
    "MOCK_MENUS",
    ()=>MOCK_MENUS,
    "MOCK_SCHEDULES",
    ()=>MOCK_SCHEDULES,
    "MOCK_TRUCKS",
    ()=>MOCK_TRUCKS
]);
const MOCK_TRUCKS = [
    {
        truck: {
            id: "1",
            name: "Smoky Soul BBQ",
            slug: "smoky-soul-bbq",
            description: "Slow-smoked brisket, ribs, and loaded mac straight from the pit. We've been rolling through Austin since 2018 — find us by the smoke.",
            primary_cuisine: "BBQ",
            cuisines: [
                "BBQ",
                "American"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0101",
            email: "hello@smokysouldbbq.com",
            website_url: null,
            instagram_url: "https://instagram.com/smokysoulbbq",
            facebook_url: null
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
            is_confirmed: true
        },
        distance_miles: 0.3
    },
    {
        truck: {
            id: "2",
            name: "Taco Loco",
            slug: "taco-loco",
            description: "Authentic street tacos, birria, and agua fresca made fresh daily. Family recipe, Austin-born since 2015.",
            primary_cuisine: "Mexican",
            cuisines: [
                "Mexican",
                "Street Food"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0202",
            email: null,
            website_url: "https://tacolocoatx.com",
            instagram_url: "https://instagram.com/tacolocoatx",
            facebook_url: "https://facebook.com/tacolocoatx"
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
            is_confirmed: true
        },
        distance_miles: 0.7
    },
    {
        truck: {
            id: "3",
            name: "Seoul Bowl",
            slug: "seoul-bowl",
            description: "Korean fusion bowls, crispy bibimbap, and the city's best Korean fried chicken. Spicy optional — always recommended.",
            primary_cuisine: "Korean",
            cuisines: [
                "Korean",
                "Fusion",
                "Asian"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: false,
            phone: null,
            email: "seoulbowlatx@gmail.com",
            website_url: null,
            instagram_url: "https://instagram.com/seoulbowlatx",
            facebook_url: null
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
            is_confirmed: true
        },
        distance_miles: 1.1
    },
    {
        truck: {
            id: "4",
            name: "Napoli Slice",
            slug: "napoli-slice",
            description: "Wood-fired Neapolitan pizza by the slice. 900°F oven, 90-second bake. Simple ingredients, serious results.",
            primary_cuisine: "Italian",
            cuisines: [
                "Italian",
                "Pizza"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0404",
            email: null,
            website_url: "https://napolislice.com",
            instagram_url: "https://instagram.com/napolisliceatx",
            facebook_url: null
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
            is_confirmed: false
        },
        distance_miles: 1.8
    },
    {
        truck: {
            id: "5",
            name: "Viet Bites",
            slug: "viet-bites",
            description: "Bánh mì, pho cups, and fresh summer rolls made with herbs from our garden. Light, fresh, and fast.",
            primary_cuisine: "Vietnamese",
            cuisines: [
                "Vietnamese",
                "Asian"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: false,
            phone: null,
            email: "vietbitesatx@gmail.com",
            website_url: null,
            instagram_url: "https://instagram.com/vietbitesatx",
            facebook_url: null
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
            is_confirmed: true
        },
        distance_miles: 2.4
    },
    {
        truck: {
            id: "6",
            name: "The Burger Lab",
            slug: "the-burger-lab",
            description: "Smash burgers, loaded fries, and craft shakes. We press hard, season loud, and never apologize.",
            primary_cuisine: "American",
            cuisines: [
                "American",
                "Burgers"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0606",
            email: "info@theburgerlab.co",
            website_url: "https://theburgerlab.co",
            instagram_url: "https://instagram.com/theburgerlab",
            facebook_url: "https://facebook.com/theburgerlab"
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
            is_confirmed: false
        },
        distance_miles: 3.1
    }
];
const MOCK_MENUS = {
    "1": {
        food_truck_id: "1",
        categories: [
            {
                name: "Plates",
                items: [
                    {
                        id: "m1-1",
                        name: "Brisket Plate",
                        description: "½ lb smoked brisket, two sides, pickles & onions",
                        price_cents: 1895,
                        category: "Plates",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m1-2",
                        name: "Ribs Half Rack",
                        description: "Slow-smoked St. Louis ribs, dry rub",
                        price_cents: 2195,
                        category: "Plates",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-3",
                        name: "Combo Plate",
                        description: "Choose 2 meats, two sides",
                        price_cents: 2095,
                        category: "Plates",
                        is_available: true,
                        is_featured: true
                    }
                ]
            },
            {
                name: "Sandwiches",
                items: [
                    {
                        id: "m1-4",
                        name: "Pulled Pork Sandwich",
                        description: "House-smoked pork, house slaw, house pickles",
                        price_cents: 1295,
                        category: "Sandwiches",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m1-5",
                        name: "Brisket Sandwich",
                        description: "Sliced brisket, caramelized onions, jalapeño",
                        price_cents: 1495,
                        category: "Sandwiches",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Sides",
                items: [
                    {
                        id: "m1-6",
                        name: "Loaded Mac & Cheese",
                        description: "Cheddar blend with brisket bits",
                        price_cents: 695,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-7",
                        name: "Collard Greens",
                        description: "Slow-cooked with smoked turkey",
                        price_cents: 495,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-8",
                        name: "Smoked Beans",
                        description: "Brisket drippings, brown sugar, jalapeño",
                        price_cents: 495,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "2": {
        food_truck_id: "2",
        categories: [
            {
                name: "Tacos",
                items: [
                    {
                        id: "m2-1",
                        name: "Birria Taco",
                        description: "Braised beef, consommé for dipping, cilantro",
                        price_cents: 495,
                        category: "Tacos",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m2-2",
                        name: "Al Pastor Taco",
                        description: "Marinated pork, pineapple, cilantro, onion",
                        price_cents: 395,
                        category: "Tacos",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m2-3",
                        name: "Carne Asada Taco",
                        description: "Grilled steak, guac, pico, cotija",
                        price_cents: 445,
                        category: "Tacos",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Drinks",
                items: [
                    {
                        id: "m2-4",
                        name: "Agua de Jamaica",
                        description: "House hibiscus agua fresca",
                        price_cents: 350,
                        category: "Drinks",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m2-5",
                        name: "Horchata",
                        description: "Classic rice milk, cinnamon",
                        price_cents: 350,
                        category: "Drinks",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "3": {
        food_truck_id: "3",
        categories: [
            {
                name: "Bowls",
                items: [
                    {
                        id: "m3-1",
                        name: "Bibimbap Bowl",
                        description: "Rice, seasonal veg, gochujang, fried egg",
                        price_cents: 1395,
                        category: "Bowls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m3-2",
                        name: "KFC Bowl",
                        description: "Korean fried chicken, kimchi slaw, pickled daikon",
                        price_cents: 1495,
                        category: "Bowls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m3-3",
                        name: "Bulgogi Bowl",
                        description: "Marinated beef, scallion, sesame, rice",
                        price_cents: 1595,
                        category: "Bowls",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "4": {
        food_truck_id: "4",
        categories: [
            {
                name: "Pizza by the Slice",
                items: [
                    {
                        id: "m4-1",
                        name: "Margherita",
                        description: "San Marzano, fior di latte, fresh basil",
                        price_cents: 595,
                        category: "Pizza by the Slice",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m4-2",
                        name: "Diavola",
                        description: "Spicy salami, mozzarella, chili oil",
                        price_cents: 695,
                        category: "Pizza by the Slice",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m4-3",
                        name: "Funghi",
                        description: "Wild mushroom, truffle oil, pecorino",
                        price_cents: 745,
                        category: "Pizza by the Slice",
                        is_available: false,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "5": {
        food_truck_id: "5",
        categories: [
            {
                name: "Bánh Mì",
                items: [
                    {
                        id: "m5-1",
                        name: "Classic Bánh Mì",
                        description: "Pork, pâté, pickled veg, cilantro, jalapeño",
                        price_cents: 895,
                        category: "Bánh Mì",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m5-2",
                        name: "Lemongrass Chicken",
                        description: "Grilled chicken, cucumber, herbs",
                        price_cents: 995,
                        category: "Bánh Mì",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Bowls & Rolls",
                items: [
                    {
                        id: "m5-3",
                        name: "Pho Cup",
                        description: "Rich beef broth, rice noodles, bean sprouts",
                        price_cents: 895,
                        category: "Bowls & Rolls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m5-4",
                        name: "Summer Rolls (2)",
                        description: "Shrimp, herbs, rice paper, peanut sauce",
                        price_cents: 795,
                        category: "Bowls & Rolls",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "6": {
        food_truck_id: "6",
        categories: [
            {
                name: "Burgers",
                items: [
                    {
                        id: "m6-1",
                        name: "The Classic Smash",
                        description: "Double smash, American cheese, special sauce",
                        price_cents: 1195,
                        category: "Burgers",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m6-2",
                        name: "The Lab Burger",
                        description: "Triple smash, bacon, caramelized onion, gruyère",
                        price_cents: 1595,
                        category: "Burgers",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m6-3",
                        name: "Mushroom Swiss",
                        description: "Double smash, sautéed mushrooms, Swiss, aioli",
                        price_cents: 1295,
                        category: "Burgers",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Sides & Shakes",
                items: [
                    {
                        id: "m6-4",
                        name: "Loaded Fries",
                        description: "Crinkle cut, cheese sauce, jalapeños, scallions",
                        price_cents: 795,
                        category: "Sides & Shakes",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m6-5",
                        name: "Craft Shake",
                        description: "Rotating flavors — ask today's",
                        price_cents: 695,
                        category: "Sides & Shakes",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    }
};
// ─── Upcoming schedules ───────────────────────────────────────────────────────
const DAY = 24 * 60 * 60 * 1000;
const MOCK_SCHEDULES = {
    "1": [
        {
            id: "s1-1",
            food_truck_id: "1",
            venue_name: "Congress Ave & 6th St",
            address_line1: "600 Congress Ave",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s1-2",
            food_truck_id: "1",
            venue_name: "Rainey Street",
            address_line1: "78 Rainey St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 17 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * DAY + 22 * 60 * 60 * 1000).toISOString(),
            notes: "Happy hour special",
            is_public: true
        },
        {
            id: "s1-3",
            food_truck_id: "1",
            venue_name: "Mueller Park",
            address_line1: "4550 Mueller Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 4 * DAY + 10 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 4 * DAY + 14 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "2": [
        {
            id: "s2-1",
            food_truck_id: "2",
            venue_name: "South Congress Food Park",
            address_line1: "1412 S Congress Ave",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s2-2",
            food_truck_id: "2",
            venue_name: "Barton Springs Pool",
            address_line1: "2131 William Barton Dr",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 16 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "3": [
        {
            id: "s3-1",
            food_truck_id: "3",
            venue_name: "East 6th & Waller",
            address_line1: "2200 E 6th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 0.5 * DAY).toISOString(),
            end_time: new Date(Date.now() + 0.5 * DAY + 4 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s3-2",
            food_truck_id: "3",
            venue_name: "The Domain",
            address_line1: "3401 Esperanza Crossing",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "4": [
        {
            id: "s4-1",
            food_truck_id: "4",
            venue_name: "Barton Springs & Lamar",
            address_line1: "1800 Barton Springs Rd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "5": [
        {
            id: "s5-1",
            food_truck_id: "5",
            venue_name: "Mueller Farmers Market",
            address_line1: "4209 Airport Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 9 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 13 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s5-2",
            food_truck_id: "5",
            venue_name: "Cherrywood Coffeehouse",
            address_line1: "1400 E 38th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 3 * DAY + 8 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(),
            notes: "Weekend brunch pop-up",
            is_public: true
        }
    ],
    "6": [
        {
            id: "s6-1",
            food_truck_id: "6",
            venue_name: "South Lamar Lot",
            address_line1: "1209 S Lamar Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s6-2",
            food_truck_id: "6",
            venue_name: "Sixth Street Entertainment",
            address_line1: "412 E 6th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 20 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 0 * 60 * 60 * 1000).toISOString(),
            notes: "Late night hours",
            is_public: true
        }
    ]
};
const CUISINE_OPTIONS = [
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
    "Burgers"
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STALE_CONFIG",
    ()=>STALE_CONFIG,
    "STATUS_CONFIG",
    ()=>STATUS_CONFIG,
    "cn",
    ()=>cn,
    "formatLastUpdated",
    ()=>formatLastUpdated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const STATUS_CONFIG = {
    serving_now: {
        label: "Serving Now",
        color: "text-emerald-400",
        dotColor: "bg-emerald-400",
        pulse: true
    },
    arriving_soon: {
        label: "Arriving Soon",
        color: "text-amber-400",
        dotColor: "bg-amber-400",
        pulse: true
    },
    busy: {
        label: "Busy",
        color: "text-orange-400",
        dotColor: "bg-orange-400",
        pulse: false
    },
    sold_out: {
        label: "Sold Out",
        color: "text-red-400",
        dotColor: "bg-red-400",
        pulse: false
    },
    closed_early: {
        label: "Closed Early",
        color: "text-zinc-500",
        dotColor: "bg-zinc-500",
        pulse: false
    },
    offline: {
        label: "Offline",
        color: "text-zinc-600",
        dotColor: "bg-zinc-600",
        pulse: false
    }
};
const STALE_CONFIG = {
    fresh: {
        label: "",
        show: false
    },
    aging: {
        label: "~{n} min ago",
        show: true
    },
    stale: {
        label: "Unconfirmed",
        show: true
    },
    expired: {
        label: "May be outdated",
        show: true
    }
};
function formatLastUpdated(isoString) {
    const diffMs = Date.now() - new Date(isoString).getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return "just now";
    if (diffMin === 1) return "1 min ago";
    return `${diffMin} min ago`;
}
}),
"[project]/components/truck/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function StatusBadge({ liveStatus, size = "md" }) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS_CONFIG"][liveStatus.status];
    const isSm = size === "sm";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 rounded-full font-body font-semibold", isSm ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs", "bg-surface-muted/60 border border-surface-border"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex h-2 w-2 shrink-0",
                children: [
                    config.pulse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", config.dotColor)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/StatusBadge.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex rounded-full h-2 w-2", config.dotColor)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/StatusBadge.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: config.color,
                children: config.label
            }, void 0, false, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            liveStatus.stale_state !== "fresh" && !isSm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-500 font-normal ml-0.5",
                children: [
                    "· ",
                    liveStatus.stale_state === "stale" || liveStatus.stale_state === "expired" ? "unconfirmed" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLastUpdated"])(liveStatus.last_updated_at)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/truck/StatusBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(public)/trucks/[slug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TruckDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/truck/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(iso) {
    return new Date(iso).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}
function formatScheduleDate(iso) {
    const d = new Date(iso);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    if (d.toDateString() === today.toDateString()) return "Today";
    if (d.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
}
function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2).replace(".00", "")}`;
}
function getDirectionsUrl(lat, lng, address) {
    if (lat && lng) return `https://maps.google.com/?q=${lat},${lng}`;
    if (address) return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    return "https://maps.google.com/";
}
function TruckDetailPage({ params }) {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const entry = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_TRUCKS"].find((t)=>t.truck.slug === slug);
    if (!entry) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    const { truck, liveStatus, distance_miles } = entry;
    const menu = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_MENUS"][truck.id];
    const schedule = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_SCHEDULES"][truck.id] ?? [];
    const featuredItems = menu?.categories.flatMap((c)=>c.items).filter((i)=>i.is_featured) ?? [];
    const [followed, setFollowed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLive = liveStatus.open_now;
    const isStale = liveStatus.stale_state === "stale" || liveStatus.stale_state === "expired";
    const staleConfig = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STALE_CONFIG"][liveStatus.stale_state];
    const statusConfig = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS_CONFIG"][liveStatus.status];
    const directionsUrl = getDirectionsUrl(liveStatus.latitude, liveStatus.longitude, liveStatus.address_line1 ? `${liveStatus.address_line1}, ${liveStatus.city ?? ""} TX` : null);
    // Next scheduled stop (first future stop)
    const nextStop = schedule.find((s)=>new Date(s.start_time) > new Date());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-surface-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-40 bg-surface-bg/90 backdrop-blur-md border-b border-surface-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/explore",
                            className: "flex items-center gap-1.5 text-sm font-body text-zinc-400 hover:text-white transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                "Explore"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display font-semibold text-sm text-white truncate",
                            children: truck.name
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFollowed((p)=>!p),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold border transition-all", followed ? "bg-brand-500/10 border-brand-500/40 text-brand-400" : "bg-surface-card border-surface-border text-zinc-400 hover:text-white hover:border-zinc-500"),
                                    children: followed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-2.184C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            "Following"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 1.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            "Follow"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: directionsUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold", "bg-brand-500 hover:bg-brand-600 text-white transition-colors"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-3.5 w-3.5",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        "Directions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-4 pb-32 sm:pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative grain-overlay rounded-xl mt-4 overflow-hidden px-6 py-8",
                        style: {
                            background: `
              radial-gradient(ellipse 80% 60% at 30% 100%, rgba(255,118,17,0.15) 0%, transparent 65%),
              radial-gradient(ellipse 40% 50% at 90% 0%, rgba(255,188,113,0.08) 0%, transparent 55%),
              #1a1a1a
            `
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex items-start gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-16 w-16 rounded-xl shrink-0 flex items-center justify-center", "font-display font-extrabold text-2xl border", liveStatus.status === "offline" ? "bg-surface-muted border-surface-border text-zinc-600" : "bg-brand-500/15 border-brand-500/30 text-brand-400"),
                                    children: truck.name.charAt(0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-display font-bold text-2xl text-white leading-tight",
                                                    children: truck.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this),
                                                truck.is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-body font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "h-3 w-3",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Verified"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 flex-wrap mb-3",
                                            children: truck.cuisines.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full bg-surface-muted text-zinc-400 text-xs font-body",
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        truck.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-body text-zinc-400 leading-relaxed",
                                            children: truck.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    isStale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/25",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4 text-amber-400 mt-0.5 shrink-0",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-body font-semibold text-amber-400",
                                        children: "Status unconfirmed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-body text-amber-400/70 mt-0.5",
                                        children: [
                                            "Last updated ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLastUpdated"])(liveStatus.last_updated_at),
                                            ". This may not reflect current status."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-xl border border-surface-border bg-surface-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                        liveStatus: liveStatus
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-body text-zinc-600",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLastUpdated"])(liveStatus.last_updated_at)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            isLive && liveStatus.location_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-4 w-4 text-brand-500 mt-0.5 shrink-0",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-body font-medium text-white",
                                                        children: liveStatus.location_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    liveStatus.address_line1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-body text-zinc-500 mt-0.5",
                                                        children: [
                                                            liveStatus.address_line1,
                                                            ", ",
                                                            liveStatus.city
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 pt-1",
                                        children: [
                                            liveStatus.start_time && liveStatus.end_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-3.5 w-3.5 text-zinc-500",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-body text-zinc-400",
                                                        children: [
                                                            formatTime(liveStatus.start_time),
                                                            " – ",
                                                            formatTime(liveStatus.end_time)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this),
                                            liveStatus.wait_time_minutes !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-3.5 w-3.5 text-zinc-500",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-body text-zinc-400",
                                                        children: [
                                                            "~",
                                                            liveStatus.wait_time_minutes,
                                                            " min wait"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this),
                                            distance_miles !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-body text-zinc-500",
                                                children: distance_miles < 1 ? `${Math.round(distance_miles * 5280)} ft away` : `${distance_miles.toFixed(1)} mi away`
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: directionsUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-muted hover:bg-surface-border text-sm font-body font-semibold text-white transition-colors border border-surface-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-4 w-4 text-brand-400",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            "Get Directions",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-3.5 w-3.5 text-zinc-500",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            !isLive && nextStop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex items-start gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 text-zinc-500 mt-0.5 shrink-0",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-body text-zinc-500 mb-0.5",
                                                children: "Next stop"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-body font-medium text-zinc-300",
                                                children: nextStop.venue_name
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-body text-zinc-500 mt-0.5",
                                                children: [
                                                    formatScheduleDate(nextStop.start_time),
                                                    " · ",
                                                    formatTime(nextStop.start_time),
                                                    " – ",
                                                    formatTime(nextStop.end_time)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            !isLive && !nextStop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-body text-zinc-600 mt-1",
                                children: "No upcoming stops scheduled."
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-xl overflow-hidden border border-surface-border h-40 relative bg-[#1c1f26]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniMapPlaceholder, {
                            truckName: truck.name,
                            locationName: liveStatus.location_name
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-lg text-white",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            featuredItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-2",
                                        children: "Featured"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4",
                                        children: featuredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3.5 rounded-xl bg-surface-card border border-surface-border",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-body font-semibold text-white truncate",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    !item.is_available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-body text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded-full shrink-0",
                                                                        children: "Sold out"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this),
                                                            item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-body text-zinc-500 mt-0.5 line-clamp-2",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-body font-bold text-brand-400 shrink-0",
                                                        children: formatPrice(item.price_cents)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: menu.categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-2",
                                                children: cat.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: cat.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg", "bg-surface-card border border-surface-border", !item.is_available && "opacity-50"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-body text-white truncate",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                                lineNumber: 380,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            !item.is_available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-body text-red-400 shrink-0",
                                                                                children: "Sold out"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                                lineNumber: 382,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-body text-zinc-600 mt-0.5 truncate",
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-body font-semibold text-zinc-300 shrink-0",
                                                                children: formatPrice(item.price_cents)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cat.name, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this),
                    schedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-lg text-white mb-3",
                                children: "Upcoming Stops"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: schedule.map((stop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 px-4 py-3 rounded-xl bg-surface-card border border-surface-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 text-center w-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-body font-semibold text-zinc-500 uppercase",
                                                        children: new Date(stop.start_time).toLocaleDateString("en-US", {
                                                            weekday: "short"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display font-bold text-lg text-white leading-tight",
                                                        children: new Date(stop.start_time).getDate()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-px self-stretch bg-surface-border shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-body font-medium text-white truncate",
                                                        children: stop.venue_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-body text-zinc-500 mt-0.5",
                                                        children: [
                                                            stop.address_line1,
                                                            ", ",
                                                            stop.city
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-body text-zinc-600 mt-1",
                                                        children: [
                                                            formatTime(stop.start_time),
                                                            " – ",
                                                            formatTime(stop.end_time)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 21
                                                    }, this),
                                                    stop.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-body text-brand-400 mt-1",
                                                        children: stop.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, stop.id, true, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6 rounded-xl border border-surface-border bg-surface-card p-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-base text-white",
                                children: "About & Contact"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5",
                                children: [
                                    truck.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 23
                                        }, this),
                                        label: truck.phone,
                                        href: `tel:${truck.phone.replace(/\D/g, "")}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this),
                                    truck.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailIcon, {}, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 23
                                        }, this),
                                        label: truck.email,
                                        href: `mailto:${truck.email}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    truck.website_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WebIcon, {}, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 23
                                        }, this),
                                        label: "Website",
                                        href: truck.website_url,
                                        external: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    truck.instagram_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {}, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 23
                                        }, this),
                                        label: "Instagram",
                                        href: truck.instagram_url,
                                        external: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, this),
                                    truck.facebook_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookIcon, {}, void 0, false, {
                                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 23
                                        }, this),
                                        label: "Facebook",
                                        href: truck.facebook_url,
                                        external: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-1 border-t border-surface-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-body text-zinc-600",
                                    children: [
                                        "Based in ",
                                        truck.city,
                                        ", ",
                                        truck.state
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-surface-bg/95 backdrop-blur-md border-t border-surface-border px-4 py-3 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFollowed((p)=>!p),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold border transition-all", followed ? "bg-brand-500/10 border-brand-500/40 text-brand-400" : "bg-surface-card border-surface-border text-zinc-300"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4",
                                viewBox: "0 0 20 20",
                                fill: followed ? "currentColor" : "none",
                                stroke: "currentColor",
                                strokeWidth: followed ? 0 : 1.5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this),
                            followed ? "Following" : "Follow"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: directionsUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-semibold transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            "Get Directions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
// ─── Mini map placeholder ─────────────────────────────────────────────────────
function MiniMapPlaceholder({ truckName, locationName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full opacity-25",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "mini-grid",
                            width: "30",
                            height: "30",
                            patternUnits: "userSpaceOnUse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 30 0 L 0 0 0 30",
                                fill: "none",
                                stroke: "#374151",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#mini-grid)"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "45%",
                        x2: "100%",
                        y2: "48%",
                        stroke: "#374151",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "40%",
                        y1: "0",
                        x2: "42%",
                        y2: "100%",
                        stroke: "#374151",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 536,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-body font-semibold shadow-lg shadow-brand-900/40",
                            children: truckName.split(" ")[0]
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-brand-500"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                    lineNumber: 548,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this),
            locationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/50 text-[10px] text-zinc-400 font-body",
                children: locationName
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 556,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/50 text-[10px] text-zinc-500 font-body",
                children: "Map placeholder"
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// ─── Contact row ──────────────────────────────────────────────────────────────
function ContactRow({ icon, label, href, external }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
        className: "flex items-center gap-2.5 text-sm font-body text-zinc-400 hover:text-white transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-7 w-7 rounded-lg bg-surface-muted flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0",
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            external && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-3 w-3 text-zinc-600 shrink-0 ml-auto",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 591,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 580,
        columnNumber: 5
    }, this);
}
// ─── Icons ────────────────────────────────────────────────────────────────────
function PhoneIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-3.5 w-3.5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
            lineNumber: 604,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 603,
        columnNumber: 5
    }, this);
}
function EmailIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-3.5 w-3.5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
            }, void 0, false, {
                fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
function WebIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-3.5 w-3.5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
            lineNumber: 619,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 618,
        columnNumber: 5
    }, this);
}
function InstagramIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-3.5 w-3.5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        }, void 0, false, {
            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
            lineNumber: 626,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 625,
        columnNumber: 5
    }, this);
}
function FacebookIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-3.5 w-3.5",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
            lineNumber: 633,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/trucks/[slug]/page.tsx",
        lineNumber: 632,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0t1~89t._.js.map