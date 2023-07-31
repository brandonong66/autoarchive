import React from "react"
import ReactDOM from "react-dom/client"
import ForumsPage from "./pages/ForumsPage.tsx"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import Navbar from "./components/Navbar.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/forums",
    element: <ForumsPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
