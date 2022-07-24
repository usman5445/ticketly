import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/Landing-page";
import { LoginPage } from "./Pages/Login-page";

function App() {
  return (
    <BrowserRouter>
      <div className="App transition-all duration-500 w-screen h-screen font-montserrat-regular bg-off-white dark:bg-off-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
