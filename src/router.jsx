import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routers/RootLayout";
import Home from "./routers/Home";
import About from "./routers/About";
import Projects from "./routers/Projects";
import Contacts from "./routers/Contacts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: "about",
            element: <About />
        }, {
            path: "projects",
            element: <Projects />
        }, {
            path: "contacts",
            element: <Contacts/>
        }]
    }
])