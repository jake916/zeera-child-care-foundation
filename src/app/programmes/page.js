import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/close-up-community-concept-with-hands.jpg" 
              alt="Our Programmes" 
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">Our Programmes</h1>
              <p className="text-white/80 text-xl md:text-3xl max-w-2xl mx-auto leading-relaxed font-medium">
                What we do. How we do it. Who qualifies.
              </p>
            </ScrollReveal>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* Page Intro */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Our Approach</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 leading-tight">
                We don't wait for change. <br /> 
                <span className="text-primary">We go where the need is.</span>
              </h3>
              <p className="text-xl text-foreground/60 leading-relaxed">
                At Zera Childcare Foundation, our programmes are built around one principle: direct, 
                hands-on intervention. We go into government hospitals, sit with families, assess needs, and act. 
                No red tape. No long waiting lists. Just support, delivered where it is needed most.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Programme 1: Hospital Outreach */}
        <section className="py-24 bg-card-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <ScrollReveal>
                <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                   <Image 
                     src="/interior-view-operating-room.jpg" 
                     alt="Hospital Outreach - Operating Room" 
                     fill
                     className="object-cover"
                   />
                </div>
              </ScrollReveal>
              <div>
                <ScrollReveal>
                  <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Programme 01</h2>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Hospital Outreach Programme</h3>
                  <p className="text-primary font-bold text-xl mb-8 italic">"At the bedside. When it matters most."</p>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                    Our flagship programme operates primarily at the Lagos State University Teaching Hospital 
                    (LASUTH) Paediatric Unit, one of the busiest government hospitals in Lagos. 
                    Our team regularly visits the wards, identifying children from vulnerable families 
                    who cannot afford the cost of treatment.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Outreach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <ScrollReveal delay={100} className="bg-background p-8 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group duration-500">
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Surgeries</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                    We fund emergency and scheduled surgical procedures for children whose families cannot bear the cost.
                  </p>
               </ScrollReveal>
               <ScrollReveal delay={200} className="bg-background p-8 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group duration-500">
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Medications</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                    We purchase essential medications that families are unable to afford, ensuring no child goes without treatment.
                  </p>
               </ScrollReveal>
               <ScrollReveal delay={300} className="bg-background p-8 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group duration-500">
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Tests & Scans</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                    We cover the cost of medical investigations blood tests, scans, and diagnostics critical to accurate diagnosis.
                  </p>
               </ScrollReveal>
               <ScrollReveal delay={400} className="bg-background p-8 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group duration-500">
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Unpaid Bills</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                    We settle outstanding hospital bills for children who have been medically discharged but remain in the ward.
                  </p>
               </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Programme 2: Special Needs */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Programme 02</h2>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Special Needs Intervention</h3>
                  <p className="text-secondary font-bold text-xl mb-8 italic">"Every child deserves to thrive, not just survive."</p>
                  <div className="space-y-6 text-foreground/60 text-lg leading-relaxed">
                    <p>
                      For children living with special needs in underserved and remote communities, access to 
                      specialist care is often non-existent. Our Special Needs Intervention Programme bridges 
                      this gap, connecting children with therapy and specialist support.
                    </p>
                    <p>
                      We focus particularly on timely interventions because for many conditions, early support 
                      makes the difference between a child who develops fully and one who is left behind.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal className="order-1 lg:order-2">
                <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                   <Image 
                     src="/father-putting-his-daughter-car-chair-children.jpg" 
                     alt="Special Needs Support - Car Chair" 
                     fill
                     className="object-cover"
                   />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who Qualifies Section */}
        <section className="py-24 bg-primary text-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-6 opacity-60">Eligibility</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8">Does your child qualify for support?</h3>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
                We support children aged 0–17 years who are currently receiving treatment in 
                government-owned hospitals in Lagos State, from families with limited financial means.
              </p>
              <div className="bg-white/20 backdrop-blur-md border border-black/10 p-10 rounded-[2.5rem] mb-12">
                <p className="text-lg leading-relaxed">
                  If your child requires a surgery, medication, diagnostic test, or has an unpaid hospital bill preventing their discharge we want to hear from you.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-4 bg-secondary text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-secondary/20">
                Contact Us to Apply 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
