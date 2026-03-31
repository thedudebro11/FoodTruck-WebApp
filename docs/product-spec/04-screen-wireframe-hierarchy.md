# Screen Wireframe Hierarchy

This document outlines the information architecture and rough block hierarchy for each major screen. It is intended as a low-fidelity wireframe blueprint.

## Global navigation

### Public nav
- Logo
- Explore
- Events
- For Owners
- Sign In

### Authenticated customer nav
- Home
- Explore
- Events
- Favorites
- Account

### Authenticated owner nav
- Dashboard
- My Truck
- Menu
- Schedule
- Bookings
- Analytics
- Settings

---

## 1. Home / Landing

### Desktop wireframe
1. Top nav
2. Hero block
   - headline
   - supporting subtext
   - location input
   - use my location CTA
   - open live map CTA
3. Live nearby preview
   - section header
   - 3 to 6 truck cards
4. Upcoming events preview
   - section header
   - event cards
5. How it works
   - customer / owner / host explanation
6. Owner CTA strip
7. Host CTA strip
8. Footer

### Mobile wireframe
1. Compact top nav / hamburger
2. Hero
3. Location input + CTA
4. Nearby trucks horizontal list
5. Upcoming events list
6. Owner CTA
7. Footer

---

## 2. Explore / Live Map

### Desktop
1. Header / filter row
2. Left column: list results
   - result card
   - result card
   - result card
3. Right column: interactive map
4. Result interaction:
   - hover result -> highlight pin
   - click pin -> preview card

### Mobile
1. Sticky filter bar
2. Full-width map
3. Bottom sheet
   - drag handle
   - result summary
   - result cards
4. Floating location button
5. Optional map/list mode toggle

### Result card hierarchy
- image/logo
- name
- cuisine
- live status badge
- distance
- venue/location name
- time window
- freshness text

---

## 3. Truck Detail

### Hierarchy
1. Hero image / header
2. Identity strip
   - truck name
   - cuisine
   - verified badge
   - follow button
3. Live info card
   - status
   - updated timestamp
   - location name
   - address
   - directions CTA
4. Mini map
5. Menu preview
6. Upcoming stops
7. Social / contact links
8. Related trucks or events later

### Mobile priority order
- status
- directions
- current stop
- menu preview
- upcoming stops

---

## 4. Events List

### Hierarchy
1. Date filter tabs
2. Search / location filters
3. Event cards
   - title
   - venue
   - date/time
   - truck count
   - CTA

---

## 5. Event Detail

### Hierarchy
1. Event header
2. Date/time/location summary
3. Directions CTA
4. Participating truck list
5. Description
6. Map

---

## 6. Favorites

### Hierarchy
1. Live now section
2. Upcoming from favorites
3. All favorites list

---

## 7. Owner Dashboard

### Hierarchy
1. Header
2. Visibility / live-status hero card
3. Quick actions row
4. Today's schedule card
5. Metrics snapshot
6. Pending bookings preview
7. Recent activity later

### Quick action order
1. Go Live
2. Go Offline
3. Update Location
4. Edit Menu
5. Add Stop
6. View Requests

---

## 8. Go Live Panel

### Hierarchy
1. Header and short instruction
2. Status selector
3. Current location CTA
4. Manual location fields
5. Venue name
6. Time fields
7. Wait time optional
8. Public preview
9. Publish CTA

### Mobile requirement
This screen must feel like a fast check-in, not a long form.

---

## 9. Truck Profile Manager

### Hierarchy
1. Header
2. Branding block
   - logo
   - cover
3. Basic info
4. Cuisine tags
5. Description
6. Contact details
7. Social links
8. Save / preview

---

## 10. Menu Manager

### Hierarchy
1. Header
2. Menu category tabs
3. Item list
4. Add item CTA
5. Item editor modal / inline panel

### Item card hierarchy
- name
- price
- availability
- featured toggle
- edit
- delete

---

## 11. Schedule Manager

### Hierarchy
1. Header
2. View toggle: list / calendar
3. Upcoming stops
4. Add stop CTA
5. Templates section
6. Stop editor

### Stop card
- venue
- date
- time
- visibility
- edit
- delete
- copy

---

## 12. Booking Inbox

### Hierarchy
1. Status tabs
2. Request list
3. Request detail panel
4. Accept / decline controls

---

## 13. Analytics

### Hierarchy
1. Date range filter
2. KPI cards
3. Trend chart
4. Best-performing stops
5. Conversion actions summary

---

## 14. Host Request Form

### Hierarchy
1. Intro
2. Contact information
3. Event details
4. Budget / attendance
5. Notes
6. Submit CTA
7. Confirmation state

---

## 15. Claim Truck

### Hierarchy
1. Search truck
2. Results list
3. Claim CTA per result
4. Create new truck CTA
5. Claim verification notice

---

## 16. Owner Onboarding

### Step hierarchy
1. Role confirmation
2. Truck basics
3. Branding
4. Cuisine
5. Menu basics
6. First stop
7. Go live now or later
