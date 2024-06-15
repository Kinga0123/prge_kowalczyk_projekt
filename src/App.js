import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Mapklienci from "./components/map_klienci/Mapklienci";
import Map from "./components/map/Map";
import Mapkoncertklient from "./components/map_koncert_klient/Mapkoncertklient";
import Dashboard from "./components/dashboard_koncert/Dashboard";
import Dashboard_klient from "./components/dashboard_klient/Dashboard_klient";
import Dashboard_koncert_klient from "./components/dashboard_koncert_klient/Dashboard_koncert_klient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/map_klienci",
    element: <Mapklienci />,
  },
  {
    path: "/services/map_koncert_klient",
    element: <Mapkoncertklient />,
  },
  {
    path: "/services/dashboard_koncert",
    element: <Dashboard />,
  },
  {
    path: "/services/dashboard_klient",
    element: <Dashboard_klient />,
  },
  {
    path: "/services/dashboard_koncert_klient",
    element: <Dashboard_koncert_klient />,
  },
  {
    path: "/services/dashboard_koncert/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard_klient/map_klienci",
    element: <Mapklienci />,
  },
  {
    path: "/services/dashboard_koncert_klient/map_koncert_klient",
    element: <Mapkoncertklient />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
