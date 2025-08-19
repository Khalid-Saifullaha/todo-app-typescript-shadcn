import React, { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-2xl font-extrabold  tracking-wide">
            TaskMaster
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/task" className=" hover:text-blue-600">
            Task
          </Link>
          <Link to="/user" className=" hover:text-blue-600">
            User
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/task" className="block  hover:text-blue-600">
            Task
          </Link>
          <Link to="/user" className="block  hover:text-blue-600">
            User
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
