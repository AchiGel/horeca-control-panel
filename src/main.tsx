import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PostArticle from "./pages/PostArticle.tsx";
import EditArticle from "./pages/EditArticle.tsx";
import RemoveArticle from "./pages/RemoveArticle.tsx";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import ProtectedLayout from "./components/ProtectedLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<SignIn routing="path" path="/login" />} />
      <Route element={<ProtectedLayout />}>
        <Route index element={<PostArticle />} />
        <Route path="edit" element={<EditArticle />} />
        <Route path="remove" element={<RemoveArticle />} />
      </Route>
    </Route>,
  ),
);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />,
  </ClerkProvider>,
);
