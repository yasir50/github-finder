import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Goto from "./Components/Goto";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Goto />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
