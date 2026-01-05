# Product Table with Dependent Filters

## Objective
Technical exercise focused on state derivation, URL synchronization, and filter dependency management.

## Scope (Frozen)
- Product table with dependent filters
- Category → Subcategory → Stock
- URL as the single source of truth
- Bidirectional sync: UI ↔ URL

## Out of Scope
- Backend
- Authentication
- CRUD
- Pagination
- Automated testing
- Advanced UI / design

## Architectural Decisions
- React + TypeScript
- React Router for URL-driven state
- No localStorage
- Filtering strictly on frontend
