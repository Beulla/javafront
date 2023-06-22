import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useRoutes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/listPage";
import Cookies from "js-cookie";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    const checkLoggedInStatus = () => {
      const token = Cookies.get("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLoggedInStatus();
  }, []);

return(
  <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<PrivateRoute isLoggedIn={isLoggedIn}><RegisterPage /></PrivateRoute>} />
        <Route path="/list" element={<PrivateRoute isLoggedIn={isLoggedIn}><ListPage /></PrivateRoute>} />
        
      </Routes>
    </Router>
)
}
const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default App;


