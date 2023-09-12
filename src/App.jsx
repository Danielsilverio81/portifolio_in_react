import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contacts from "./routes/Contacts";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}