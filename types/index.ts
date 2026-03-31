// ─── Static truck identity ───────────────────────────────────────────────────
// Mirrors food_trucks + food_truck_cuisines tables (schema-sql.md)
// NEVER mix with live status — architectural rule from docs/architecture
export interface FoodTruck {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  primary_cuisine: string;
  cuisines: string[];
  profile_image_url: string | null;
  cover_image_url: string | null;
  city: string;
  state: string;
  is_verified: boolean;
  // Contact / social (from schema)
  phone: string | null;
  email: string | null;
  website_url: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
}

// ─── Dynamic live state ───────────────────────────────────────────────────────
// Mirrors truck_live_status table (schema-sql.md)
export type LiveStatusValue =
  | "offline"
  | "arriving_soon"
  | "serving_now"
  | "busy"
  | "sold_out"
  | "closed_early";

export type StaleState = "fresh" | "aging" | "stale" | "expired";

export interface TruckLiveStatus {
  food_truck_id: string;
  status: LiveStatusValue;
  open_now: boolean;
  latitude: number | null;
  longitude: number | null;
  location_name: string | null;
  address_line1: string | null;
  city: string | null;
  start_time: string | null;
  end_time: string | null;
  wait_time_minutes: number | null;
  last_updated_at: string; // ISO timestamp
  stale_state: StaleState;
  is_confirmed: boolean;
}

// ─── Composed view model ──────────────────────────────────────────────────────
// Used by UI components — static + live data combined for display only
export interface TruckWithStatus {
  truck: FoodTruck;
  liveStatus: TruckLiveStatus;
  distance_miles: number | null;
}

// ─── Menu types ───────────────────────────────────────────────────────────────
// Mirrors menu_items + menu_categories tables
export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  category: string;
  is_available: boolean;
  is_featured: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface TruckMenu {
  food_truck_id: string;
  categories: MenuCategory[];
}

// ─── Schedule types ───────────────────────────────────────────────────────────
// Mirrors truck_schedules table
export interface TruckScheduleStop {
  id: string;
  food_truck_id: string;
  venue_name: string;
  address_line1: string;
  city: string;
  state: string;
  start_time: string; // ISO
  end_time: string;   // ISO
  notes: string | null;
  is_public: boolean;
}

// ─── Filter state ─────────────────────────────────────────────────────────────
export interface ExploreFilters {
  openNow: boolean;
  cuisines: string[];
  eventOnly: boolean;
}
