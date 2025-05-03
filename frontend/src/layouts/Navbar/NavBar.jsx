import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "../../components/Dropdown/Dropdown";
import Checkout from "../../pages/Checkout";
import { userLogoutAction } from "../../Redux/Actions/User";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qty = useSelector((state) =>
    state.cartReducer.cartItems.reduce((acc, item) => acc + item.qty, 0)
  );

  const logoutHandler = () => {
    dispatch(userLogoutAction());
    navigate("/login", { replace: true }); // Redirection fluide
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 flex items-center justify-between p-4 bg-yellow-300 shadow-md">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-3xl font-bold ml-5 hover:text-yellow-500">
          <span className="text-yellow-500">E</span>-
          <span className="text-yellow-500">C</span>ommerce
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-500">
          Home
        </Link>
      </nav>

      {/* User Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button
          className="hover:text-yellow-500 flex items-center"
          onClick={() => setOpen(true)}
        >
          <ShoppingCart className="w-5 h-5 mr-1" />
          <span>{qty}</span>
        </button>
        <Checkout open={open} setOpen={setOpen} />
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
          <Link to="/about" className="hover:text-yellow-500">
            About
          </Link>

          <button className="hover:text-yellow-500 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" />
            <span>{qty}</span>
          </button>
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
