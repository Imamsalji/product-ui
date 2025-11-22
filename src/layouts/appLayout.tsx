import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ padding: "20px", flexGrow: 1 }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
