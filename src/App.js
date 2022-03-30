//Import dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Code from "./pages/Code";
import Demos from "./pages/Demos";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/makecode-website" element={<Homepage />} />
          <Route path="/code" element={<Code />} />
          <Route path="/demo" element={<Demos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
