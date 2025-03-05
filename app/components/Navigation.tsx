import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle anchor links (those starting with #) and home link
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection(""); // Clear active section for home
      window.history.pushState(null, "", href);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }

        // Calculate position accounting for navbar height
        const navbarHeight = 50; // Set to 50px to match the CSS scroll-margin-top
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        // Scroll to the target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update active section
        setActiveSection(targetId);

        // Update URL without causing a page reload
        window.history.pushState(null, "", href);
      }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // If at the top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Reduced offset for navbar height

      let foundActive = false;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          foundActive = true;
        }
      });

      // If no section is active and we're not at the top, keep the current active section
      // This prevents flickering between sections
      if (!foundActive && window.scrollY >= 100) {
        // Keep current active section
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="holo-panel px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="relative group"
              onClick={(e) => handleSmoothScroll(e, "/")}
            >
              <motion.span
                className="block text-2xl font-bold neon-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                NH
              </motion.span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 font-mono text-sm tracking-wider uppercase block"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        (item.href === "/" && activeSection === "") ||
                        (item.href !== "/" &&
                          activeSection === item.href.replace("#", ""))
                          ? "text-neon-blue"
                          : "text-white hover:text-neon-blue"
                      }`}
                    >
                      {item.name}
                    </span>
                    {(hoveredIndex === index ||
                      (item.href === "/" && activeSection === "") ||
                      (item.href !== "/" &&
                        activeSection === item.href.replace("#", ""))) && (
                      <motion.span
                        layoutId="navbar-hover"
                        className="absolute inset-0 -z-10 bg-holo-light rounded-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-[9000] w-10 h-10 flex flex-col justify-center items-center group cyber-button p-0 border-0"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-6 h-0.5 bg-neon-blue transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-neon-blue my-1 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-neon-blue transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-[8000] pt-24 bg-space-dark/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="cyber-button p-2 border-neon-blue"
                  aria-label="Close menu"
                >
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
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col items-center space-y-6 py-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className={`holo-panel block py-4 px-6 text-center font-mono text-lg uppercase tracking-wider w-full ${
                        (item.href === "/" && activeSection === "") ||
                        (item.href !== "/" &&
                          activeSection === item.href.replace("#", ""))
                          ? "border-neon-blue"
                          : ""
                      }`}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span
                        className={
                          (item.href === "/" && activeSection === "") ||
                          (item.href !== "/" &&
                            activeSection === item.href.replace("#", ""))
                            ? "text-neon-blue"
                            : "text-white"
                        }
                      >
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
