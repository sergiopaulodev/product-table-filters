import type { FilterControls } from "../filters/useFilterControls";

type StockFilterProps = {
    controls: FilterControls;
};

export const StockFilter = ({ controls }: StockFilterProps) => {
    const { filters, setInStock } = controls;

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    />
                    In stock only
            </label>
        </div>
    );
};