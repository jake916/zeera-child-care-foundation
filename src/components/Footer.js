import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo.png" 
                alt="Zera Childcare Logo" 
                width={200} 
                height={54} 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-lg max-w-sm mb-8 leading-relaxed">
              Every child deserves a chance to live. We stand in the gap for vulnerable children who cannot access the medical care they need.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://instagram.com/zerachildcarefoundation" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/zerachildcarefoundation" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h5>
            <ul className="space-y-4 text-white/50">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programmes" className="hover:text-primary transition-colors">Programmes</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Impact</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h5>
            <ul className="space-y-4 text-white/50">
              <li><a href="mailto:zerachildcare@gmail.com" className="hover:text-white transition-colors">zerachildcare@gmail.com</a></li>
              <li><a href="tel:+234 906 923 7247" className="hover:text-white transition-colors">+234 906 923 7247</a></li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Financials</h5>
            <ul className="space-y-4 text-white/50">
              <li>
                <a
                  href="/ZERA CHILDCARE 2025 AFS SIGNED (2).pdf"
                  download="Zera-Childcare-2025-Financial-Statement.pdf"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:text-primary transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  2025 Annual Financial Statement
                </a>
              </li>
              <li>
                <Link href="/funds-raised" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:text-primary transition-colors"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Funds Raised
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/20 text-sm">
          <p>© 2026 Zera Childcare Foundation. All rights reserved. Built by <a href="https://khrien.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">khrien</a></p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
