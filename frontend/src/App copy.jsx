import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/login"
            element={userInfo ? <Navigate to="/"></Navigate> : <Login />}
          />
          <Route
            path="/register"
            element={userInfo ? <Navigate to="/"></Navigate> : <Register />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
