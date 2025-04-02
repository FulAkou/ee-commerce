import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "../../components/Dropdown/Dropdown";
import { userLogoutAction } from "../../Redux/Actions/User";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(userLogoutAction());
    navigate("/login", { replace: true }); // Redirection fluide
  };

  return (
    <header className="fixed w-full flex items-center justify-between p-4 bg-slate-200 shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        <span className="text-yellow-500">E</span>-
        <span className="text-yellow-500">C</span>ommerce
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-500">
          Home
        </Link>
      </nav>

      {/* User Actions */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/cart" className="hover:text-yellow-500 flex items-center">
          <ShoppingCart className="w-5 h-5 mr-1" /> Cart
        </Link>
        {!userInfo ? (
          <Link
            to="/register"
            className="text-white bg-yellow-500 py-2 px-6 rounded hover:bg-yellow-600"
          >
            Get Started
          </Link>
        ) : (
          <UserDropdown logoutHandler={logoutHandler}></UserDropdown>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-200 p-4 flex flex-col items-center gap-4 md:hidden">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>

          <Link to="/cart" className="hover:text-yellow-500 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" /> Cart
          </Link>
          {!userInfo ? (
            <Link
              to="/register"
              className="text-white bg-yellow-500 py-2 px-6 rounded hover:bg-yellow-600"
            >
              Get Started
            </Link>
          ) : (
            <UserDropdown logoutHandler={logoutHandler}></UserDropdown>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;
