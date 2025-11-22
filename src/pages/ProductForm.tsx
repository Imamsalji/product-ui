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

    const navigate = useNavigate();
    const { id } = useParams();

    const getDetail = async () => {
        const res = await api.get(`/product/${id}`);
        setForm(res.data.data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            await api.put(`/product/${id}`, form);
        } else {
            await api.post("/product", form);
        }

        navigate("/products");
    };

    useEffect(() => {
        if (id) getDetail();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>{id ? "Edit" : "Create"} Product</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                /><br /><br />
                <input
                    type="text"
                    placeholder="SKU"
                    value={form.sku}
                    onChange={(e) => setForm({ ...form, sku: e.target.value })}
                /><br /><br />

                <input
                    type="number"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={(e) =>
                        setForm({ ...form, quantity: Number(e.target.value) })
                    }
                /><br /><br />

                <input
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                        setForm({ ...form, price: Number(e.target.value) })
                    }
                /><br /><br />

                <button type="submit">Save</button>
            </form>
        </div>
    );
}
