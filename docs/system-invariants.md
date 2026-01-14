# System Invariants

This document defines the **global invariants** of the system.
Any violation of these rules results in an inconsistent system state.

These invariants are **authoritative**.

---

## Source of Truth

- The URL is the **single source of truth** for filter state.
- UI state is always derived.
- No local persistence is used.

---

## Filter Hierarchy Invariants

1. A subcategory must never exist without a category.
2. A subcategory that does not belong to the selected category is considered invalid.
3. The `inStock` filter is independent and non-hierarchical.

---

## Invalid State Policy

The system follows a **fail-silent and ignore** strategy:

- Invalid URL states are ignored.
- Invalid state is not propagated to the domain.
- The system does not throw errors.
- The system does not auto-correct the URL.
- The system continues operating with the closest valid derived state.

This behavior is intentional and part of the system contract.

---

## Domain Safety

- The domain layer never receives invalid filter state.
- All validation and normalization occurs before domain interaction.
- The domain assumes all inputs are valid by construction.

---

## Explicit Non-Goals

The system does not:
- Persist filter state outside the URL.
- Perform automatic URL normalization.
- Provide error feedback for invalid filter combinations.
- Handle authentication, backend state, or side effects.

Any feature introducing these behaviors requires revisiting this document.
