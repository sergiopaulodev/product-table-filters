import type { Product } from "../domain/product";
import type { ParsedProductFilters } from "./product-filters";

export const applyProductFilters = (
    products: Product[],
    filters: ParsedProductFilters
): Product[] => {
    let result = products;

    if(filters.category) {
        result = result.filter(
            (product) => product.categoryId === filters.category
        );
    }

    if (filters.subcategory) {
        result = result.filter(
            (product) => product.subcategoryId === filters.subcategory
        );
    }

    if (filters.inStock) {
        result = result.filter(
            (product) => product.stock > 0
        );
    }

    return result;

};