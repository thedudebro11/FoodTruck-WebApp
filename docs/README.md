# Food Truck Platform Build Packet

This packet is a complete Claude-ready documentation set for building a **mobile-responsive web platform for live food truck discovery, owner operations, and event/host booking**.

## What this product is

A **live discovery and operations platform for mobile food businesses** that helps:
- customers find food trucks confidently in real time
- truck owners manage visibility, menus, schedules, and bookings with very low friction
- event hosts request and coordinate trucks more reliably

A strong positioning line:
- **Find food trucks live. Run your truck smarter.**

## What is included

1. `01-product-overview.md`
2. `02-product-strategy-and-mental-model.md`
3. `03-screen-by-screen-product-spec.md`
4. `04-screen-wireframe-hierarchy.md`
5. `05-database-schema-sql.md`
6. `06-database-schema-drizzle.md`
7. `07-api-route-map-and-contract.md`
8. `08-architecture-and-system-design.md`
9. `09-mvp-execution-roadmap-by-sprint.md`
10. `10-brand-product-positioning.md`
11. `11-competitive-differentiation-memo.md`
12. `12-feature-hierarchy-and-priorities.md`
13. `13-user-flows.md`
14. `14-launch-and-growth-strategy.md`
15. `15-build-principles-and-nonfunctional-requirements.md`

## Core product idea

This is **not just a food truck website**.  
It is a **live marketplace and operating system for moving businesses**.

## Product surfaces

- Customer experience
- Truck owner dashboard
- Host / event booking flow
- Admin / moderation tools

## Core loop

1. Truck goes live
2. Customer discovers it
3. Customer shows up or follows
4. Truck sees value
5. Truck keeps updating
6. Data gets fresher
7. Platform trust increases
8. More users return

## Critical product truths

- **Data quality is the foundation**
- **Owner update friction must be extremely low**
- **Discovery must be fast**
- **Trust must be visible**
- **Static truck identity and dynamic live state must be separated**
- **The product must handle real-world chaos: late arrivals, early sellouts, cancellations, and changing stops**

## Recommended stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Mapbox or Google Maps
- Supabase (Auth, Postgres, Storage)
- Drizzle ORM
- Zod
- TanStack Query
- Resend for email
- Stripe later for paid plans

## Notes for Claude or another AI builder

Use these docs as the source of truth. Build in this order:
1. Product and strategy docs
2. Screen spec and wireframe hierarchy
3. Database schema
4. API contract
5. Architecture
6. Sprint roadmap

Maintain these core invariants:
- Separate static, semi-static, and dynamic data
- Expire stale live statuses
- Never present stale data as certain
- Keep owner actions minimal
- Optimize for one-city density before broad expansion
