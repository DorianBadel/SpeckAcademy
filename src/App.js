import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';


//Pages
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/course/:id" element = {<Course/>}/>
        <Route path="/course" element={<Course/>} />
      </Routes>
    </Router>
  );
}

export default App;
