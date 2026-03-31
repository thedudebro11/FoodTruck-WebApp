# MVP Execution Roadmap by Sprint

This roadmap is designed for an MVP-first build of the mobile-responsive website.

## Sprint philosophy

- Build the smallest believable version first
- Prioritize trust, discovery, and owner workflow
- Do not overbuild host or admin tooling early
- Ship something testable in a narrow market fast

## Sprint 0: Setup and decisions

### Goals
- finalize product scope
- lock stack
- initialize repo
- define environment setup
- create schema and route contracts

### Deliverables
- project repo initialized
- Next.js + TypeScript + Tailwind + shadcn/ui
- Drizzle configured
- Supabase project created
- env structure documented
- base README
- product docs imported into project
- route map agreed
- schema migration v1 drafted

---

## Sprint 1: Core foundation

### Goals
- auth
- roles
- app shell
- database core

### Build
- sign up / sign in
- role selection
- session handling
- route protection
- base layout
- initial tables:
  - users
  - user_profiles
  - food_trucks
  - truck_live_status
  - truck_schedules
  - menus
  - menu_items

### Done when
- users can authenticate
- roles can be recognized
- owner and public routes can be separated

---

## Sprint 2: Static truck profiles

### Goals
- create and manage truck identity
- support claim/create flows

### Build
- owner create truck flow
- claim truck screen
- truck profile editor
- truck detail public page shell
- image upload for logo / cover
- cuisine tagging

### Done when
- owner can create a truck profile
- public truck page can render static data

---

## Sprint 3: Live discovery MVP

### Goals
- public discovery becomes real

### Build
- live nearby query
- Explore / Live Map screen
- basic map integration
- truck cards
- filters:
  - open now
  - cuisine
  - distance
- truck detail page live status section

### Done when
- customer can search nearby trucks and open a real detail page

---

## Sprint 4: Owner go-live flow

### Goals
- make the platform operational

### Build
- owner dashboard
- go live / go offline flow
- live status upsert
- status history append
- current location support
- status badges
- freshness timestamp

### Done when
- owner can go live in under 30 seconds
- customer can see live status and last updated time

---

## Sprint 5: Menus and schedules

### Goals
- support real truck information
- support today's stop and future visibility

### Build
- menu manager
- item availability toggle
- truck detail menu section
- schedule manager
- create upcoming stops
- show next upcoming stops publicly

### Done when
- owner can publish menu and future stops
- customer can see menu and upcoming schedule

---

## Sprint 6: Freshness engine and trust layer

### Goals
- prevent stale data from damaging the product

### Build
- freshness rules
- stale / aging / expired state
- background job for live status expiration
- public UI for freshness / unconfirmed states
- optional customer confirmation MVP if time allows

### Done when
- stale live data degrades gracefully instead of pretending certainty

---

## Sprint 7: Favorites and lightweight retention

### Goals
- create repeat customer behavior

### Build
- follow / unfollow truck
- favorites page
- show live favorites first
- notification preferences table
- groundwork for alerting

### Done when
- customer can save trucks and return to a favorites view

---

## Sprint 8: Booking request MVP

### Goals
- prove host-side marketplace usefulness

### Build
- host booking request form
- booking requests table and routes
- owner booking inbox
- accept / decline actions
- request status views

### Done when
- a host can request a truck and the owner can respond in-app

---

## Sprint 9: Analytics MVP

### Goals
- show owners that the platform is valuable

### Build
- analytics event capture
- dashboard metric rollups
- owner analytics page
- metrics:
  - profile views
  - map impressions
  - directions taps
  - menu views
  - favorites added
  - booking requests

### Done when
- owners can see simple evidence of demand and usage

---

## Sprint 10: Polish and launch prep

### Goals
- make the product testable in a real city

### Build
- owner onboarding refinement
- empty states
- error states
- QA pass
- mobile responsiveness audit
- performance pass
- seed initial trucks
- basic admin moderation tools if needed
- launch checklist

### Done when
- the app is stable enough for a pilot with a handful of trucks in one city

---

# Post-MVP roadmap

## Phase 2
- recurring schedule templates
- alerts for followed trucks
- event discovery improvements
- truck verification flow
- owner reminder notifications

## Phase 3
- advanced host tools
- promoted listings
- better analytics
- customer confirmations and trust scoring
- review system
- loyalty / rewards

## Phase 4
- native mobile app
- push notifications
- team accounts
- route planning
- ordering integrations
- multi-city expansion

---

# Critical MVP guardrails

Do not add early:
- heavy social features
- advanced loyalty
- full ordering system
- bloated review ecosystem
- overcomplicated host dashboards
- fake enterprise analytics
- too many roles and permissions

---

# Pilot launch plan

## Supply first
Onboard 10 to 20 trucks manually.

## Demand second
Promote to:
- local foodies
- brewery crowds
- apartment communities
- downtown workers
- event organizers

## Narrow geography
Launch in one tight area first.

---

# Success criteria for MVP

### Owner-side
- owners keep data updated
- owners can go live quickly
- owners see some evidence of value

### Customer-side
- users can find nearby trucks fast
- users trust live status more than Instagram hunting
- users use directions / follow actions

### Marketplace-side
- at least some booking requests happen
- owners see that requests are clearer than DMs

---

# Suggested sprint cadence

If working fast:
- 1 sprint = 1 week

If working more cautiously:
- 1 sprint = 2 weeks

Either way, keep demos tight:
- show live discovery
- show owner update flow
- show public trust state
