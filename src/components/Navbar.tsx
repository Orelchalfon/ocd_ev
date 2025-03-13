import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed w-full z-50 ${
        isDark ? "bg-[#0F0F0F]/80" : "bg-white/80"
      } backdrop-blur-sm`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex-shrink-0'
          >
            <Link to='/' className='relative group'>
              <span
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Orel
              </span>
              <span className='text-2xl font-bold text-gradient ml-1'>
                Chalfon
              </span>
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='ml-10 flex items-baseline space-x-8'
            >
              <NavLink to='/'>{t("nav.home")}</NavLink>
              <NavLink to='/services'>{t("nav.services")}</NavLink>
              <NavLink to='/portfolio'>{t("nav.portfolio")}</NavLink>
              <NavLink to='/about'>{t("nav.about")}</NavLink>
            </motion.div>
          </div>

          {/* Theme and Language Controls */}
          <div className='hidden md:flex items-center space-x-4'>
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
              }`}
              aria-label='Toggle theme'
            >
              {isDark ? (
                <motion.svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </motion.svg>
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLanguage(language === "en" ? "he" : "en")}
              className={`px-3 py-1 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
              }`}
            >
              {language === "en" ? "עב" : "EN"}
            </motion.button>

            {/* Contact Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to='/contact'
                className='relative inline-flex items-center px-6 py-2 overflow-hidden rounded-lg group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300'
              >
                <span className='relative text-white font-medium'>
                  {t("nav.contact")}
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isDark
                  ? "text-white hover:text-white"
                  : "text-gray-900 hover:text-gray-900"
              } focus:outline-none`}
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        className='md:hidden'
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <MobileNavLink to='/'>{t("nav.home")}</MobileNavLink>
          <MobileNavLink to='/services'>{t("nav.services")}</MobileNavLink>
          <MobileNavLink to='/portfolio'>{t("nav.portfolio")}</MobileNavLink>
          <MobileNavLink to='/about'>{t("nav.about")}</MobileNavLink>
          <div className='flex items-center justify-between px-3 py-2 space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`flex-1 p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              }`}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === "en" ? "he" : "en")}
              className={`flex-1 p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              }`}
            >
              {language === "en" ? "עברית" : "English"}
            </motion.button>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='mt-2'
          >
            <Link
              to='/contact'
              className='block w-full text-center px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300'
            >
              {t("nav.contact")}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        theme === "dark"
          ? "text-gray-300 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  return (
    <Link
      to={to}
      className={`block px-3 py-2 text-base font-medium ${
        theme === "dark"
          ? "text-gray-300 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
