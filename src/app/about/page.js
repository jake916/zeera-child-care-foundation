import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/medium-shot-boys-hugging.jpg" 
              alt="Our Story" 
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">About Us</h1>
              <p className="text-white/90 text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-tight">
                We exist because every child's life matters.
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

        {/* Intro Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <p className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed">
                Zera Childcare Foundation is a Lagos-based non-governmental organisation committed to 
                ensuring that vulnerable children receive the medical care they need regardless of what 
                their families can afford.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-card-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                   <Image 
                     src="/cute-black-baby-home-with-parents.jpg" 
                     alt="A child with parents at home" 
                     fill
                     className="object-cover"
                   />
                </div>
              </ScrollReveal>
              <div>
                <ScrollReveal>
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Our Story</h2>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
                    Born from compassion. <br /> 
                    <span className="text-primary">Built on purpose.</span>
                  </h3>
                  <div className="space-y-6 text-foreground/60 text-lg leading-relaxed">
                    <p>
                      Zera Childcare Foundation did not begin with a strategy. It began with a question 
                      a question that refused to go away: What happens to children whose parents cannot 
                      afford treatment when illness strikes?
                    </p>
                    <p>
                      That question became a calling. In 2021, the Foundation was established to stand in 
                      the gap for vulnerable children and their families to ensure that a child's chance 
                      at life is never reduced to a matter of finances.
                    </p>
                    <p>
                      Today, we operate with hands-on presence in government hospital paediatric units 
                      across Lagos, carrying that original calling forward-one child at a time.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Immersive Image */}
        <ScrollReveal>
          <section className="w-full h-[90vh] relative overflow-hidden">
            <Image 
              src="/close-up-kids-taking-selfie-together.jpg" 
              alt="Kids taking selfie" 
              fill
              className="object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </section>
        </ScrollReveal>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal className="bg-primary p-12 rounded-[3rem] text-black">
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Our Mission</h4>
                 <p className="text-2xl md:text-3xl font-bold leading-tight">
                   Creating a platform where support is provided for vulnerable children to access 
                   the healthcare they need and deserve.
                 </p>
              </ScrollReveal>
              <ScrollReveal delay={100} className="bg-secondary p-12 rounded-[3rem] text-white">
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Our Vision</h4>
                 <p className="text-2xl md:text-3xl font-bold leading-tight">
                   A world where every child has a chance to live where illness is met with care, 
                   not helplessness, and where no family faces a medical crisis alone.
                 </p>
              </ScrollReveal>
           </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-card-bg">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Values</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">What guides everything we do</h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal delay={100} className="bg-background p-10 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group ">
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Transparency</h4>
                <p className="text-foreground/60 leading-relaxed group-hover:text-black/80 transition-colors">
                  We are open about where every donation goes. Donors, partners, and families can trust that our resources go directly to the children who need them. 
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="bg-background p-10 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group ">
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Service with Honour</h4>
                <p className="text-foreground/60 leading-relaxed group-hover:text-black/80 transition-colors">
                  We serve with integrity, compassion, and excellence, ensuring that every child is supported with dignity and respect. We are committed to connecting vulnerable children to the medical care they need, advocating for their wellbeing, and standing by families throughout their healthcare journey.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} className="bg-background p-10 rounded-[2.5rem] border border-black/5 hover:bg-primary hover:shadow-2xl transition-all group duration-500">
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-black transition-colors">Faith in God</h4>
                <p className="text-foreground/60 leading-relaxed group-hover:text-black/80 transition-colors">
                  We are guided by our faith in God, trusting in His power to bring healing and restoration to every child we support. This faith fuels our compassion, strengthens our resilience, and inspires our commitment to ensuring that every child can access the care and support they need to live and thrive
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 bg-background">
           <div className="max-w-5xl mx-auto px-6 text-center">
              <ScrollReveal>
                 <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Who We Serve</h2>
                 <h3 className="text-3xl md:text-5xl font-extrabold text-foreground mb-10">Children who need us most.</h3>
                 <p className="text-foreground/60 text-lg md:text-xl leading-relaxed mb-8">
                   We support children aged 0–17 from low-income families who require access to medical care, therapeutic interventions, and other essential support services. 
                 </p>
                 <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                   Our work includes assisting children receiving treatment in government-owned general hospitals across Lagos State, as well as children with special needs who require timely intervention and ongoing care.
 We prioritise cases where treatment, therapy, medication, or other interventions can significantly improve a child’s health, development, and quality of life.
                 </p>
              </ScrollReveal>
           </div>
        </section>


        {/* CTA Section */}
        <ScrollReveal>
          <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto bg-card-bg rounded-[3rem] p-8 md:py-16 md:px-20 relative overflow-hidden shadow-2xl border border-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative z-10 text-center md:text-left">
                      <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
                        Be part of our <br /> 
                        <span className="text-primary">next success story.</span>
                      </h2>
                      <p className="text-foreground/60 text-lg md:text-xl mb-12 font-medium max-w-lg mx-auto md:mx-0">
                        Whether through donations or volunteering, you can help us save a child's life today.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <Link href="/" className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform text-center">
                            Donate Now
                        </Link>
                        <Link href="/" className="w-full sm:w-auto bg-white text-black border-2 border-black/5 px-10 py-5 rounded-full font-bold text-xl hover:bg-black/5 transition-all text-center">
                            Join Us
                        </Link>
                      </div>
                  </div>
                  
                  <div className="relative flex justify-center items-center">
                      <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <Image 
                          src="/medium-shot-smiley-kid-outdoors.jpg" 
                          alt="Smiley Kid" 
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
