import type { CategoryId, SubcategoryId } from "../domain/product";

export type ProductFilters = {
    category?: CategoryId;
    subcategory?: SubcategoryId;
    inStock?: boolean;
};

export type RawProductFilters = {
    category?: string;
    subcategory?: string;
    inStock?: string;
}

export type ParsedProductFilters = ProductFilters;