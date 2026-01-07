import { productsMock } from "../domain/products.mock";
import { useProductFiltersFromUrl } from "../filters/useProductFiltersFromUrl";
import { applyProductFilters } from "../filters/applyProductFilters";
import { ProductList } from "../components/ProductList";
import { EmptyState } from "../components/EmptyState";

const App = () => {
    const filters = useProductFiltersFromUrl();

    const filteredProducts =  applyProductFilters(
        productsMock,
        filters
    );

    return (
        <div>
            <h1>Product</h1>

            {filteredProducts.length === 0 ? (
                <EmptyState message="No products match the selected filters." />

            ) : (
                <ProductList products={filteredProducts} />
            )}

        </div>
    );
};

export default App