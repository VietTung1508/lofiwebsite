import Home from "./components/Pages/Home/Home";
import CafeShop from "./components/Pages/CafeShop/CafeShop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafe" element={<CafeShop />} />
    </Routes>
  );
}

export default App;
