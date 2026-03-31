# Build Principles and Nonfunctional Requirements

## Build principles

### 1. Trust over decoration
A simpler interface with accurate data beats a beautiful interface with stale data.

### 2. Owner actions must be minimal
Anything repeated often should feel extremely fast.

### 3. Separate domains cleanly
- static identity
- dynamic live state
- future schedule
- bookings
- analytics

### 4. Never fake certainty
Always show freshness and downgrade stale data honestly.

### 5. Optimize for mobile responsiveness
Even though this is web-first, usage will be highly mobile.

### 6. Preserve auditability
Live status changes should have history.

### 7. Build narrow, then expand
Do not try to support every city and feature immediately.

## Nonfunctional requirements

### Performance
- first useful nearby results should be quick
- pages should feel responsive on mobile
- avoid large payloads for live discovery
- cache static content when possible

### Reliability
- live status writes must succeed consistently
- status history should be append-only
- scheduled jobs should not silently fail

### Security
- role-based access control on server
- validate all inputs
- protect owner routes
- sanitize user content
- secure media upload rules

### Data quality
- expire stale live data
- prevent duplicate follows
- protect booking workflow from spam
- validate coordinates and dates

### Scalability
- modular monolith is fine for MVP
- keep service boundaries clear
- avoid premature microservices

### Observability
- log status mutations
- log booking request transitions
- monitor background jobs
- track core analytics events

## Critical invariants

1. `food_trucks` is not the source of live truth
2. `truck_live_status` is the current live truth
3. `truck_status_history` is append-only
4. stale status must degrade over time
5. owners can only mutate their own trucks
6. booking ownership and request ownership must be enforced
7. owner go-live flow is a top-priority reliability path
