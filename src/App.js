import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/Landing-page";
import { LoginPage } from "./Pages/Login-page";
import { RegisterPage } from "./Pages/Register-page";
import { ProtectedRoute } from "./Utils/ProtectedRoute";
import { AdminPage } from "./Pages/Admin-page";
import { CustomerPage } from "./Pages/Customer-page";
import { ClientPage } from "./Pages/Client-page";
function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen w-screen bg-off-white font-montserrat-regular transition-all duration-500 dark:bg-off-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute ROLE={"ADMIN"} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          {/* <Route element={<ProtectedRoute ROLE={"CUSTOMER"} />}> */}
          <Route path="/customer" element={<CustomerPage />} />
          {/* </Route> */}
          <Route element={<ProtectedRoute ROLE={"CLIENT"} />}>
            <Route path="/client" element={<ClientPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
