# Route Map / API Contract

This document defines the initial route map and API behavior for the MVP. The goal is a clean, type-safe contract that can be implemented with Next.js route handlers, a Node API, or tRPC.

## API design principles

- Keep public discovery read-optimized
- Keep owner actions mutation-focused and low friction
- Enforce role-based authorization on the server
- Never rely on frontend-only permission checks
- Separate static truck profile actions from dynamic live-status actions
- Always expose freshness signals for live data
- Use consistent response envelopes for errors

## Recommended response envelope

### Success
```json
{
  "ok": true,
  "data": {}
}
```

### Error
```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid payload"
  }
}
```

---

# 1. PUBLIC / CUSTOMER ROUTES

## GET /api/trucks/live/nearby

### Purpose
Return nearby trucks currently live or recently active.

### Query params
- `lat` number required
- `lng` number required
- `radiusMiles` number optional
- `cuisine` string optional
- `openNow` boolean optional
- `status` string optional
- `favoritesOnly` boolean optional for authenticated users
- `viewport` optional later
- `limit` optional

### Response
```json
{
  "ok": true,
  "data": {
    "trucks": [
      {
        "id": "uuid",
        "slug": "taco-beast",
        "name": "Taco Beast",
        "primaryCuisine": "Tacos",
        "profileImageUrl": "https://...",
        "distanceMiles": 1.8,
        "liveStatus": {
          "status": "serving_now",
          "openNow": true,
          "locationName": "Copper Plaza",
          "latitude": 32.22,
          "longitude": -110.97,
          "startTime": "2026-04-01T18:00:00Z",
          "endTime": "2026-04-01T22:00:00Z",
          "lastUpdatedAt": "2026-04-01T19:12:00Z",
          "staleState": "fresh",
          "isConfirmed": true
        }
      }
    ]
  }
}
```

### Notes
- Expired statuses should not appear as confidently live.
- Aging or stale statuses should be visibly downgraded.

---

## GET /api/trucks/:slug

### Purpose
Return the public truck detail view.

### Response shape
- static truck profile
- current live status if available
- today's stop
- menu preview
- upcoming public stops
- aggregate social proof later

### Response
```json
{
  "ok": true,
  "data": {
    "truck": {
      "id": "uuid",
      "slug": "taco-beast",
      "name": "Taco Beast",
      "description": "Sonoran tacos and grilled specials",
      "primaryCuisine": "Tacos",
      "cuisines": ["Tacos", "Mexican"],
      "profileImageUrl": "https://...",
      "coverImageUrl": "https://...",
      "isVerified": true,
      "instagramUrl": "https://instagram.com/...",
      "websiteUrl": null
    },
    "liveStatus": {
      "status": "serving_now",
      "locationName": "Copper Plaza",
      "addressLine1": "123 Main St",
      "city": "Tucson",
      "state": "AZ",
      "latitude": 32.22,
      "longitude": -110.97,
      "lastUpdatedAt": "2026-04-01T19:12:00Z",
      "staleState": "fresh",
      "isConfirmed": true
    },
    "menu": {
      "name": "Main Menu",
      "items": []
    },
    "upcomingStops": []
  }
}
```

---

## GET /api/events

### Query params
- `date`
- `city`
- `state`
- `visibility`
- `status`

### Purpose
List public events.

---

## GET /api/events/:id

### Purpose
Return event detail including participating trucks.

---

## POST /api/trucks/:id/follow

### Auth
Customer required.

### Purpose
Follow a truck.

### Response
```json
{
  "ok": true,
  "data": {
    "followed": true
  }
}
```

---

## DELETE /api/trucks/:id/follow

### Purpose
Unfollow a truck.

---

# 2. AUTH ROUTES

## POST /api/auth/sign-up
- email
- password or magic-link email
- role

## POST /api/auth/sign-in
- email
- password or magic-link token

## POST /api/auth/sign-out

## GET /api/me
Returns current authenticated user and role context.

---

# 3. OWNER ROUTES

## POST /api/owner/trucks

### Purpose
Create a new truck profile.

### Payload
```json
{
  "name": "Taco Beast",
  "primaryCuisine": "Tacos",
  "city": "Tucson",
  "state": "AZ"
}
```

---

## PATCH /api/owner/trucks/:id

### Purpose
Update static truck profile.

### Editable fields
- name
- description
- cuisines
- phone
- email
- websiteUrl
- instagramUrl
- profileImageUrl
- coverImageUrl
- city
- state

---

## POST /api/owner/trucks/:id/claim

### Purpose
Submit a claim request for an existing truck listing.

---

## POST /api/owner/trucks/:id/go-live

### Purpose
Set current live status.

