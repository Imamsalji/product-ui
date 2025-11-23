import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Product } from "../types/Product";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const res = await api.get("/getData");
        setProducts(res.data.data);
        console.log(products);

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="section-body">
            <div className="card">
                <div className="card-body px-0">
                    <div style={{ padding: 20 }}>
                        <h2>Dashboard</h2>
                        <div className="table-responsive">
                            <table className="table" >
                                <thead className="tw-sticky tw-top-0">
                                    <tr className="tw-text-gray-700">
                                        <th>Name</th>
                                        <th>SKU</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.name}</td>
                                            <td>{p.sku}</td>
                                            <td>{p.quantity}</td>
                                            <td>Rp {p.price.toLocaleString()}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
