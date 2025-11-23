import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        console.log('data ini');
        const res = await api.get("/product");
        setProducts(res.data.data);
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
        <div className="section-body">
            <div className="card">
                <div className="card-body px-0">
                    <div style={{ padding: 20 }}>
                        <h2>Product List</h2>
                        <Link className="btn btn-success mb-2" to="/products/create">+ Add Product</Link>
                        <div className="table-responsive">
                            <table width="100%" >
                                <thead className="tw-sticky tw-top-0">
                                    <tr className="tw-text-gray-700">
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
                                                <Link className="btn btn-warning mr-2" to={`/products/edit/${p.id}`}><i className="fas fa-edit"></i></Link> {" "}
                                                <button className="btn btn-danger" onClick={() => deleteProduct(p.id!)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
