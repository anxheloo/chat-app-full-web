/* eslint-disable no-undef */
import { lazy, Suspense } from "react";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
// import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import AuthLayout from "./layouts/AuthLayout";
import ErrorBox from "./components/Error/ErrorBox";
// import Settings from "./pages/dashboard/Settings/Settings";

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

  const Settings = Loadable(
    lazy(() => import("./pages/dashboard/Settings/Settings"))
  );

  const Login = Loadable(lazy(() => import("./pages/auth/Login")));

  const Register = Loadable(lazy(() => import("./pages/auth/Register")));

  const Verify = Loadable(lazy(() => import("./pages/auth/Verify")));

  const ResetPassword = Loadable(
    lazy(() => import("./pages/auth/ResetPassword"))
  );

  const NewPassword = Loadable(lazy(() => import("./pages/auth/NewPassword")));

  const Group = Loadable(lazy(() => import("./pages/dashboard/Group")));

  const Call = Loadable(lazy(() => import("./pages/dashboard/Call")));

  const ProfilePage = Loadable(lazy(() => import("./pages/dashboard/Profile")));

  const Page404 = Loadable(lazy(() => import("./pages/Page404")));

  return (
    <div className="transition-colors">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="app" element={<GeneralApp />} />
            <Route path="settings" element={<Settings />} />
            <Route path="group" element={<Group />} />
            <Route path="call" element={<Call />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify/:email" element={<Verify />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="new-password" element={<NewPassword />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>

      <ErrorBox />
      {/* <div className="w-[250px] bg-red-600 h-[50px] absolute left-0 right-0 -bottom-16 mx-auto flex justify-center items-center">
        An error occurred
      </div> */}
    </div>
  );
}

export default App;
