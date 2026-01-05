export type Category = "electronics" | "furniture";

export type Subcategory = 
    | "peripherals"
    | "computers"
    | "chairs"
    | "tables";

export type Product = {
    id: string
    name: string
    category: Category
    subcategory: Subcategory
    inStock: boolean
};