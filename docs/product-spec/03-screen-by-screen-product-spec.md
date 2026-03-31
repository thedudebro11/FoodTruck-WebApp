# Screen-by-Screen Product Spec

## Surface map

This product has four main surfaces:
- customer experience
- truck owner dashboard
- host / booking flow
- admin / internal tools

---

# PART 1: CUSTOMER EXPERIENCE

## 1. Landing / Home Screen

### Purpose
Communicate value fast and route users into nearby discovery.

### Primary user goals
- find trucks near me now
- browse featured trucks and events
- understand product value immediately

### Core sections
- hero
- location search / use my location
- live nearby trucks preview
- featured trucks
- upcoming events
- how it works
- owner CTA
- host CTA

### Key UI elements
- headline: "Find food trucks live near you"
- location input
- geolocation button
- search CTA
- live truck preview cards
- top nav: Explore, Events, For Owners, Sign In
- sticky CTA: Open Live Map

### Functional behavior
- if location granted, personalize nearby content
- otherwise support city / ZIP / neighborhood search
- live cards show truck name, cuisine, distance, status, last updated

### Success metric
User reaches live discovery in under 10 seconds.

---

## 2. Explore / Live Map Screen

### Purpose
Core discovery engine.

### Primary user goals
- see nearby trucks visually
- filter quickly
- trust current activity
- compare options fast

### Layout
- desktop: map + side list
- mobile: map + draggable bottom sheet list

### Key UI elements
- map with pins
- truck cards
- filter bar
- sort dropdown
- location chip
- open now toggle
- cuisine filters
- distance filter
- event-only toggle

### Status vocabulary
- serving now
- arriving soon
- busy
- sold out
- closed early
- offline

### Trust elements
- updated X min ago
- last confirmed X min ago
- unconfirmed if stale

### Success metric
User identifies a promising truck within 15 to 30 seconds.

---

## 3. Truck Detail Screen

### Purpose
Decision screen.

### Primary user goals
- decide whether to go
- see where the truck is
- see menu and schedule
- determine trustworthiness
- follow truck

### Core sections
- hero image / branding
- status header
- current location block
- today's stop and hours
- mini map
- menu preview
- upcoming schedule
- follow action
- directions action
- social links

### Top header fields
- truck name
- cuisine type
- verified badge if applicable
- current status
- updated X min ago

### Functional behavior
- if not live, show next stop
- if live data is stale, say so clearly
- directions opens map app
- follow persists truck for retention

### Success metric
High-intent actions:
- get directions
- follow truck
- check next stop

---

## 4. Events Screen

### Purpose
Support future-oriented discovery.

### Primary user goals
- see what is happening today, tomorrow, and this weekend
- browse public food truck events
- plan ahead

### Core sections
- date selector
- filters
- event list
- featured events

### Event card fields
- event name
- venue
- date / time
- address
- truck count
- preview truck logos
- view event CTA

---

## 5. Event Detail Screen

### Purpose
Convert event interest into attendance.

### Core sections
- title and hero
- venue and date/time
- map
- participating trucks
- description
- directions
- share

### Functional behavior
- participating trucks link to truck profiles
- event status: upcoming, live, ended, canceled

---

## 6. Favorites / Following Screen

### Purpose
Retention and habit.

### Core sections
- live favorites
- upcoming from favorites
- full favorites list

### Functional behavior
- live favorites appear first
- no-favorites state encourages discovery

---

## 7. Customer Account Screen

### Purpose
Basic customer account management.

### Core sections
- profile
- saved preferences
- favorites
- notification preferences
- sign out

---

# PART 2: OWNER EXPERIENCE

## 8. Owner Dashboard

### Purpose
Operator command center.

### Primary owner goals
- know whether the truck is visible
- update status fast
- manage stops
- see business activity

### Core layout
- top summary strip
- live status module
- today's schedule
- quick actions
- booking preview
- analytics snapshot

### Key widgets
- current visibility
- current live status
- profile views today
- directions taps
- followers total
- pending booking requests

### Quick actions
- Go Live
- Go Offline
- Update Location
- Set Status
- Edit Menu
- Add Stop
- View Requests

---

## 9. Go Live / Live Status Panel

### Purpose
The most important operations screen.

