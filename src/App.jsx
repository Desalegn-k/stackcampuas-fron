import "./App.css";
import Home from "./pages/Home";
import AskQuestion from "./componenets/AskQuestion";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState, createContext } from "react";
import axios from "./axiosConfig";
// import LogoutButton from "./pages/Header";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
// import Layout from "./componenets/Layout";
import HowItWorks from "./pages/HowItWorks";
import SharedLayout from "./componenets/SharedLayout";
import Four04 from "./componenets/Four04";

export const Appstate = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const normalizedPath = pathname.replace(/\/+$/, "").toLowerCase();
  const isPublicRoute =
    normalizedPath === "/register" || normalizedPath === "/howitworks";

  const checkUser = useCallback(async () => {
    if (!token) {
      if (!isPublicRoute) {
        navigate("/login");
      }
      return;
    }

    try {
      const { data } = await axios.get("/users/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data);
    } catch (error) {
      if (!isPublicRoute) {
        navigate("/login");
      }
      console.log(error.response);
    }
  }, [isPublicRoute, navigate, token]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Appstate.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route
            path="/question/:questionid"
            element={<QuestionDetailPage />}
          />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </Appstate.Provider>
  );
}

export default App;
