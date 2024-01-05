import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AddedProjects from "./components/AddedProjects";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import ProjectContext from "./context/ProjectContext";
import "./App.css";

const data = [
  {
    projectName: "Netflix Movies App",
    projectLink: "https://master.d30euk7c6w32bz.amplifyapp.com/ ",
    projectDescription:
      "Netflix-like app project aims to develop a streaming platform offering user authentication, content cataloging, search and filtering options and responsive design, requiring technologies like React.js for the frontend, Node.js/Express.js for the backend, along with databases such as MongoDB",
  },
  {
    projectName: "NxtTrendz(E-Commerce App)",
    projectLink: "https://main.d1tv8o2b3t7zip.amplifyapp.com/ ",
    projectDescription:
      'The "Nxt Trendz" e-commerce platform seeks to revolutionize online shopping by offering an intuitive, personalized shopping experience, seamless checkout processes, and diverse product categories, utilizing technologies like React for the frontend, Node.js for the backend, and sqlite database for efficient data management.',
  },
];

function App() {
  const [projects, setProjects] = useState(data);
console.log(projects)
  const addProjects = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const contextValue = {
    projects,
    addProjects,
  };

  return (
    <BrowserRouter>
      <ProjectContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-projects" element={<AddedProjects />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes>
      </ProjectContext.Provider>
    </BrowserRouter>
  );
}

export default App;
