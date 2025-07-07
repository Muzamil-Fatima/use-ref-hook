import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import NavBar from "./NavBar";
export default function RouterReact() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
