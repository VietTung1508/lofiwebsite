import Home from "./components/Pages/Home/Home";
import CafeShop from "./components/Pages/CafeShop/CafeShop";
import Kyoto from "./components/Pages/Kyoto/Kyoto";
import NewYork from "./components/Pages/NewYork/NewYork";
import { Routes, Route } from "react-router-dom";
import Seoul from "./components/Pages/Seoul/Seoul";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafe" element={<CafeShop />} />
      <Route path="/kyoto" element={<Kyoto />} />
      <Route path="/newyork" element={<NewYork />} />
      <Route path="/seoul" element={<Seoul />} />
    </Routes>
  );
}

export default App;
