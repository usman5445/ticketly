import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/Landing-page";
import { LoginPage } from "./Pages/Login-page";
import { RegisterPage } from "./Pages/Register-page";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen w-screen bg-off-white font-montserrat-regular transition-all duration-500 dark:bg-off-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
