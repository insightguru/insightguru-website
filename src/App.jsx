import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/AllPageComponents/CommonComponent/Navbar";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import NoPage from "./Components/pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
