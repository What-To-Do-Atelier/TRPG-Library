import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/main/index.tsx";
import { DefaultLayout } from "./layout/default";

const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
