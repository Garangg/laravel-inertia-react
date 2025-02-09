import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="#">Laravel</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="container mt-5">{ children }</main>
        </>
    );
}

export default Layout;
