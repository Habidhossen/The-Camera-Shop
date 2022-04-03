import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <h1>Welcome to the react world</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
