# Architecture and System Design

## High-level architecture

Recommended approach:

- **Next.js** for the web application
- **Supabase** for auth, Postgres, and storage
- **Drizzle ORM** for schema and typed queries
- **Thin server-side domain layer** for business logic
- **Map provider** such as Mapbox or Google Maps
- **Resend** for transactional email
- **Stripe** later for subscriptions

## System domains

### 1. Discovery domain
Customer-facing discovery and browsing:
- live nearby trucks
- truck detail pages
- event discovery
- favorites

### 2. Operations domain
Owner-facing tools:
- truck profile management
- go live / go offline
- schedules
- menus
- booking inbox
- analytics

### 3. Marketplace domain
Host and event coordination:
- booking requests
- event-truck relationships
- host tools

### 4. Auth and roles
- sign up
- sign in
- role-based access
- onboarding state

### 5. Notifications
- transactional email
- live alerts later
- booking updates
- reminder jobs

### 6. Analytics
- event logs
- dashboard metrics
- future conversion analysis

## Most important architecture rule

**Static truck identity and dynamic live state must be separate.**

Do not mix:
- name, logo, cuisine, social links
with:
- live status, open now, coordinates, last updated

Keep these separate from day one:
- `food_trucks`
- `truck_live_status`
- `truck_schedules`

## Data classification model

### Static data
Changes rarely:
- truck name
- branding
- contact info
- social links

### Semi-static data
Changes sometimes:
- menu
- schedule templates
- upcoming stops

### Dynamic data
Changes often:
- current location
- current status
- wait time
- freshness state
- open/closed

## Frontend architecture

Suggested file structure:

```txt
app/
  (public)/
    page.tsx
    explore/
    trucks/[slug]/
    events/
  (auth)/
    sign-in/
    sign-up/
    claim-truck/
  (owner)/
    dashboard/
    truck/
    menu/
    schedules/
    bookings/
    analytics/
    settings/
  (host)/
    requests/
    events/

components/
  map/
  truck/
  status/
  menu/
  booking/
  layout/
  forms/

lib/
  auth/
  api/
  geo/
  analytics/
  validators/
  utils/

server/
  services/
    trucks/
    liveStatus/
    schedules/
    menus/
    bookings/
    analytics/
    notifications/
  repositories/
  jobs/
  policies/
```

## Logical service boundaries

### Auth module
- auth
- role checks
- session handling
- onboarding state

### Truck module
- truck CRUD
- claim flow
- verification status
- cuisine tags

### Live status module
- go live
- go offline
- refresh state
- stale expiration
- current-location rules

### Schedule module
- future stops
- recurring templates
- public schedule reads

### Menu module
- menus
- categories
- items
- availability toggles

### Discovery module
- nearby search
- filters
- public truck detail shaping
- event discovery

### Booking module
- booking request creation
- accept / decline
- event coordination

### Notification module
- follow alerts later
- booking updates
- reminder sends

### Analytics module
- event tracking
- daily aggregation
- dashboard query shaping

## Geo/search architecture

### Minimum viable approach
Store latitude and longitude on:
- `truck_live_status`
- `truck_schedules`
- `events`

### Recommended approach
Use PostGIS if possible for:
- trucks within X miles
- events nearby
- viewport-based map queries

### Fallback if PostGIS is deferred
- bounding box prefilter
- Haversine distance calculation in SQL or application layer

## Live status freshness engine

This is a core system behavior, not just a UI concern.

### Suggested freshness policy
- `fresh`: updated within 15 minutes
- `aging`: 15 to 30 minutes
- `stale`: 30 to 60 minutes
- `expired`: more than 60 minutes old or end time passed

### Behavior
- fresh: show confidently
- aging: show but weaker confidence
- stale: show as unconfirmed
- expired: remove from live discovery or mark offline

### Important rule
The backend should compute or enforce freshness rules so the frontend does not invent truth.

## Background jobs

### 1. Live status expiration job
Runs every few minutes:
- checks `truck_live_status`
- updates `stale_state`
- expires or downgrades status

### 2. Owner reminder job
- reminder before scheduled stop
- reminder when live status is close to expiration

### 3. Daily metrics aggregation
- roll analytics into `daily_truck_metrics`

### 4. Notification fanout
- when followed truck goes live
- send emails or push later

## Authorization model

### Customers
- browse public data
- follow trucks
- manage own account

### Owners
- edit only owned trucks
- manage own menus
- manage own schedules
- manage own bookings
- view own analytics

### Hosts
- create and manage own requests and events

### Admins
- verify trucks
- review claims
- moderate content

## State management notes

### Use TanStack Query for
- server data
- caching
- mutations
- background refresh

### Use local component state for
- form steps
- lightweight UI interactions

### Use Zustand only if needed for
- complex cross-screen UI state
- map/list mode persistence
- maybe owner draft workflow

## Validation and contracts

Use Zod for:
- route inputs
- form schemas
- shared validation between frontend and server

## Nonfunctional requirements

### Performance
- nearby results should feel fast
- minimize overfetching
- cache static truck profile data
- keep live status reads small and fresh

### Reliability
- status changes should be auditable
- history should be append-only
- avoid silent state drift

### Security
- enforce ownership server-side
- validate every mutation
- protect admin routes
- sanitize user-generated content

### Scalability
Early on, monolith is fine.  
Keep module boundaries clear so later extraction is possible.

## Recommended initial deployment architecture

- Vercel: frontend and route handlers
- Supabase: auth, postgres, storage
- scheduled jobs: Vercel cron or equivalent worker
- email: Resend

## Key implementation invariant

The owner "Go Live" path is the heartbeat of the product.

If this flow is slow, annoying, or unreliable:
- data quality drops
- customer trust drops
- the marketplace weakens

That path must feel effortless.
