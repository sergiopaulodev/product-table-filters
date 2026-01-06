import type { Category, Subcategory } from "../domain/product";

export type ProductFilters = {
    category?: Category;
    subcategory?: Subcategory;
    inStock?: boolean;
};

export type RawProductFilters = {
    category?: string;
    subcategory?: string;
    inStock?: string;
}

export type ParsedProductFilters = ProductFilters;