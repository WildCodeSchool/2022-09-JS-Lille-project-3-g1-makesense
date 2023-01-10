import Home from "@pages/Home/Home";
import Suggest from "@pages/Suggest/Suggest";
import SubscriptionForm from "@pages/SubscriptionForm/SubscriptionForm";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Suggest />} />
        <Route path="/register" element={<SubscriptionForm />} />
        <Route path="/suggestform" element={<SuggestForm />} />
      </Routes>
    </div>
  );
}

export default App;
