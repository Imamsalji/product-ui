import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import type { Product } from "../types/Product";

export default function ProductForm() {
    const [form, setForm] = useState<Product>({
        name: "",
        sku: "",
        quantity: 0,
        price: 0,
    });
    const [errors, setErrors] = useState({
        name: "",
        sku: "",
        quantity: "",
        price: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const getDetail = async () => {
        const res = await api.get(`/product/${id}`);
        setForm(res.data.data);
    };

    const validate = () => {
        let newErrors: any = {};

        // Name
        if (!form.name.trim()) {
            newErrors.name = "Name wajib diisi";
        }

        // SKU
        if (!form.sku.trim()) {
            newErrors.sku = "SKU wajib diisi";
        } else if (form.sku.length < 3) {
            newErrors.sku = "SKU minimal 3 karakter";
        }

        // Quantity
        if (form.quantity === null || form.quantity === undefined) {
            newErrors.quantity = "Quantity wajib diisi";
        } else if (form.quantity <= 0) {
            newErrors.quantity = "Quantity harus lebih dari 0";
        }

        // Price
        if (form.price === null || form.price === undefined) {
            newErrors.price = "Price wajib diisi";
        } else if (form.price <= 0) {
            newErrors.price = "Price harus lebih dari 0";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            if (id) {
                await api.put(`/product/${id}`, form);
            } else {
                await api.post("/product", form);
            }
            navigate("/products");

        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        if (id) getDetail();
    }, []);

    return (
        <div className="section-body">
            <div className="card">
                <div className="card-body px-0">
                    <div style={{ padding: 20 }}>
                        <h2>{id ? "Edit" : "Create"} Product</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}<br /><br />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="SKU"
                                value={form.sku}
                                onChange={(e) => setForm({ ...form, sku: e.target.value })}
                            />{errors.sku && <p className="text-red-500 text-sm">{errors.sku}</p>}<br /><br />

                            <input
                                className="form-control"
                                type="number"
                                placeholder="Quantity"
                                value={form.quantity}
                                onChange={(e) =>
                                    setForm({ ...form, quantity: Number(e.target.value) })
                                }
                            />{errors.quantity && (
                                <p className="text-red-500 text-sm">{errors.quantity}</p>
                            )}<br /><br />

                            <input
                                className="form-control"
                                type="number"
                                placeholder="Price"
                                value={form.price}
                                onChange={(e) =>
                                    setForm({ ...form, price: Number(e.target.value) })
                                }
                            />{errors.price && (
                                <p className="text-danger-500 text-sm">{errors.price}</p>
                            )}<br /><br />

                            <button className="btn btn-success mb-2" type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
