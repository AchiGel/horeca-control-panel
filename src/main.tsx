import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PostArticle from "./pages/PostArticle.tsx";
import EditArticle from "./pages/EditArticle.tsx";
import RemoveArticle from "./pages/RemoveArticle.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<PostArticle />} />
      <Route path="edit" element={<EditArticle />} />
      <Route path="remove" element={<RemoveArticle />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
