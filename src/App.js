import "bootstrap/dist/css/bootstrap.min.css";
import TableUser from "./component/tableUser/index.tsx";
import Form from "./component/form/index.tsx";
import Home from "./component/home/index.tsx";
import Navbar from "./component/navbar/index.tsx";
import { Routes, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableUser />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
