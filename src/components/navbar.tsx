
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg main-navbar">
            <Link to="/" className="navbar-brand sidebar-gone-hide">
                REACT VITE
            </Link>
            <div className="navbar-nav">
                <a
                    href="#"
                    className="nav-link sidebar-gone-show"
                    data-toggle="sidebar"
                >
                    <i className="fas fa-bars"></i>
                </a>
            </div>
            <form className="form-inline ml-auto"></form>
            <ul className="navbar-nav navbar-right">
                <li className="dropdown">
                    <a
                        href="#"
                        data-toggle="dropdown"
                        className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                    >
                        <div className="d-sm-none d-lg-inline-block">
                            Hi, Mohamad Imam Salji
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-title">
                            Logged in 5 min ago
                        </div>
                        <div className="dropdown-divider"></div>
                        <a
                            href="#"
                            className="dropdown-item has-icon text-danger"
                        >
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
