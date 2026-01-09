import type { ParsedProductFilters } from "./product-filters";

/**
 * Public contract for filter controls.
 *
 * Responsibilities:
 * - expose current filters
 * - expose URL-backed setters
 *
 * Source of truth:
 * - URL search params
 *
 * UI-agnostic hook.
 */


export type FilterControls = {
    filters: ParsedProductFilters;

    setCategory: (category: string | null) => void;
    setSubcategory: (subcategory: string | null) => void;
    setInStock: (inStock: boolean) => void;

    clearFilters: () => void;
};

export const useFilterControls = (): FilterControls => {
    throw new Error("useFilterControls not implement yet");
}