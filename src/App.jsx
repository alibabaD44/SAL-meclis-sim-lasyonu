import { Routes, Route } from "react-router-dom";
import AnaSayfa from "./Anasayfa"; 
import Bf from "./BasvuruFormu/basvuruformu";
import Error404 from "./error/Error";
import Komitelerpage from "./komiteler/Komiteler";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
      <Route path="/basvuru" element={<Bf/>} />
      <Route path="/komiteler" element={<Komitelerpage/>}/>
      <Route path="*" element={<Error404/>} />
    </Routes>
  );
}

export default App;