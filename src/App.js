import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.scss';

//Pages
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
//Components
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/course" element={<Course/>} />
      </Routes>
    </Router>
  );
}

export default App;
