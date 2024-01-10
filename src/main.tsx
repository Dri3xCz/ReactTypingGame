import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./components/Layout/Layout";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  </React.StrictMode>
);
