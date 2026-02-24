import { Routes, Route } from "react-router-dom";
import AnaSayfa from "./Anasayfa"; 
import Bf from "./BasvuruFormu/basvuruformu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
      <Route path="/basvuru" element={<Bf/>} />
    </Routes>
  );
}

export default App;