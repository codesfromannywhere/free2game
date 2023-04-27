import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./data/imports.scss";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout>
            <App />
        </Layout>
    </BrowserRouter>
);
