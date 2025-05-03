import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const UserDropdown = ({ logoutHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        User
        <ChevronDown size={18} />
      </button>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
            <Link to="/order-history">Order history</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
            onClick={logoutHandler}
          >
            Sign out
          </li>
        </motion.ul>
      )}
    </div>
  );
};

export default UserDropdown;
