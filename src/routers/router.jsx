import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Home/Contact/Contact";
import Skill from "../Pages/Home/Skills/Skill";
import Project from "../Pages/Projects/Project";
import Education from "../Pages/Education/Education";
import About from "../Pages/Home/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/Contact",
            element : <Contact></Contact>
        },
        {
            path : "/Skill",
            element : <Skill></Skill>
        },
        {
            path : "/Project",
            element : <Project></Project>
        },
        {
            path : "/Education",
            element : <Education></Education>
        },
        {
            path : "/About",
            element : <About></About>
        },
      ]
    },
  ]);