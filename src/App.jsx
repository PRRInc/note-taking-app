import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

// Components
// import Footer from "./components/Footer";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs"
import NavBar from "./components/NavBar";
import Note from "./components/Notes/Note";
// import EditNote from "./components/Notes/EditNote";
// import NewNote from "./components/Notes/NewNote";


function App() {

  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* <Route path="/notes/new" element={<NewNote />} /> */}
          <Route path="/notes/:id" element={<Note />} />
          {/* <Route path="/notes/:id/edit" element={<EditNote />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
