import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectPage from "./Pages/ProjectPage";
// import hi from "./hi";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/project" element={<ProjectPage/>} />
            <Route path="/education" element={<SkillsPage/>} />
            <Route path="/contact-me" element={<ContactPage/>} /> 
            {/* <Route path="/c" element={<hi/>} />  */}

          </Routes>
    </Router>
  );
}

export default App;
