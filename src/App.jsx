import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/routes/RootLayout";
import HomePage from "../src/routes/HomePage";
import About from "../src/routes/About";
import Projects from "../src/routes/Projects";
import Contacts from "../src/routes/Contacts";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<About />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="contatos" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}