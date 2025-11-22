import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        console.log('data ini');
        const res = await api.get("/product");
        setProducts(res.data.data); // sesuaikan format API
        console.log(products);

    };

    const deleteProduct = async (id: number) => {
        if (!confirm("Yakin hapus?")) return;
        await api.delete(`/product/${id}`);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Product List</h2>
            <Link to="/products/create">+ Add Product</Link>
            <table border={1} width="70%" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.sku}</td>
                            <td>{p.quantity}</td>
                            <td>Rp {p.price.toLocaleString()}</td>
                            <td>
                                <Link to={`/products/edit/${p.id}`}>Edit</Link> |{" "}
                                <button onClick={() => deleteProduct(p.id!)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
