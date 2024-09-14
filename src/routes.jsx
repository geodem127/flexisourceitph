import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from "./components/common/Loadable";
// import Loadable from "./components/common/Loadable";

const LoginPage = Loadable(lazy(() => import("./components/pages/login")));
const AppPage = Loadable(lazy(() => import("./App")));
const HomePage = Loadable(lazy(() => import("./components/pages/home")));
const StudenstPage = Loadable(
  lazy(() => import("./components/pages/students"))
);
const PageNotFound = Loadable(
  lazy(() => import("./components/pages/PageNotFound"))
);

const RouteGuard = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<AppPage />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/students" element={<StudenstPage />} />
      </Route>
      <Route exact path="/404" element={<PageNotFound />} />
      {/* <Route exact path="*" element={<Navigate to="/404" replace />} /> */}

      {/* <Route exact path="/*" element={<AppPage />} /> */}
      {/* <Route exact path="/" element={<AppPage />}>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/students" element={<StudenstPage />} />
      </Route> */}
    </Routes>
  );
};

export default RouteGuard;
