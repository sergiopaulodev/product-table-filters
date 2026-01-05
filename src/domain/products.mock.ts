import type { Product } from "./product";

export const productsMock: Product[] = [
  {
    id: "p1",
    name: "Mechanical Keyboard",
    category: "electronics",
    subcategory: "peripherals",
    inStock: true,
  },
  {
    id: "p2",
    name: "Office Chair",
    category: "furniture",
    subcategory: "chairs",
    inStock: false,
  },
];
