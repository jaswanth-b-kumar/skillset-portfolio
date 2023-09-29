import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Styles/styles.scss'
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (

    <HashRouter>
      <div className="app-component">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/skillset-portfolio/' element={<Home />} />
          <Route path='/skillset-portfolio/experience' element={<Experience />} />
          <Route path='/skillset-portfolio/contact' element={<Contact />} />
          <Route path='/skillset-portfolio/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
