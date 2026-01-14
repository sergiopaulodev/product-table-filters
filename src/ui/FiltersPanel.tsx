import { useFilterControls } from "../filters/useFilterControls";
import { CategoryFilter } from "../components/CategoryFilter";
import { SubcategoryFilter } from "../components/SubcategoryFilter";
import { StockFilter } from "../components/StockFilter";

export const FiltersPanel = () => {
    const controls = useFilterControls();

    return (
        <section>
            <CategoryFilter controls={controls} />
            <SubcategoryFilter controls={controls} />
            <StockFilter controls={controls} />
        </section>
    )
}