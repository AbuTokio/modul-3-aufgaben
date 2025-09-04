import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import App from "./App.tsx"
import HomeWoodies from "./pages/woodies/HomeWoodies.tsx"
import About from "./pages/woodies/About.tsx"
import Products from "./pages/woodies/products/Products.tsx"
import Jenson from "./pages/woodies/products/Jenson.tsx"
import Deon from "./pages/woodies/products/Deon.tsx"
import Krisha from "./pages/woodies/products/Krisha.tsx"
import ProductsPage from "./pages/woodies/products/ProductsPage.tsx"
import Woodies from "./pages/woodies/Woodies.tsx"
import Aufgaben from "./pages/Aufgaben.tsx"
import SimpleBlog from "./pages/simpleblog/SimpleBlog.tsx"
import HomeSimpleBlog from "./pages/simpleblog/HomeSimpleBlog.tsx"
import Blog from "./pages/simpleblog/blog/Blog.tsx"
import BlogPage from "./pages/simpleblog/blog/BlogPage.tsx"
import BlogPost from "./pages/simpleblog/blog/BlogPost.tsx"
import Cars from "./pages/cars/Cars.tsx"
import HomeCars from "./pages/cars/HomeCars.tsx"
import CarDetail from "./pages/cars/CarDetail.tsx"
import Bank from "./pages/bank/Bank.tsx"
import HomeBank from "./pages/bank/HomeBank.tsx"
import Temperatur from "./pages/temperatur-rechner/Temperatur.tsx"
import HomeTemperatur from "./pages/temperatur-rechner/HomeTemperatur.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Aufgaben },
      {
        path: "woodies",
        Component: Woodies,
        children: [
          { index: true, Component: HomeWoodies },
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
      {
        path: "simpleblog",
        Component: SimpleBlog,
        children: [
          { index: true, Component: HomeSimpleBlog },
          {
            path: "blog",
            Component: BlogPage,
            children: [
              { index: true, Component: Blog },
              { path: ":id", Component: BlogPost },
            ],
          },
        ],
      },
      {
        path: "cars",
        Component: Cars,
        children: [
          { index: true, Component: HomeCars },
          {
            path: ":id",
            Component: CarDetail,
          },
        ],
      },
      {
        path: "bank",
        Component: Bank,
        children: [{ index: true, Component: HomeBank }],
      },
      {
        path: "temperatur-rechner",
        Component: Temperatur,
        children: [{ index: true, Component: HomeTemperatur }],
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
