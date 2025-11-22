import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#f1f5f9"
            }}
        >
            <Outlet />
        </div>
    );
};

export default AuthLayout;
