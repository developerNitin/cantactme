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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />

            {BlogData.map((i) => {
              return (
                <Route
                  path={i.blogPageUrl}
                  element={
                    <BlogPage
                      name={i.titile}
                      imgUrl1={i.imgUrl1}
                      imgUrl1a={i.imgUrl1a}
                      imgUrl1b={i.imgUrl1b}
                      p1={i.p1}
                      p2a={i.p2a}
                      p2b={i.p2b}
                      p2c={i.p2c}
                      a1={i.a1}
                      a2={i.a2}
                      p3={i.p3}
                      p4={i.p4}
                      span1={i.span1}
                      p5a={i.p5a}
                      p5b={i.p5b}
                      span2={i.span2}
                      p6={i.p6}
                      p7={i.p7}
                      p8={i.p8}
                      h1={i.h1}
                      li1={i.li1}
                      li2={i.li2}
                      li3={i.li3}
                      li4={i.li4}
                    />
                  }
                />
              );
            })}
          </Routes>
        </div>
        <Footer />
        <Mask />
      </div>
    </Router>
  );
}

export default App;
