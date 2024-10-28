import { useEffect } from "react";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import { useSelector } from "react-redux";

function App() {
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return <DashboardLayout />;
}

export default App;
