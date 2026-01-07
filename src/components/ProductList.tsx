import type { Product } from "../domain/product";

type ProductListProps = {
    products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))}
        </ul>
    );
};