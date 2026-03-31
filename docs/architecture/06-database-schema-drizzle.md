# Database Schema (Drizzle ORM)

Below is a Drizzle/Postgres schema starter aligned with the SQL schema.

```ts
import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
  numeric,
  time,
  smallint,
  date,
  jsonb,
  uniqueIndex,
  index,
  primaryKey,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  phone: text("phone"),
  role: text("role").notNull(), // customer | owner | host | admin
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const userProfiles = pgTable("user_profiles", {
  userId: uuid("user_id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  city: text("city"),
  state: text("state"),
  bio: text("bio"),
  onboardingCompleted: boolean("onboarding_completed").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const foodTrucks = pgTable("food_trucks", {
  id: uuid("id").defaultRandom().primaryKey(),
  ownerUserId: uuid("owner_user_id").references(() => users.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  primaryCuisine: text("primary_cuisine"),
  phone: text("phone"),
  email: text("email"),
  websiteUrl: text("website_url"),
  instagramUrl: text("instagram_url"),
  facebookUrl: text("facebook_url"),
  profileImageUrl: text("profile_image_url"),
  coverImageUrl: text("cover_image_url"),
  city: text("city"),
  state: text("state"),
  isVerified: boolean("is_verified").notNull().default(false),
  verificationStatus: text("verification_status").notNull().default("unverified"),
  isClaimed: boolean("is_claimed").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  ownerIdx: index("idx_food_trucks_owner_user_id").on(t.ownerUserId),
}));

export const foodTruckCuisines = pgTable("food_truck_cuisines", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  cuisine: text("cuisine").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const foodTruckClaims = pgTable("food_truck_claims", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  requestingUserId: uuid("requesting_user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  claimStatus: text("claim_status").notNull().default("pending"),
  notes: text("notes"),
  reviewedByUserId: uuid("reviewed_by_user_id").references(() => users.id, { onDelete: "set null" }),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const truckLiveStatus = pgTable("truck_live_status", {
  foodTruckId: uuid("food_truck_id").primaryKey().references(() => foodTrucks.id, { onDelete: "cascade" }),
  status: text("status").notNull(),
  openNow: boolean("open_now").notNull().default(false),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  locationName: text("location_name"),
  addressLine1: text("address_line1"),
  city: text("city"),
  state: text("state"),
  postalCode: text("postal_code"),
  startTime: timestamp("start_time", { withTimezone: true }),
  endTime: timestamp("end_time", { withTimezone: true }),
  waitTimeMinutes: integer("wait_time_minutes"),
  lastUpdatedAt: timestamp("last_updated_at", { withTimezone: true }).notNull().defaultNow(),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
  updateSource: text("update_source").notNull().default("owner_manual"),
  isConfirmed: boolean("is_confirmed").notNull().default(true),
  staleState: text("stale_state").notNull().default("fresh"),
}, (t) => ({
  updatedIdx: index("idx_truck_live_status_last_updated_at").on(t.lastUpdatedAt),
}));

export const truckStatusHistory = pgTable("truck_status_history", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  status: text("status").notNull(),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  locationName: text("location_name"),
  openNow: boolean("open_now").notNull().default(false),
  waitTimeMinutes: integer("wait_time_minutes"),
  updateSource: text("update_source").notNull().default("owner_manual"),
  createdByUserId: uuid("created_by_user_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const truckCustomerConfirmations = pgTable("truck_customer_confirmations", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  confirmationType: text("confirmation_type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const truckSchedules = pgTable("truck_schedules", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  title: text("title"),
  venueName: text("venue_name").notNull(),
  addressLine1: text("address_line1").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postal_code"),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  startTime: timestamp("start_time", { withTimezone: true }).notNull(),
  endTime: timestamp("end_time", { withTimezone: true }).notNull(),
  scheduleType: text("schedule_type").notNull().default("one_time"),
  recurrenceRule: text("recurrence_rule"),
  notes: text("notes"),
  isPublic: boolean("is_public").notNull().default(true),
  status: text("status").notNull().default("scheduled"),
  createdByUserId: uuid("created_by_user_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  truckIdx: index("idx_truck_schedules_food_truck_id").on(t.foodTruckId),
  startIdx: index("idx_truck_schedules_start_time").on(t.startTime),
}));

export const scheduleTemplates = pgTable("schedule_templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  venueName: text("venue_name").notNull(),
  addressLine1: text("address_line1").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postal_code"),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  startTimeLocal: time("start_time_local").notNull(),
  endTimeLocal: time("end_time_local").notNull(),
  dayOfWeek: smallint("day_of_week").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const menus = pgTable("menus", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const menuCategories = pgTable("menu_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  menuId: uuid("menu_id").notNull().references(() => menus.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const menuItems = pgTable("menu_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  menuId: uuid("menu_id").notNull().references(() => menus.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id").references(() => menuCategories.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  description: text("description"),
  priceCents: integer("price_cents"),
  imageUrl: text("image_url"),
  isAvailable: boolean("is_available").notNull().default(true),
  isFeatured: boolean("is_featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const hosts = pgTable("hosts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  organizationName: text("organization_name"),
  contactName: text("contact_name"),
  phone: text("phone"),
  email: text("email"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const events = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdByUserId: uuid("created_by_user_id").references(() => users.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  description: text("description"),
  venueName: text("venue_name").notNull(),
  addressLine1: text("address_line1").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postal_code"),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  startTime: timestamp("start_time", { withTimezone: true }).notNull(),
  endTime: timestamp("end_time", { withTimezone: true }).notNull(),
  eventStatus: text("event_status").notNull().default("upcoming"),
  visibility: text("visibility").notNull().default("public"),
  expectedAttendance: integer("expected_attendance"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const eventTrucks = pgTable("event_trucks", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventId: uuid("event_id").notNull().references(() => events.id, { onDelete: "cascade" }),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  participationStatus: text("participation_status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  eventTruckUnique: uniqueIndex("event_trucks_unique").on(t.eventId, t.foodTruckId),
}));

export const bookingRequests = pgTable("booking_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  hostUserId: uuid("host_user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  eventId: uuid("event_id").references(() => events.id, { onDelete: "set null" }),
  requestStatus: text("request_status").notNull().default("requested"),
  venueName: text("venue_name").notNull(),
  addressLine1: text("address_line1").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postal_code"),
  requestedStartTime: timestamp("requested_start_time", { withTimezone: true }).notNull(),
  requestedEndTime: timestamp("requested_end_time", { withTimezone: true }).notNull(),
  budgetMinCents: integer("budget_min_cents"),
  budgetMaxCents: integer("budget_max_cents"),
  expectedAttendance: integer("expected_attendance"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  truckIdx: index("idx_booking_requests_food_truck_id").on(t.foodTruckId),
  hostIdx: index("idx_booking_requests_host_user_id").on(t.hostUserId),
}));

export const truckFollows = pgTable("truck_follows", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  followUnique: uniqueIndex("truck_follows_unique").on(t.userId, t.foodTruckId),
}));

export const reviews = pgTable("reviews", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  rating: smallint("rating").notNull(),
  body: text("body"),
  status: text("status").notNull().default("published"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const notificationPreferences = pgTable("notification_preferences", {
  userId: uuid("user_id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  favoriteTruckLiveAlerts: boolean("favorite_truck_live_alerts").notNull().default(true),
  nearbyTruckAlerts: boolean("nearby_truck_alerts").notNull().default(false),
  eventAlerts: boolean("event_alerts").notNull().default(true),
  bookingUpdates: boolean("booking_updates").notNull().default(true),
  marketingEmails: boolean("marketing_emails").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const notificationDeliveries = pgTable("notification_deliveries", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  notificationType: text("notification_type").notNull(),
  channel: text("channel").notNull(),
  status: text("status").notNull(),
  payloadJson: jsonb("payload_json"),
  sentAt: timestamp("sent_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const analyticsEvents = pgTable("analytics_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  actorUserId: uuid("actor_user_id").references(() => users.id, { onDelete: "set null" }),
  foodTruckId: uuid("food_truck_id").references(() => foodTrucks.id, { onDelete: "set null" }),
  eventId: uuid("event_id").references(() => events.id, { onDelete: "set null" }),
  eventType: text("event_type").notNull(),
  sessionId: text("session_id"),
  metadataJson: jsonb("metadata_json"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  truckIdx: index("idx_analytics_events_food_truck_id").on(t.foodTruckId),
  createdIdx: index("idx_analytics_events_created_at").on(t.createdAt),
}));

export const dailyTruckMetrics = pgTable("daily_truck_metrics", {
  id: uuid("id").defaultRandom().primaryKey(),
  foodTruckId: uuid("food_truck_id").notNull().references(() => foodTrucks.id, { onDelete: "cascade" }),
  metricDate: date("metric_date").notNull(),
  profileViews: integer("profile_views").notNull().default(0),
  mapImpressions: integer("map_impressions").notNull().default(0),
  directionsClicks: integer("directions_clicks").notNull().default(0),
  favoritesAdded: integer("favorites_added").notNull().default(0),
  menuViews: integer("menu_views").notNull().default(0),
  bookingRequests: integer("booking_requests").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => ({
  metricUnique: uniqueIndex("daily_truck_metrics_unique").on(t.foodTruckId, t.metricDate),
}));
```

## Drizzle notes

- Add Zod schemas for all mutation inputs.
- Keep enums as text initially for speed, or migrate to pgEnum later.
- Strongly consider PostGIS if nearby search is a core differentiator.
- `truckLiveStatus` should be treated as the single current row per truck.
- `truckStatusHistory` is append-only and important for auditing and analytics.
