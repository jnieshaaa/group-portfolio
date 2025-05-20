import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Auto-close mobile menu
  };

  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={600}
        // delay={300}
        offset={-80}
        className="block text-steelBlue hover:text-lavender px-4 py-2 cursor-pointer"
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={600}
        // delay={300}
        offset={-80}
        className="block text-steelBlue hover:text-lavender px-4 py-2 cursor-pointer"
        onClick={handleLinkClick}
      >
        Previous Projects
      </Link>
      <Link
        to="techstack"
        smooth={true}
        duration={600}
        // delay={300}
        offset={-80}
        className="block text-steelBlue hover:text-lavender px-4 py-2 cursor-pointer"
        onClick={handleLinkClick}
      >
        Tech Stack
      </Link>
    </>
  );

  return (
    <header
      className={`bg-midnight shadow-md border-b border-indigoDeep sticky top-0 z-50 transform transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-lavender">MyPortfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">{navLinks}</nav>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-lavender focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <motion.div
        className="sm:hidden overflow-hidden bg-midnight border-t border-indigoDeep"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{
          maxHeight: isMobileMenuOpen ? 300 : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col">{navLinks}</div>
      </motion.div>
    </header>
  );
}

export default Header;
