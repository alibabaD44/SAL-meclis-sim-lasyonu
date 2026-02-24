import { Routes, Route } from "react-router-dom";
import AnaSayfa from "./Anasayfa"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
    </Routes>
  );
}

export default App;