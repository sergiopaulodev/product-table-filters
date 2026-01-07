import type { Product } from "../domain/product";

type ProductListProps = {
    products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Subcategory</th>
                    <th>Stock</th>
                </tr>
            </thead>

            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td> 
                        <td>{product.categoryId}</td> 
                        <td>{product.subcategoryId}</td> 
                        <td>{product.stock}</td> 
                    </tr>
                ))}
            </tbody>
            
        </table>
    );
};