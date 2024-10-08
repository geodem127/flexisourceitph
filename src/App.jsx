import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "./components/auth";
import PageLayout from "./components/pages";

export default function App() {
  const { userLogout, isAuthenticated } = useAuthentication();

  return (
    <>
      {isAuthenticated ? (
        <PageLayout userLogout={userLogout}>
          <Outlet />
        </PageLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
