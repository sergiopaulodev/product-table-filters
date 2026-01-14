# Naming and Semantic Conventions

This document defines the semantic meaning of key terms used throughout the project.
These conventions are part of the system contract.

---

## Control

**control**
- A UI-level interaction mechanism.
- Emits user intent.
- Does not contain logic or validation.

Examples:
- CategoryFilter
- SubcategoryFilter
- StockFilter

---

## Filter

**filter**
- A logical criterion applied to the product dataset.
- Can be hierarchical or independent.

Examples:
- category
- subcategory
- inStock

---

## State

**state**
- A derived, validated representation of the system.
- Never raw input.

Examples:
- ParsedProductFilters

---

## Raw

**raw**
- External, untrusted input.
- May be incomplete or invalid.

Examples:
- URL search parameters

---

## Parsed

**parsed**
- Authorized, validated state.
- Safe for consumption by UI and domain.

Examples:
- ParsedProductFilters

---

## Naming Discipline

- Naming must reflect responsibility, not implementation detail.
- Cross-layer ambiguity is not allowed.
- If a name becomes misleading, refactoring is required.

These conventions are mandatory for future changes.
