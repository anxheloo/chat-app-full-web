/* eslint-disable no-undef */
import { lazy, Suspense } from "react";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
// import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  // Define Loadable
  const Loadable = (Component) => (props) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );

  const GeneralApp = Loadable(
    lazy(() => import("./pages/dashboard/GeneralApp"))
  );
  const Page404 = Loadable(lazy(() => import("./pages/Page404")));

  return (
    <div className="transition-colors">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            {/* <Route index element={<Navigate to={routeIndex} />} /> */}
            <Route path="app" element={<GeneralApp />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
