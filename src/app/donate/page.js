import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BankDetails from "@/components/BankDetails";

export default function DonatePage() {
   return (
      <div className="min-h-screen bg-background">
         <Navbar />
         <main>
            {/* Cinematic Hero */}
            <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <Image
                     src="/close-up-community-concept-with-hands.jpg"
                     alt="Donate to Zera Foundation"
                     fill
                     className="object-cover"
                     priority
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
               </div>
               <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
                  <ScrollReveal>
                     <h1 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase">
                        One act of <span className="text-primary">generosity.</span> <br />
                        One child's future.
                     </h1>
                     <p className="text-white/80 text-xl md:text-3xl max-w-4xl mx-auto leading-tight font-bold tracking-widest uppercase">
                        Your gift. Their fighting chance.
                     </p>
                  </ScrollReveal>
               </div>
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
                     <p className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed">
                        Right now, in a government hospital in Lagos, a child is waiting. Waiting for a surgery their
                        family cannot afford. Waiting for medication that costs more than their parents earn in a
                        week. Waiting for someone to bridge the gap. Your donation closes that gap. It pays a
                        hospital bill. It funds a surgery. It gives a child a fighting chance at life.
                     </p>
                  </ScrollReveal>
               </div>
            </section>

            {/* Why It Matters */}
            <section className="py-24 bg-card-bg border-y border-black/5">
               <div className="max-w-7xl mx-auto px-6">
                  <ScrollReveal className="text-center mb-16">
                     <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Why it matters</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-foreground">Where your money goes.</h3>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <ScrollReveal delay={100} className="bg-background p-10 rounded-[3rem] border border-black/5">
                        <h4 className="text-2xl font-bold text-foreground mb-4">Child-focused giving</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           We are committed to ensuring that donations are used efficiently and responsibly to support children’s healthcare needs and the effective delivery of our programmes.
                        </p>
                     </ScrollReveal>
                     <ScrollReveal delay={200} className="bg-background p-10 rounded-[3rem] border border-black/5">
                        <h4 className="text-2xl font-bold text-foreground mb-4">Timely Support</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           When you donate, we deploy support quickly. There is no lengthy approval process — children in urgent need receive help as fast as possible.
                        </p>
                     </ScrollReveal>
                     <ScrollReveal delay={300} className="bg-background p-10 rounded-[3rem] border border-black/5">
                        <h4 className="text-2xl font-bold text-foreground mb-4">Full transparency</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           We track and report every contribution, and donors receive updates on how their support has been used.
                           
                        </p>
                     </ScrollReveal>
                  </div>
               </div>
            </section>

            {/* Every Amount Makes a Difference */}
            <section className="py-24 bg-background">
               <div className="max-w-5xl mx-auto px-6">
                  <ScrollReveal className="text-center mb-16">
                     <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Every Amount Makes a Difference</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-foreground">How your support helps.</h3>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                        "Helps provide essential medication for a child's treatment",
                        "Supports diagnostic scans and critical medical tests",
                        "Assists families with unpaid hospital bills so children can return home",
                        "Contributes toward life-changing surgical procedures",
                        "Supports therapy and specialist care for children with special needs",
                        "Helps ensure vulnerable children receive timely medical care and intervention when they need it most"
                     ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 100} className="flex gap-6 bg-card-bg p-8 rounded-[2.5rem] border border-black/5 hover:border-primary/30 hover:shadow-2xl transition-all group">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                 <polyline points="20 6 9 17 4 12" />
                              </svg>
                           </div>
                           <p className="text-foreground/80 font-medium text-lg leading-relaxed pt-1.5">{item}</p>
                        </ScrollReveal>
                     ))}
                  </div>
               </div>
            </section>

            {/* Bank Details */}
            <section className="py-24 bg-primary text-black">
               <div className="max-w-7xl mx-auto px-6 text-center">
                  <ScrollReveal>
                     <h2 className="text-sm font-bold tracking-widest uppercase mb-6 opacity-60">Bank Details</h2>
                     <h3 className="text-4xl md:text-7xl font-black mb-6">How to donate.</h3>
                     
                     <BankDetails />

                     {/* <div className="mt-16 space-y-6">
                        <p className="text-xl font-medium">Please use your name as the payment reference so we can acknowledge your gift.</p>
                        <p className="text-sm opacity-60 font-bold uppercase tracking-widest">GoFundMe link coming soon</p>
                     </div> */}
                  </ScrollReveal>
               </div>
            </section>

            {/* Corporate Giving */}
            <section className="py-24 bg-background">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="bg-black text-white rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                           <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Corporate Giving</h2>
                           <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Partner with us as an organisation.</h3>
                           <p className="text-white/60 text-xl leading-relaxed mb-10">
                              Businesses and corporate organisations play a powerful role in transforming communities.
                              If your company is looking for a meaningful CSR partnership, we would love to work with you.
                           </p>
                           <a href="mailto:zerachildcare@gmail.com" className="inline-flex items-center gap-4 bg-primary text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
                              Get in touch
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                           </a>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                           <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
                              <h4 className="text-2xl font-bold mb-6">Our promise to you</h4>
                              <p className="text-white/60 leading-relaxed text-lg">
                                 Zera Childcare Foundation is committed to full transparency in how every donation is used.
                                 We do not believe in charity for the sake of it, we believe in dignified, accountable service.
                                 When you give, you will know where it went.
                              </p>
                           </div>
                        </ScrollReveal>
                     </div>
                     {/* Decorative background circle */}
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
