import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Publish from "./pages/Publish"
import HomePage from "./pages/HomePage"


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/blog/:id" element={<Blog />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/publish" element={<Publish />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App