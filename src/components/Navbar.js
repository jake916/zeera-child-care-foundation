"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Impact", href: "/impact" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled && !isOpen ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 relative z-[60]" onClick={() => setIsOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Zera Childcare Logo" 
              width={240} 
              height={64} 
              className={`w-auto object-contain transition-all duration-300 ${isOpen || scrolled ? "brightness-100" : "brightness-0 invert"}`}
              style={{ height: scrolled ? "42px" : "60px", width: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu - Mathematically Centered */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${scrolled ? "text-black/70" : "text-white/90"}`}>
          {navLinks.map((link) => {
            if (link.submenu) {
              const isActive = pathname.startsWith(link.href);
              return (
                <div key={link.name} className="relative group py-2 flex items-center gap-1 cursor-pointer">
                  <Link 
                    href={link.href} 
                    className={`transition-colors ${isActive ? "text-secondary" : scrolled ? "hover:text-secondary" : "hover:text-primary"}`}
                  >
                    {link.name}
                  </Link>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 transition-transform group-hover:rotate-180">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-2xl shadow-xl py-3 border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top-left z-[70]">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-colors ${pathname === sub.href ? "text-secondary" : "text-black/75"}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-colors ${pathname === link.href ? "text-secondary" : scrolled ? "hover:text-secondary" : "hover:text-primary"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="flex-1 hidden md:flex justify-end items-center gap-4">
          <Link href="/donate" className="bg-secondary text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-secondary/20">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex justify-end">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className={`relative z-[60] w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none ${isOpen ? "text-white" : scrolled ? "text-black" : "text-white"}`}
          >
            <span className={`w-8 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-8 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-8 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-[55] transition-all duration-500 md:hidden flex flex-col px-8 pt-32 pb-12 ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}`}>
          <div className="flex flex-col gap-6 text-3xl font-bold tracking-tight overflow-y-auto">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.name} className="flex flex-col gap-3">
                    <div className="text-white/40 text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-1 w-full">
                      {link.name}
                    </div>
                    <div className="pl-4 flex flex-col gap-4">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className={`transition-colors ${pathname === sub.href ? "text-secondary" : "text-white hover:text-secondary"}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`transition-colors ${pathname === link.href ? "text-secondary" : "text-white hover:text-secondary"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="mt-auto">
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="w-full block bg-secondary text-white text-center py-6 rounded-[2rem] text-2xl font-black shadow-2xl shadow-secondary/20 active:scale-95 transition-transform"
            >
              Donate Now
            </Link>
            
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
               <div className="text-white/30 font-bold uppercase tracking-widest text-[10px]">Zera Childcare Foundation</div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
