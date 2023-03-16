import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/blogs/:id' element={<BlogDetails />}></Route>
          <Route path='*' element={<NotFound />}></Route> {/*stavljam na kraj jer bi se * poklapala sa svakom rutom */}
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
