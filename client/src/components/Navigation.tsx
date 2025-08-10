import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" 
        : "bg-white/90 backdrop-blur-md border-b border-slate-200"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Anushree T
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("leadership")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 hover:text-primary"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("leadership")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-primary transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
