import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Styles/styles.scss'
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (

    <BrowserRouter>
      <div className="app-component">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
