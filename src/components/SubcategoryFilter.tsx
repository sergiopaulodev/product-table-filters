import type { SubcategoryId } from "../domain/product";
import type { FilterControls } from "../filters/useFilterControls";

type SubcategoryFilterProps = {
    controls: FilterControls;
};

const SUBCATEGORY_BY_CATEGORY: Record<string, { id: SubcategoryId; label: string } []> = {
     electronics: [
        { id: "peripherals", label: "peripherals" },
        { id: "computers", label: "computers" },
    ],
    furniture: [
        { id: "chairs", label: "Chairs" },
        { id: "tables", label: "Tables" },
    ],
};

export const SubcategoryFilter = ({ controls }: SubcategoryFilterProps) => {
    const { filters, setSubcategory } = controls;

    const category = filters.category;
    const subcategories = category ? SUBCATEGORY_BY_CATEGORY[category] ?? [] : [];

    return (
        <div>
            <label>
                Subcategory:
                <select
                    value={filters.subcategory ?? ""}
                    disabled={!category}
                    onChange={(e) =>
                        setSubcategory(
                            e.target.value === "" ? null : (e.target.value as SubcategoryId)
                        )
                     }
                     >
                        <option value="">All</option>
                        {subcategories.map((subcategory) => (
                            <option key={subcategory.id} value={subcategory.id}>
                                {subcategory.label}
                            </option>

                        ))}

                     </select>
            </label>
        </div>
    );
};