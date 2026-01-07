import type { ParsedProductFilters } from "../filters/product-filters";
import { describeActiveFilters } from "../filters/describeActiveFilters";

type ActiveFiltersSummaryProps = {
    filters: ParsedProductFilters;
};

export const ActiveFiltersSummary = ({ filters }: ActiveFiltersSummaryProps) => {
    const description = describeActiveFilters(filters);

    if (!description) {
        return null;
    }

    return <p>{description}</p>;
};