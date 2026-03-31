# Database Schema (SQL)

This schema is designed for PostgreSQL. PostGIS is recommended for spatial search.

```sql
-- Recommended extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
-- CREATE EXTENSION IF NOT EXISTS postgis;

-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  role TEXT NOT NULL CHECK (role IN ('customer', 'owner', 'host', 'admin')),
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  city TEXT,
  state TEXT,
  bio TEXT,
  onboarding_completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- FOOD TRUCKS
CREATE TABLE food_trucks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  primary_cuisine TEXT,
  phone TEXT,
  email TEXT,
  website_url TEXT,
  instagram_url TEXT,
  facebook_url TEXT,
  profile_image_url TEXT,
  cover_image_url TEXT,
  city TEXT,
  state TEXT,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  verification_status TEXT NOT NULL DEFAULT 'unverified'
    CHECK (verification_status IN ('unverified', 'pending', 'verified', 'rejected')),
  is_claimed BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE food_truck_cuisines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  cuisine TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE food_truck_claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  requesting_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  claim_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (claim_status IN ('pending', 'approved', 'rejected')),
  notes TEXT,
  reviewed_by_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- LIVE STATUS
CREATE TABLE truck_live_status (
  food_truck_id UUID PRIMARY KEY REFERENCES food_trucks(id) ON DELETE CASCADE,
  status TEXT NOT NULL
    CHECK (status IN ('offline', 'arriving_soon', 'serving_now', 'busy', 'sold_out', 'closed_early')),
  open_now BOOLEAN NOT NULL DEFAULT false,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  location_name TEXT,
  address_line1 TEXT,
  city TEXT,
  state TEXT,
  postal_code TEXT,
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ,
  wait_time_minutes INTEGER,
  last_updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  update_source TEXT NOT NULL DEFAULT 'owner_manual'
    CHECK (update_source IN ('owner_manual', 'gps', 'admin', 'system')),
  is_confirmed BOOLEAN NOT NULL DEFAULT true,
  stale_state TEXT NOT NULL DEFAULT 'fresh'
    CHECK (stale_state IN ('fresh', 'aging', 'stale', 'expired'))
);

CREATE TABLE truck_status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  status TEXT NOT NULL
    CHECK (status IN ('offline', 'arriving_soon', 'serving_now', 'busy', 'sold_out', 'closed_early')),
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  location_name TEXT,
  open_now BOOLEAN NOT NULL DEFAULT false,
  wait_time_minutes INTEGER,
  update_source TEXT NOT NULL DEFAULT 'owner_manual'
    CHECK (update_source IN ('owner_manual', 'gps', 'admin', 'system')),
  created_by_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE truck_customer_confirmations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  confirmation_type TEXT NOT NULL
    CHECK (confirmation_type IN ('here_now', 'not_here', 'sold_out', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- SCHEDULES
CREATE TABLE truck_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  title TEXT,
  venue_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  schedule_type TEXT NOT NULL DEFAULT 'one_time'
    CHECK (schedule_type IN ('one_time', 'recurring_template', 'generated_instance')),
  recurrence_rule TEXT,
  notes TEXT,
  is_public BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'scheduled'
    CHECK (status IN ('scheduled', 'canceled', 'completed')),
  created_by_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE schedule_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  venue_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  start_time_local TIME NOT NULL,
  end_time_local TIME NOT NULL,
  day_of_week SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- MENUS
CREATE TABLE menus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE menu_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_id UUID NOT NULL REFERENCES menus(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_id UUID NOT NULL REFERENCES menus(id) ON DELETE CASCADE,
  category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER,
  image_url TEXT,
  is_available BOOLEAN NOT NULL DEFAULT true,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- HOSTS / EVENTS / BOOKINGS
CREATE TABLE hosts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  organization_name TEXT,
  contact_name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  venue_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  event_status TEXT NOT NULL DEFAULT 'upcoming'
    CHECK (event_status IN ('draft', 'upcoming', 'live', 'completed', 'canceled')),
  visibility TEXT NOT NULL DEFAULT 'public'
    CHECK (visibility IN ('public', 'private')),
  expected_attendance INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE event_trucks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  participation_status TEXT NOT NULL
    CHECK (participation_status IN ('invited', 'requested', 'confirmed', 'declined', 'canceled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, food_truck_id)
);

CREATE TABLE booking_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  host_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  event_id UUID REFERENCES events(id) ON DELETE SET NULL,
  request_status TEXT NOT NULL DEFAULT 'requested'
    CHECK (request_status IN ('requested', 'accepted', 'declined', 'canceled', 'completed')),
  venue_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT,
  requested_start_time TIMESTAMPTZ NOT NULL,
  requested_end_time TIMESTAMPTZ NOT NULL,
  budget_min_cents INTEGER,
  budget_max_cents INTEGER,
  expected_attendance INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ENGAGEMENT
CREATE TABLE truck_follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, food_truck_id)
);

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- NOTIFICATIONS
CREATE TABLE notification_preferences (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  favorite_truck_live_alerts BOOLEAN NOT NULL DEFAULT true,
  nearby_truck_alerts BOOLEAN NOT NULL DEFAULT false,
  event_alerts BOOLEAN NOT NULL DEFAULT true,
  booking_updates BOOLEAN NOT NULL DEFAULT true,
  marketing_emails BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE notification_deliveries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  channel TEXT NOT NULL CHECK (channel IN ('email', 'push', 'sms')),
  status TEXT NOT NULL CHECK (status IN ('queued', 'sent', 'failed')),
  payload_json JSONB,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ANALYTICS
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  food_truck_id UUID REFERENCES food_trucks(id) ON DELETE SET NULL,
  event_id UUID REFERENCES events(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  session_id TEXT,
  metadata_json JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE daily_truck_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_truck_id UUID NOT NULL REFERENCES food_trucks(id) ON DELETE CASCADE,
  metric_date DATE NOT NULL,
  profile_views INTEGER NOT NULL DEFAULT 0,
  map_impressions INTEGER NOT NULL DEFAULT 0,
  directions_clicks INTEGER NOT NULL DEFAULT 0,
  favorites_added INTEGER NOT NULL DEFAULT 0,
  menu_views INTEGER NOT NULL DEFAULT 0,
  booking_requests INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (food_truck_id, metric_date)
);

-- USEFUL INDEXES
CREATE INDEX idx_food_trucks_owner_user_id ON food_trucks(owner_user_id);
CREATE INDEX idx_truck_schedules_food_truck_id ON truck_schedules(food_truck_id);
CREATE INDEX idx_truck_schedules_start_time ON truck_schedules(start_time);
CREATE INDEX idx_booking_requests_food_truck_id ON booking_requests(food_truck_id);
CREATE INDEX idx_booking_requests_host_user_id ON booking_requests(host_user_id);
CREATE INDEX idx_analytics_events_food_truck_id ON analytics_events(food_truck_id);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX idx_truck_live_status_last_updated_at ON truck_live_status(last_updated_at);
```

## Schema notes

### Critical architectural rule
Keep these separate:
- static truck identity (`food_trucks`)
- dynamic live state (`truck_live_status`)
- future schedule (`truck_schedules`)

### Recommended geo upgrade
If PostGIS is enabled, add geometry/geography columns or computed indexes for efficient nearby search.

### Price modeling
Use integer cents, not floats.

### Freshness policy
Suggested status freshness windows:
- fresh: 0 to 15 min
- aging: 15 to 30 min
- stale: 30 to 60 min
- expired: 60+ min or end time passed
