import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/pages/Main";
import Layout from "./components/Layout/Layout";
import { routes } from "./routes";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";
import { Root } from "./components/Root";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Root>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Root>
    </ThemeProvider>
  </React.StrictMode>
);
