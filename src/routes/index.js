/* eslint-disable no-undef */
import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-roter-dom";
import LoadingScreen from "../components/LoadingScreen";
import DashboardLayout from "../layouts/dashboard";

//  layoutes

// config

const Loadable = (Component) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { element: <GeneralApp />, path: "app" },
        { element: <Page404 />, path: "404" },
        { element: <Navigate to={"/404"} replace />, path: "*" },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
