import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Styles/styles.scss'
import Footer from "./Components/Footer/Footer";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
