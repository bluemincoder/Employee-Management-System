import * as React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import Chats from "./pages/Chats";
import Notes from "./pages/Notes";
import Leave from "./pages/Leave";
import Resignation from "./pages/Resignation";

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: "/",
                Component: Layout,
                children: [
                    {
                        path: "/",
                        Component: Dashboard,
                    },
                    {
                        path: "/chats",
                        Component: Chats,
                    },
                    {
                        path: "/notes",
                        Component: Notes,
                    },

                    {
                        path: "/leave",
                        Component: Leave,
                    },
                    {
                        path: "/resignation",
                        Component: Resignation,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
