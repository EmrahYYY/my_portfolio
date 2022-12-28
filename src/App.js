import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      {/* npm run deploy */}
    </div>
  );
}

export default App;
