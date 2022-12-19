import Home from "@pages/Home/Home";
import Suggest from "@pages/Suggest/Suggest";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Suggest />} />
      </Routes>
    </div>
  );
}

export default App;
