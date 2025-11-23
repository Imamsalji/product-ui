import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/authLayout";
import AppLayout from "./layouts/appLayout";

import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import Dashboard from "./pages/Dashboard";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth layout */}
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<Login />} />
                </Route>

                {/* Admin layout */}
                <Route element={<AppLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/create" element={<ProductForm />} />
                    <Route path="/products/edit/:id" element={<ProductForm />} />
                </Route>

                {/* <Route path="/" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/create" element={<ProductForm />} />
                <Route path="/products/edit/:id" element={<ProductForm />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
