import type { ParsedProductFilters } from "./product-filters";

export const describeActiveFilters = (
    filters: ParsedProductFilters
): string | null => {
    const parts: string[] = [];

    if (filters.category) {
        parts.push(`Category: ${filters.category}`);
    }

    if (filters.subcategory) {
        parts.push(`Subcategory: ${filters.subcategory}`);
    }

    if (filters.inStock) {
        parts.push("In stock only");
    }

    if (parts.length === 0) {
        return null;
    }

    return `Showing results for: ${parts.join(",")}`;
};