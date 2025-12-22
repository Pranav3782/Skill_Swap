import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src="/mainLogo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-xl font-bold text-violet-800">
            SkillSwap
          </h2>
        </div>


        <nav className="hidden md:flex gap-6 list-none">
          <li>
            <Link to="/home" className="hover:text-white hover:bg-blue-600 p-1 hover:rounded">Home</Link>
          </li>
          <li>
            <Link to="/howtowork" className="hover:text-white hover:bg-blue-600 p-1 hover:rounded">How It Works</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white hover:bg-blue-600 p-1 hover:rounded">About</Link>
          </li>
        </nav>

        <div className="hidden md:block">
          <button className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
            Login
          </button>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li>
              <Link
                to="/home"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/howtowork"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <button className="mt-2 border-2 border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
                Login
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
