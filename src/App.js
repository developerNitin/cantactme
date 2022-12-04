import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Resume from "./pages/resume";
import Works from "./pages/works";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
// import FollowUs from "./components/followUs";
import Mask from "./components/mask";
import OnLoad from "./components/onLoad";
import BlogPage from "./components/blogPage";
import { BlogData } from "./components/blogData";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <OnLoad />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contact />} />
          </Routes>
        </div>
        <Mask />
      </div>
    </Router>
  );
}

export default App;
