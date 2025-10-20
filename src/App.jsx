import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import ExperienceDetail from './pages/ExperienceDetail';

function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/experience/:experienceId" element={<ExperienceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;