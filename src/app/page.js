import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CausesGrid from "@/components/CausesGrid";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        
        {/* About/Mission Section */}
        <ScrollReveal>
          <section id="about" className="py-24 bg-card-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700" 
                    style={{ backgroundImage: `url('/adorable-african-black-kids.jpg')` }}
                  />
               </div>
               <div>
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Our Mission</h2>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
                    Healthcare should never be a privilege. <br /> 
                    <span className="text-primary">For a child, it's a right.</span>
                  </h3>
                  <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
                    Zera Childcare Foundation was born from a simple but urgent question: 
                    what happens to a child whose parents cannot afford treatment when illness strikes? 
                    We exist to answer that question with action.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     <div>
                        <div className="text-3xl font-black text-foreground mb-1">68+</div>
                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Children supported</div>
                     </div>
                     <div>
                        <div className="text-3xl font-black text-foreground mb-1">2021</div>
                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Founded</div>
                     </div>
                     <div>
                        <div className="text-3xl font-black text-foreground mb-1">Lagos</div>
                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Based in Nigeria</div>
                     </div>
                     <div>
                        <div className="text-3xl font-black text-foreground mb-1">2</div>
                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Programmes</div>
                     </div>
                  </div>
               </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <CausesGrid />
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <section id="impact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <span className="text-sm font-semibold text-foreground/80">Testimonials</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-foreground">Stories Bringing Hope</h3>
                </div>
                <div className="max-w-md">
                  <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                    Real stories from those we've helped and those who help sharing the hope & heart.
                  </p>
                  <Link href="/impact" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    Read More Impact Stories
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                  </Link>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="relative rounded-[2.5rem] overflow-hidden min-h-[600px] shadow-2xl group">
                <Image 
                  src="/close-up-cute-little-girl-portrait.jpg" 
                  alt="Impact Story" 
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center">
                  <div className="max-w-2xl">
                    <p className="text-2xl md:text-4xl text-white font-bold leading-tight mb-8">
                      The child's mum was so distressed. But because of this foundation last time I called, she said the child is walking fine now.
                    </p>
                    <p className="text-white/80 text-xl font-medium">
                      - Nurse Chukwura, <span className="text-primary/80">LASUTH Paediatric Unit</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <section className="py-12 px-6 overflow-hidden">
             <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:py-12 md:px-16 relative overflow-hidden shadow-2xl shadow-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="relative z-10 text-center md:text-left">
                      <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
                        Ready to make <br /> 
                        <span className="text-white">a difference?</span>
                      </h2>
                      <p className="text-black/70 text-lg md:text-xl mb-8 font-medium max-w-lg mx-auto md:mx-0">
                        Your support can provide a child with medical care, clean water, 
                        and a hope for the future. Start today.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                         <Link href="/donate" className="w-full sm:w-auto">
                           <button className="w-full bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-secondary/40">
                              Donate Now
                           </button>
                         </Link>
                         <Link href="/contact" className="w-full sm:w-auto">
                           <button className="w-full bg-white/20 backdrop-blur-md text-black border border-white/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all">
                              Volunteer
                           </button>
                         </Link>
                      </div>
                   </div>
                   
                   <div className="relative flex justify-center items-center">
                      <div className="relative w-full max-w-[600px] aspect-square rounded-3xl overflow-hidden shadow-2xl md:-mr-20 lg:-mr-32 border-4 border-white/20">
                         <Image 
                           src="/medium-shot-smiley-kid-outdoors.jpg" 
                           alt="Smiley Kid" 
                           fill
                           className="object-cover"
                         />
                      </div>
                   </div>
                </div>
                
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
             </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
