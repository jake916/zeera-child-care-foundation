import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Cinematic Hero */}
        <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/close-up-cute-little-girl-portrait.jpg" 
              alt="Impact Story" 
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">Impact</h1>
              <p className="text-white/80 text-xl md:text-3xl max-w-3xl mx-auto leading-tight font-medium">
              68 children and many  more to reach, 68 reasons we do this. 
              </p>
            </ScrollReveal>
          </div>
          <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-24 bg-background">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <ScrollReveal>
                 <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Numbers. Stories. Proof of purpose.</h2>
                 <p className="text-2xl md:text-4xl text-foreground font-medium leading-relaxed mb-12">
                   Every number on this page is a child. A family.<br></br> A moment where a life could have gone the 
                   other way and didn't, because someone chose to show up.
                 </p>
              </ScrollReveal>
           </div>
        </section>

        {/* Story 1: Cinematic Full-width */}
        <section className="relative min-h-screen p-7 flex items-center overflow-hidden">
           <div className="absolute inset-0 z-0">
              <Image 
                src="/close-up-cute-little-girl-portrait.jpg" 
                alt="Story 1" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
           </div>
           <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-2xl">
                 <ScrollReveal>
                    <span className="inline-block px-4 py-1 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full mb-8">Story 01</span>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8">She walked again.</h3>
                    <p className="text-white/70 text-xl leading-relaxed mb-10">
                       A young girl came through surgery, but the operation left her unable to walk. 
                       Her mother was distressed and had nowhere to turn. Zera Childcare Foundation stepped in, 
                       funding her treatment and ongoing care. Months later, her mother called with news 
                       that moved everyone: her daughter was walking again.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem]">
                       <p className="text-white text-lg italic mb-6">
                          "The child's mum was so distressed. But because of this foundation last time I called, she said the child is walking fine now."
                       </p>
                       <p className="text-primary font-bold">- Nurse Chukwura, <span className="opacity-60 text-white font-medium">LASUTH Paediatric Unit</span></p>
                    </div>
                 </ScrollReveal>
              </div>
           </div>
        </section>

        {/* Stories Grid */}
        <section className="py-24 bg-background">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 
                 {/* Story 2 */}
                 <ScrollReveal className="bg-card-bg p-12 rounded-[3rem] border border-black/5 hover:shadow-2xl transition-all group">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">Story 02</span>
                    <h4 className="text-3xl font-bold text-foreground mb-6">Four years of faithfulness.</h4>
                    <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                       Jennifer's mother remembers exactly when Zera Childcare Foundation first came to the hospital in 2021. 
                       There were moments when money for treatment simply wasn't there, and each time, the Foundation stepped in.
                    </p>
                    <div className="pl-6 border-l-4 border-secondary py-2 italic text-foreground/80 text-lg">
                       "Since then, my child has been doing quite well. She takes her drugs regularly; she doesn't even look like someone that's still recovering."
                       <p className="mt-4 font-bold text-secondary not-italic">- Jennifer's Mum</p>
                    </div>
                 </ScrollReveal>

                 {/* Story 4 */}
                 <ScrollReveal delay={200} className="bg-card-bg p-12 rounded-[3rem] border border-black/5 hover:shadow-2xl transition-all group">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">Story 03</span>
                    <h4 className="text-3xl font-bold text-foreground mb-6">More than medicine.</h4>
                    <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                       For David's mother, what stands out is not just the medication we bought for her son, it is 
                       that we called to check up on him afterwards. In a world where charity often ends at the transaction, 
                       this family experienced something different: people who kept showing up.
                    </p>
                    <div className="pl-6 border-l-4 border-primary py-2 italic text-foreground/80 text-lg">
                       "Everyday, I am blessing these people from my heart. They are selfless. They call to check up on us my child is feeling better."
                       <p className="mt-4 font-bold text-primary not-italic">-David's Mum</p>
                    </div>
                 </ScrollReveal>

              </div>
           </div>
        </section>

        {/* Story 3: Emotional Full-width */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black py-24">
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <ScrollReveal>
                 <span className="text-primary font-bold uppercase tracking-widest text-sm mb-8 block">Sensitive Story</span>
                 <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">Baby Praise a family held through the hardest season.</h3>
                 <p className="text-white/60 text-xl leading-relaxed mb-12">
                    In 2021, Janet's daughter Praise was admitted for six months. Zera Foundation funded every test 
                    and every medication. Despite everything, Praise passed away. But the Foundation's presence meant 
                    the family was never alone. In Janet's own words, they were held.
                 </p>
                 <div className="max-w-2xl mx-auto border-t border-white/10 pt-12">
                    <p className="text-white text-2xl font-medium italic mb-8">
                       "They are the ones God used to give us the money... in all things, we give thanks to God. I say a big thank you to the foundation."
                    </p>
                    <p className="text-primary font-bold">- Mrs Falolu (Janet), <span className="opacity-60 text-white font-medium">Mother of Baby Praise</span></p>
                 </div>
              </ScrollReveal>
           </div>
        </section>

        {/* Story 5: Cultural / Authentic */}
        <section className="py-24 bg-background overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <ScrollReveal>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                       <Image 
                         src="/medium-shot-smiley-kid-outdoors.jpg" 
                         alt="Chisom's Story" 
                         fill
                         className="object-cover"
                       />
                    </div>
                 </ScrollReveal>
                 <div>
                    <ScrollReveal>
                       <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-6 block">Story 04</span>
                       <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">Chisom is okay now.</h3>
                       <p className="text-foreground/60 text-lg leading-relaxed mb-10">
                          Chisom 13-year-old girl who suffered frequent seizures due to irregular access to medication, a condition that significantly disrupted her schooling and daily life. With consistent support from Zera, she is now seizure-free and has returned to school, continuing her education with renewed stability and hope.
                       </p>
                       <div className="bg-secondary/5 border-l-4 border-secondary p-8 rounded-r-2xl">
                          <p className="text-foreground text-xl font-bold leading-tight mb-4">
                             "Na God dey do am. For LASUTH wey Chisom been dey, God do miracle. God use them to help us."
                          </p>
                          <p className="text-secondary font-bold">-Chisom's Mum</p>
                       </div>
                    </ScrollReveal>
                 </div>
              </div>
           </div>
        </section>

        {/* How We Measure Impact */}
        <section className="py-24 bg-card-bg">
           <div className="max-w-5xl mx-auto px-6">
              <ScrollReveal className="text-center mb-16">
                 <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8">Accountability is part of our DNA.</h3>
                 <div className="space-y-8 text-foreground/60 text-xl leading-relaxed text-left md:text-center">
                    <p>
                       We measure success not in events run or funds raised, but in health outcomes. 
                       A child supported by Zera Childcare Foundation is a success story when their condition is 
                       treated before complications set in.
                    </p>
                    <p>
                       We track every case: the child, the diagnosis, the intervention provided, and the outcome. 
                       We believe that transparency in impact is not optional, it is the foundation of trust.
                    </p>
                 </div>
              </ScrollReveal>
           </div>
        </section>

        {/* Final CTA */}
        <ScrollReveal>
          <section className="py-24 px-6">
             <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:py-20 text-center relative overflow-hidden">
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8">Be part of the next story.</h2>
                <Link href="/donate" className="inline-block bg-secondary text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform shadow-2xl shadow-secondary/40">
                   Donate Today
                </Link>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
             </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
