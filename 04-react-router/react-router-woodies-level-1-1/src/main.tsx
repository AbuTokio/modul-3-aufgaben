import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import App from "./App.tsx"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Products from "./pages/products/Products.tsx"
import Jenson from "./pages/products/Jenson.tsx"
import Deon from "./pages/products/Deon.tsx"
import Krisha from "./pages/products/Krisha.tsx"
import ProductsPage from "./pages/products/ProductsPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "products",
        Component: ProductsPage,
        children: [
          { index: true, Component: Products },
          { path: "jenson", Component: Jenson },
          { path: "deon", Component: Deon },
          { path: "krisha", Component: Krisha },
        ],
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
