import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function DonatePage() {
   return (
      <div className="min-h-screen bg-background">
         <Navbar />
         <main>
            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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
                        <h4 className="text-2xl font-bold text-foreground mb-4">100% to children</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           Every donation goes directly to covering medical costs for the children we support. We operate with lean overheads and full accountability.
                        </p>
                     </ScrollReveal>
                     <ScrollReveal delay={200} className="bg-background p-10 rounded-[3rem] border border-black/5">
                        <h4 className="text-2xl font-bold text-foreground mb-4">Immediate impact</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           When you donate, we deploy the funds quickly. There is no lengthy approval process, a child in need gets help as fast as possible.
                        </p>
                     </ScrollReveal>
                     <ScrollReveal delay={300} className="bg-background p-10 rounded-[3rem] border border-black/5">
                        <h4 className="text-2xl font-bold text-foreground mb-4">Full transparency</h4>
                        <p className="text-foreground/60 leading-relaxed">
                           We track and report every naira. Donors receive updates on how their contributions have been used.
                        </p>
                     </ScrollReveal>
                  </div>
               </div>
            </section>

            {/* Donation Tiers */}
            <section className="py-24 bg-background">
               <div className="max-w-7xl mx-auto px-6">
                  <ScrollReveal className="text-center mb-16">
                     <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Every amount makes a difference</h2>
                     <h3 className="text-4xl md:text-6xl font-black text-foreground">Our suggested amounts.</h3>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { amount: "₦5,000", desc: "Covers a child's essential medication for one treatment cycle." },
                        { amount: "₦20,000", desc: "Funds a diagnostic scan or series of medical tests." },
                        { amount: "₦50,000", desc: "Pays off an outstanding hospital bill, freeing a child to go home." },
                        { amount: "₦100,000+", desc: "Contributes toward funding a surgical procedure." }
                     ].map((tier, i) => (
                        <ScrollReveal key={i} delay={i * 100} className="group bg-card-bg p-10 rounded-[2.5rem] border border-black/5 hover:border-secondary transition-all hover:shadow-2xl">
                           <div className="text-3xl font-black text-secondary mb-4 group-hover:scale-110 transition-transform origin-left">{tier.amount}</div>
                           <p className="text-foreground/60 leading-relaxed">{tier.desc}</p>
                        </ScrollReveal>
                     ))}
                  </div>
               </div>
            </section>

            {/* Bank Details */}
            <section className="py-24 bg-primary text-black">
               <div className="max-w-4xl mx-auto px-6 text-center">
                  <ScrollReveal>
                     <h2 className="text-sm font-bold tracking-widest uppercase mb-6 opacity-60">Bank Details</h2>
                     <h3 className="text-4xl md:text-7xl font-black mb-12">How to donate.</h3>

                     <div className="bg-white/20 backdrop-blur-md border border-black/10 p-10 md:p-16 rounded-[3rem] text-left">
                        <div className="space-y-10">
                           <div>
                              <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Bank Name</div>
                              <div className="text-3xl font-bold">Zenith Bank</div>
                           </div>
                           <div>
                              <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Account Name</div>
                              <div className="text-3xl font-bold">Zera Childcare Foundation</div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-black/10">
                              <div>
                                 <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Naira Account</div>
                                 <div className="text-3xl font-black tracking-wider">1228224578</div>
                              </div>
                              <div>
                                 <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">USD Domiciliary</div>
                                 <div className="text-3xl font-black tracking-wider">5073145455</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="mt-12 space-y-6">
                        <p className="text-xl font-medium">Please use your name as the payment reference so we can acknowledge your gift.</p>
                        <p className="text-sm opacity-60 font-bold uppercase tracking-widest">GoFundMe link coming soon</p>
                     </div>
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
