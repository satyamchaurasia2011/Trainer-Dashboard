import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workout from "./pages/Workout";
import Nutrition from "./pages/Nutrition";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path=":userId/workout" element={<Workout />} />
          <Route path=":userId/nutrition" element={<Nutrition />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
