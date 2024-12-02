import React from 'react';
import { Home, Users, Stethoscope, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Hospital Name */}
          <div className="flex items-center">
            <Link to='/'><span className="text-blue-600 font-bold text-xl">HMS</span></Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to='/'><NavLink icon={<Home size={20} />} text="Home" isActive={true} /></Link>
            <Link to='/patients'><NavLink icon={<Users size={20} />} text="Patients"/></Link>
            <Link to='/doctors'><NavLink icon={<Stethoscope size={20} />} text="Doctors" /></Link>
            <Link to='/appointments'><NavLink icon={<Calendar size={20} />} text="Appointments" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text, isActive = false }) => {
  const baseClasses = "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150";
  const activeClasses = "text-blue-600 bg-blue-50 hover:bg-blue-100";
  const inactiveClasses = "text-gray-600 hover:text-blue-600 hover:bg-blue-50";

  return (
    <a
      href=""
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Navbar;