import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import axios from "axios";

axios.defaults.baseURL = "https://shortifyhub-api.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
