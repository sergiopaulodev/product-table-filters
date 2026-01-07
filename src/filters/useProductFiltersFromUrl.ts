import { useSearchParams } from 'react-router-dom';
import type { ParsedProductFilters, RawProductFilters } from './product-filters';
import type { CategoryId, SubcategoryId } from "../domain/product";

const isValidCategory = (value: string): value is CategoryId => {
    return value === "electronics" || value === "furniture";
};

const isValidSubcategory = (
    value: string,
    category: CategoryId
): value is SubcategoryId => {
    const map: Record<CategoryId, SubcategoryId[]> = {
        electronics: ["peripherals", "computers"],
        furniture: ["chairs", "tables"],
    };

    return map[category].includes(value as SubcategoryId);
}

const parseRawFilters = (
    raw: RawProductFilters
): ParsedProductFilters => {
    const result: ParsedProductFilters = {};

    if (raw.category && isValidCategory(raw.category)) {
        result.category = raw.category;
    }

    if (
        raw.subcategory && 
        result.category &&
        isValidSubcategory(raw.subcategory, result.category)
    ) {
        result.subcategory = raw.subcategory;
    }

    if (raw.inStock === "true") {
        result.inStock = true;
    }

    return result;
};

export const useProductFiltersFromUrl = (): ParsedProductFilters => {
    const [searchParams] = useSearchParams();

    const rawFilters : RawProductFilters = {
        category: searchParams.get("category") ?? undefined,
        subcategory: searchParams.get("subcategory") ?? undefined,
        inStock: searchParams.get("inStock") ?? undefined,
    };

    return parseRawFilters(rawFilters);
};

