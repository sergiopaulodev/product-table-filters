import { productsMock } from "../domain/products.mock";
import { useProductFiltersFromUrl } from "../filters/useProductFiltersFromUrl";
import { applyProductFilters } from "../filters/applyProductFilters";
import { ProductList } from "../components/ProductList";
import { EmptyState } from "../components/EmptyState";
import { ActiveFiltersSummary } from "../components/ActiveFiltersSummary";
import { FiltersPanel } from "../ui/FiltersPanel";

const App = () => {
    const filters = useProductFiltersFromUrl();

    const filteredProducts =  applyProductFilters(
        productsMock,
        filters
    );

    return (
        <div>
            <h1>Product</h1>

            <FiltersPanel/>

            <ActiveFiltersSummary filters={filters} />


            {filteredProducts.length === 0 ? (
                <EmptyState message="No products match the selected filters." />

            ) : (
                <ProductList products={filteredProducts} />
            )}

        </div>
    );
};

export default App