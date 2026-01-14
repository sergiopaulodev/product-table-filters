import type { CategoryId } from "../domain/product";
import type { FilterControls } from "../filters/useFilterControls";

type CategoryFilterProps = {
    controls: FilterControls;
};

export const CategoryFilter = ({ controls }: CategoryFilterProps) => {
    const { filters, setCategory } = controls;

    return(
        <div>
            <label>
                Category:
                <select
                    value={filters.category ?? ""}
                    onChange={(e) =>
                        setCategory(
                            e.target.value === "" ? null : (e.target.value as CategoryId)
                        )
                    }
                >
                    <option value="">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                </select>
            </label>
        </div>

    );
}