import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Mapklienci from "./components/map_klienci/Mapklienci";
import Map from "./components/map/Map";
import Mapkoncertklient from "./components/map_koncert_klient/Mapkoncertklient";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
