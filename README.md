# Product Table with Dependent Filters

A small React + TypeScript frontend exercise focused on URL-driven state derivation
and dependent filter management.

The project emphasizes correct state modeling, explicit invariants, and a clean
separation between domain logic, filter orchestration, and UI composition.

---

## Objective

Demonstrate how to design a frontend system where:

- the URL is the single source of truth
- filter state is derived and validated, not stored
- dependent filters enforce invariants without breaking the UI
- invalid external state is safely contained

---

## Scope

- Product table with frontend-only filtering
- Dependent filters:
  - Category → Subcategory
  - Stock availability (independent)
- Bidirectional synchronization between UI and URL
- Deterministic, side-effect-free filtering logic

---

## Non-goals

- Backend or persistence
- Authentication or authorization
- CRUD operations
- Pagination or sorting
- Automated testing
- Visual or design polish

---

## Architectural overview

The project is structured around explicit layers, each with a single responsibility:

### Domain
Pure models and identifiers. No knowledge of UI, routing, or URL state.

### Filters
Orchestration layer responsible for:
- deriving filter state from the URL
- validating invariants
- applying deterministic filtering logic

### UI / Components
Declarative UI that consumes validated state and exposed control contracts.  
UI never interprets URL parameters directly.

### Infrastructure
Application wiring and routing.

The URL acts as the single source of truth for filter state across the system.

---

## Key design decisions

- Filter state is derived, not stored.
- Invalid external state:
  - is ignored
  - does not propagate
  - does not break the system
- Filter dependencies are enforced centrally, not in UI components.
- UI composition is separated from filter orchestration.
- All architectural rules are documented explicitly.

---

## Project structure

src/
├── app/ # Application entry point
├── domain/ # Pure domain models and identifiers
├── filters/ # URL-driven state derivation and filtering logic
├── components/ # UI controls and pure UI components
├── ui/ # UI composition and layout
└── infrastructure/ # Wiring and routing


---

## How to run

```bash
npm install
npm run dev


```

Further documentation

Detailed architectural decisions, invariants, and conventions are documented in:

/docs
├── architecture.md
├── system-invariants.md
└── conventions.md

These documents define the authoritative contracts of the system.