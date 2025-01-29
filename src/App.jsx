import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import User from "./Components/Dashboard/User/User";
function App() {
  return (
    <>
      <Routes>
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