### Payload
```json
{
  "status": "serving_now",
  "openNow": true,
  "locationName": "Copper Plaza",
  "addressLine1": "123 Main St",
  "city": "Tucson",
  "state": "AZ",
  "postalCode": "85701",
  "latitude": 32.22,
  "longitude": -110.97,
  "startTime": "2026-04-01T18:00:00Z",
  "endTime": "2026-04-01T22:00:00Z",
  "waitTimeMinutes": 10
}
```

### Server behavior
- upsert `truck_live_status`
- insert `truck_status_history`
- compute `expires_at`
- set `stale_state = fresh`

---

## POST /api/owner/trucks/:id/go-offline

### Purpose
Explicitly set truck offline.

### Server behavior
- update current row in `truck_live_status`
- insert status history row

---

## PATCH /api/owner/trucks/:id/live-status

### Purpose
Partial live status update.
Useful for:
- busy
- sold out
- closed early
- wait time
- updated location

---

## GET /api/owner/trucks/:id/dashboard

### Purpose
Return owner dashboard summary.

### Includes
- truck visibility state
- current live state
- today's stop
- pending requests count
- selected KPI snapshot

---

## GET /api/owner/trucks/:id/menu
## POST /api/owner/trucks/:id/menu
## PATCH /api/owner/menu-items/:itemId
## DELETE /api/owner/menu-items/:itemId

### Purpose
Manage menus and items.

---

## GET /api/owner/trucks/:id/schedules
## POST /api/owner/trucks/:id/schedules
## PATCH /api/owner/schedules/:scheduleId
## DELETE /api/owner/schedules/:scheduleId

### Purpose
Manage future stops.

### Example create payload
```json
{
  "venueName": "Copper Plaza",
  "addressLine1": "123 Main St",
  "city": "Tucson",
  "state": "AZ",
  "postalCode": "85701",
  "latitude": 32.22,
  "longitude": -110.97,
  "startTime": "2026-04-04T18:00:00Z",
  "endTime": "2026-04-04T22:00:00Z",
  "isPublic": true,
  "notes": "Friday music night"
}
```

---

## GET /api/owner/trucks/:id/booking-requests
## PATCH /api/owner/booking-requests/:id

### Purpose
View and respond to booking requests.

### Patch payload example
```json
{
  "requestStatus": "accepted"
}
```

---

## GET /api/owner/trucks/:id/analytics

### Query params
- `range=today|7d|30d|custom`

### Purpose
Return owner metrics.

---

# 4. HOST ROUTES

## POST /api/booking-requests

### Purpose
Submit a booking request to a truck.

### Payload
```json
{
  "foodTruckId": "uuid",
  "venueName": "Rincon Taproom",
  "addressLine1": "456 Elm St",
  "city": "Tucson",
  "state": "AZ",
  "postalCode": "85716",
  "requestedStartTime": "2026-04-10T17:00:00Z",
  "requestedEndTime": "2026-04-10T21:00:00Z",
  "budgetMinCents": 30000,
  "budgetMaxCents": 80000,
  "expectedAttendance": 150,
  "notes": "Looking for one truck for a Friday community event"
}
```

---

## GET /api/host/booking-requests

### Purpose
Host views their submitted requests.

---

## POST /api/host/events
## GET /api/host/events
## GET /api/host/events/:id

### Purpose
Create and manage host-side events if enabled in MVP+.

---

# 5. ADMIN ROUTES

## GET /api/admin/truck-claims
## PATCH /api/admin/truck-claims/:id
## PATCH /api/admin/trucks/:id/verify
## PATCH /api/admin/trucks/:id/deactivate

### Purpose
Moderation, verification, and claim review.

---

# 6. ANALYTICS EVENT ENDPOINT

## POST /api/analytics/events

### Purpose
Capture frontend analytics events.

### Event types
- truck_profile_view
- directions_clicked
- truck_followed
- menu_viewed
- map_impression
- booking_request_created

---

# 7. BACKGROUND JOB CONTRACTS

These may not be public endpoints, but they are part of the system contract.

## Live status expiration job
- evaluate `truck_live_status`
- compute freshness
- expire old rows from confident discovery

## Follow notification job
- detect trucks going live
- notify followers based on preference

## Daily metrics aggregation
- roll up analytics into `daily_truck_metrics`

---

# 8. AUTHORIZATION RULES

## Customers can
- browse public data
- follow and unfollow trucks
- manage their own preferences

## Owners can
- mutate only their own trucks
- manage only their own menus, schedules, analytics, and bookings

## Hosts can
- create and manage only their own booking requests and events

## Admins can
- moderate everything

---

# 9. VALIDATION NOTES

All mutation inputs should be validated with Zod or an equivalent schema layer.

Critical validations:
- valid coordinates
- end time after start time
- price fields in cents and non-negative
- role-based ownership checks
- no impossible freshness states
