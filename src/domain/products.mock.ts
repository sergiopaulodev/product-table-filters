import type { Product } from "./product";

export const productsMock: Product[] = [
  {
    id: "p1",
    name: "Mechanical Keyboard",
    categoryId: "electronics",
    subcategoryId: "peripherals",
    stock: 10,
  },
  {
    id: "p2",
    name: "Office Chair",
    categoryId: "furniture",
    subcategoryId: "chairs",
    stock: 0,
  },
];
