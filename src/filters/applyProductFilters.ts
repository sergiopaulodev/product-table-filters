import type { Product } from "../domain/product";
import type { ParsedProductFilters } from "./product-filters";

export const applyProductFilters = (
    products: Product[],
    filters: ParsedProductFilters
): Product[] => {
    if(!filters.category) {
        return products;
    }

    return products.filter(
        (product) => product.categoryId === filters.category
    );

};