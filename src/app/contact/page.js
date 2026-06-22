import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Cinematic Hero */}
        <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/medium-shot-woman-wearing-halal-outdoors.jpg" 
              alt="Contact Zera Foundation" 
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">Contact Us</h1>
              <p className="text-white/80 text-xl md:text-3xl max-w-3xl mx-auto leading-tight font-medium">
                Reach out. We are listening.
              </p>
            </ScrollReveal>
          </div>
          <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Reach out. We're listening.</h2>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter">Let's connect.</h1>
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed mb-12 max-w-xl">
                  Whether you are a family seeking support, a potential partner, or someone who simply wants to learn more about our work, we're here to talk.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-card-bg rounded-2xl flex items-center justify-center border border-black/5 group-hover:bg-primary group-hover:text-black transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Email Us</div>
                      <a href="mailto:info@zerachildcarefoundation.org" className="text-[15px] font-bold text-foreground hover:text-primary transition-colors">zerachildcare@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-card-bg rounded-2xl flex items-center justify-center border border-black/5 group-hover:bg-secondary group-hover:text-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Call Us</div>
                      <a href="tel:+234 906 923 7247" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">+234 906 923 7247</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-card-bg rounded-2xl flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Our Location</div>
                      <div className="text-xl font-bold text-foreground">Lagos, Nigeria</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card-bg p-4 md:p-8 rounded-[3rem] border border-black/5 shadow-2xl overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScmZ8xjB0SD7hlWvVc4uhWFV1vC0zVuLigjo-imXsesqLnTEg/viewform?embedded=true"
                    width="100%"
                    height="828"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Contact Us Form"
                    style={{ borderRadius: "1.5rem", display: "block" }}
                  >
                    Loading…
                  </iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section className="py-24 bg-card-bg border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <ScrollReveal>
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Join our mission</h2>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter">Give your time. <br /> <span className="text-secondary">Change a life.</span></h1>
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed mb-12 max-w-xl">
                  We are looking for professionals who want to use their skills to make a meaningful impact. If you have expertise that could support our programmes, we would love to hear from you.
                </p>
                <div className="flex items-center gap-4 text-secondary font-bold uppercase tracking-widest text-sm">
                  <div className="w-12 h-[2px] bg-secondary" />
                  Your expertise matters
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-background p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-2xl">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Full Name *</label>
                        <input type="text" required placeholder="John Doe" className="w-full bg-card-bg border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Email Address *</label>
                        <input type="email" required placeholder="john@example.com" className="w-full bg-card-bg border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Profession / Area of skill *</label>
                      <input type="text" required placeholder="e.g. Speech Therapist" className="w-full bg-card-bg border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Availability</label>
                      <input type="text" placeholder="e.g. Weekends, once a month, flexible" className="w-full bg-card-bg border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Tell us why you'd like to volunteer</label>
                      <textarea placeholder="Your motivation..." rows="4" className="w-full bg-card-bg border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium resize-none"></textarea>
                    </div>

                    <button className="w-full bg-secondary text-white py-6 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest">
                      Submit Volunteer Form
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Immersive Social Section */}
        {/* <section className="py-24 bg-card-bg">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12">Follow our journey.</h2>
              <div className="flex flex-wrap justify-center gap-8">
                 <a href="https://instagram.com/zerachildcarefoundation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-background px-10 py-6 rounded-[2rem] border border-black/5 hover:shadow-xl transition-all group">
                    <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">IG</span>
                    <span className="font-bold text-xl">Instagram</span>
                 </a>
                 <a href="https://facebook.com/zerachildcarefoundation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-background px-10 py-6 rounded-[2rem] border border-black/5 hover:shadow-xl transition-all group">
                    <span className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">FB</span>
                    <span className="font-bold text-xl">Facebook</span>
                 </a>
              </div>
            </ScrollReveal>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
