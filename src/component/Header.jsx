import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tool', label: 'Tools' },
    { path: '/project', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];

  const activeStyle = 'text-teal-600 font-semibold underline';

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-12">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h12M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 space-y-2"
          >
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-teal-600 transition ${
                      isActive ? activeStyle : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-teal-600">Maiz</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-teal-600 transition font-medium ${
                    isActive ? activeStyle : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="/contact"
          className="btn btn-outline border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
