export type CategoryId = "electronics" | "furniture";

export type SubcategoryId = 
    | "peripherals"
    | "computers"
    | "chairs"
    | "tables";

export type Product = {
    id: string;
    name: string;
    categoryId: CategoryId;
    subcategoryId: SubcategoryId;
    stock: number;
};