import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./routers/RootLayout";
import Home from "./routers/Home";
import About from "./routers/About";
import Projects from "./routers/Projects";
import Contacts from "./routers/Contacts";

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);