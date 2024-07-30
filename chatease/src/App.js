import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
