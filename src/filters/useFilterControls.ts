import { useSearchParams } from "react-router-dom";
import { useProductFiltersFromUrl } from "./useProductFiltersFromUrl";

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
    const [searchParams, setSearchParams] = useSearchParams();
    const filters = useProductFiltersFromUrl();

    return {
        filters,

        setCategory: (category) => {
            const next = new URLSearchParams(searchParams);
            
            if (category === null) {
                next.delete("category");
                next.delete("subcategory");
            } else {
                next.set("category", category);
            }

            setSearchParams(next);
        },

        setSubcategory: (subcategory) => {
            const next = new URLSearchParams(searchParams);
            
            if (subcategory === null) {
                next.delete("subcategory");
            } else {
                next.set("subcategory", subcategory);
            }

            setSearchParams(next);
        },


        setInStock: (inStock) => {
            const next = new URLSearchParams(searchParams);

            if (inStock) {
                next.set("inStock", "true");
            } else {
                next.delete("inStock");
            }

            setSearchParams(next);
        },
        
        
        clearFilters: () => {
            setSearchParams({});
        },
    };
};