### Primary owner goals
- become visible immediately
- set current location
- set public status
- publish in seconds

### Key UI elements
- status selector
- use current location
- manual address input
- venue name
- start/end time
- wait time estimate
- publish button
- public preview

### Functional behavior
- supports one-tap location
- manual override for inaccurate GPS
- status expires if not refreshed
- owner sees how freshness will appear publicly

### Success metric
Going live takes under 20 to 30 seconds.

---

## 10. My Truck Profile Screen

### Purpose
Manage static business identity.

### Sections
- basic info
- cuisine/category
- description
- contact details
- social links
- logo
- cover image
- service area

---

## 11. Menu Manager Screen

### Purpose
Manage food offering quickly.

### Core UI
- menu categories
- list of items
- add / edit item flow
- availability toggles
- featured toggles

### Fields per item
- name
- description
- price
- category
- image
- available/unavailable
- featured

### Functional behavior
- mark sold-out items fast
- preview public menu display

---

## 12. Schedule Manager Screen

### Purpose
Manage future stops and recurring presence.

### Core sections
- upcoming stop list / calendar
- add stop
- recurring templates
- draft vs published
- edit/delete stop

### Stop fields
- venue name
- address
- map selection
- start/end datetime
- notes
- public visibility
- recurring or one-time

### Functional behavior
- copy previous stop
- create recurring templates
- optionally convert live stop into future template

---

## 13. Booking Requests Inbox

### Purpose
Reduce event-booking chaos.

### Core sections
- tabs: pending, accepted, declined, completed
- request cards
- request detail

### Actions
- accept
- decline
- later: message
- mark completed

---

## 14. Owner Analytics Screen

### Purpose
Show value without clutter.

### Core metrics
- profile views
- map impressions
- directions taps
- favorites/follows
- menu views
- booking requests
- best-performing stops

### Important rule
Every metric should tie back to business value.

---

## 15. Owner Settings Screen

### Purpose
Account and preferences.

### Sections
- account info
- notification settings
- public visibility options
- billing later
- team access later

---

# PART 3: HOST / EVENT ORGANIZER EXPERIENCE

## 16. Host Booking Request Form

### Purpose
Allow venues and organizers to request a truck.

### Fields
- host name
- email
- phone
- company / venue
- address
- event date
- start/end time
- expected attendance
- budget range
- notes
- truck preference or open request

---

## 17. Host Dashboard / Requests Screen

### Purpose
Track submitted requests.

### MVP note
May be minimal or deferred if email-backed initially.

---

## 18. Host Event Detail Screen

### Purpose
View booked event info.

### Sections
- event summary
- assigned truck
- request status
- schedule details
- venue info

---

# PART 4: AUTH / SHARED SCREENS

## 19. Sign In Screen
- email/password or magic link
- role-aware redirect

## 20. Sign Up / Role Selection
Role choices:
- customer
- truck owner / manager
- host / organizer

## 21. Claim Your Truck Screen
- search truck
- select or create
- submit claim
- continue onboarding

## 22. Owner Onboarding Flow
1. add truck name and branding
2. choose cuisine
3. add menu basics
4. add first stop or recurring schedule
5. go live now or finish later

---

# PART 5: ADMIN / INTERNAL TOOLS

## 23. Admin Dashboard
- manage users
- verify trucks
- review claims
- moderate data issues
- feature content

## 24. Admin Truck Review Screen
- approve / reject claims
- verify trucks
- deactivate spam
- correct broken data

---

# PART 6: DESIGN RULES

## Customer-side UX principles
- map/list feels immediate
- status badges are highly legible
- live info is above the fold
- browsing feels efficient and energetic

## Owner-side UX principles
- repeated actions are minimal
- Go Live is a hero action
- dashboard feels operational, not decorative
- reduce typing
- recurring templates matter

## Trust design principles
- never fake certainty
- always show freshness
- degrade gracefully when data is stale
- make "unconfirmed" understandable

---

# PART 7: MVP SCREEN SET

## Must-build screens

### Customer
- Home
- Live Map
- Truck Detail

### Owner
- Sign In / Sign Up
- Owner Dashboard
- Go Live Panel
- Truck Profile
- Menu Manager
- Schedule Manager

### Shared
- Claim Truck
- Owner Onboarding
