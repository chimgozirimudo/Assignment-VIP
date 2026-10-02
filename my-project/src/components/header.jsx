import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white text-gray-950 flex justify-between items-center p-8 border-b border-gray-200">
      <div>
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" className="h-12 w-30" />
        </NavLink>
      </div>
      <nav className="flex justify-between items-center p-0">
        <ul className="flex gap-12 ">
          {/* <li><NavLink to="/">Home</NavLink></li> */}
          <li className="text-gray-950 font-semibold text-base">
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="text-gray-950 font-semibold text-base">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-gray-950 font-semibold text-base">
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li className="text-gray-950 font-semibold text-base">
            <NavLink to="/features">Features</NavLink>
          </li>
          <li className="text-gray-950 font-semibold text-base">
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <button className="bg-white border border-orange-400 hover:bg-orange-100/80 text-orange-400 font-bold py-px px-4 rounded">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="bg-white border border-orange-400 hover:bg-orange-100/80 text-orange-400 font-bold py-px px-4 rounded">
            <NavLink to="/create-account">Create Account</NavLink>
          </button>
        </ul>
      </nav>
    </div>
  );
}
