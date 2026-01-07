import { productsMock } from "../domain/products.mock";
import { useProductFiltersFromUrl } from "../filters/useProductFiltersFromUrl";
import { applyProductFilters } from "../filters/applyProductFilters";
import { ProductList } from "../components/ProductList";



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
                <p>No products match the selected filters.</p>

            ) : (
                <ProductList products={filteredProducts} />
            )}

        </div>
    );
};

export default App