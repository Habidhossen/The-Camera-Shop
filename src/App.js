import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import ClientReviews from "./components/ClientReviews/ClientReviews";
import Dashboard from "./components/Dashboard/Dashboard";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ClientReviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
