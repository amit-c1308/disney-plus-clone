import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
