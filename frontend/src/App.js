import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./style.css"

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
