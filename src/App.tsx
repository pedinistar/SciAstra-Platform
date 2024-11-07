import { Route, Routes } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import Header from "./components/Header";

import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import AddBlogPage from "./pages/AddBlogPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
