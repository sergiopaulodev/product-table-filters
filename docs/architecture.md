# Architecture

This document defines the **authorized architecture** of the system.
It describes layers, allowed dependencies, and explicitly assigned responsibilities.

Anything not defined here is considered **out of scope or not allowed**.

---

## Architectural Layers

The system is structured into the following layers:

### 1. Domain
- Pure domain models and types.
- No dependencies on React, routing, URL, or UI concerns.

Examples:
- Product model
- CategoryId, SubcategoryId

**Rules**
- Must not import from any other layer.

---

### 2. Filter State (Orchestration Layer)
- Responsible for deriving valid filter state from the URL.
- Applies dependency rules and normalization.
- Acts as a boundary between raw external input and the domain/UI.

Examples:
- URL parsing
- Filter normalization
- Dependency enforcement (category → subcategory)

**Rules**
- May import from `domain`.
- Must not contain UI logic.

---

### 3. UI
- Pure presentation components.
- Reflects derived state.
- Emits user intentions through control setters.

Examples:
- CategoryFilter
- SubcategoryFilter
- StockFilter

**Rules**
- Must not interpret URL parameters directly.
- Must not contain business rules or validation logic.

---

### 4. Infrastructure
- Application wiring and external integrations.
- Routing, mock data, application shell.

Examples:
- Router configuration
- Mock product dataset

---

## Dependency Rules (Hard Constraints)

The following dependencies are explicitly allowed:

- `domain` → imports nothing
- `filters` → may import `domain`
- `ui` → may import `filters`
- `infrastructure` → may import `ui`, `filters`, `domain`

The following are **explicitly forbidden**:

- `ui` importing or parsing URL parameters
- `domain` depending on any external layer
- Cross-layer shortcuts bypassing filter orchestration

These rules are enforced by convention and must be preserved by design.

---

## Transversal Responsibilities

### Filter Controls

`useFilterControls` is a **transversal orchestration component**.

Authorized responsibilities:
- Expose the current derived filter state.
- Expose URL-backed setters for UI interaction.
- Apply dependency cleanup rules.

Explicitly not responsible for:
- Rendering UI
- Domain validation logic
- Business decisions beyond filter consistency

---

### Filters Layer

The `filters/` layer is formally defined as:

> A state derivation and orchestration layer, not a pure domain and not UI.

It exists to ensure that:
- The domain never receives invalid state.
- The UI remains declarative and passive.

---

## Architectural Stability

Any change that violates this structure requires:
- Explicit documentation
- A dedicated refactor
- Revalidation of system invariants
