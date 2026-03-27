import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import App from "../App";

const ProtectedLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Navigate to="/login" replace />;

  return <App />;
};

export default ProtectedLayout;
