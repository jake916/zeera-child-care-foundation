import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const foundingMembersData = [
  {
    name: "Bunmi Obagbemi",
    role: "Founder & CEO",
    image: "/ceo_bunmi_portrait.png",
    bio: [
      "Bunmi is the Founder and CEO of Zera Childcare Foundation. She started the initiative in 2019 with a seed contribution of ₦50,000 and the support of nine friends and colleagues, driven by a desire to ensure that vulnerable children are not denied life-saving care because of financial hardship. What began as a small informal intervention grew into a formally registered foundation in 2021, creating a stronger structure for sustainable impact and expanded support for children in need of medical care.",
      "Her professional background is in banking, with over a decade of experience spanning credit risk management, relationship management, and operations. She has held leadership and management roles at VBank, where she served as Head of Credit & E-Business Operations, and at Access Bank Plc as a Credit Risk and Loan Monitoring Officer.",
      "Bunmi studied Biochemistry at Babcock University and holds an MBA from Lagos Business School. She is an Associate Member of the Chartered Institute of Bankers of Nigeria (ACIB) and a Certified Business Analysis Professional (CBAP).",
      "She remains deeply committed to improving outcomes for underserved children and has led several of the Foundation’s direct interventions, including hospital outreach programmes at Lagos State University Teaching Hospital. Under her leadership, the Foundation has supported children with surgeries, medications, diagnostic tests, hospital bills, therapy support, and ongoing care.",
      "Bunmi is passionate about building sustainable systems of support for vulnerable children and is driven by a vision of a future where no child is denied essential care because of financial hardship."
    ]
  },
  {
    name: "Ayodele Agbebi",
    role: "Executive Chairman",
    image: "/chairman_ayodele_portrait.png",
    bio: [
      "Ayodele is a seasoned finance, risk management, and chartered banking professional with over 27 years of progressive experience in the financial services sector. He has built a distinguished career driving sustainable business growth, strengthening risk governance, and delivering operational excellence.",
      "He holds a BSc in Economics and an MSc in Agricultural Economics from University of Ibadan, an MBA from the European Institute of Leadership & Management, and is also an alumnus of Pan-Atlantic University.",
      "Ayodele is widely respected for his integrity, disciplined leadership, and strong governance principles. As Executive Chairman of Zera Childcare Foundation, he provides strategic direction and institutional guidance that continue to strengthen the Foundation’s growth, accountability, and long-term sustainability. His support and leadership have played an important role in helping Zera expand its reach and deepen its impact on vulnerable children and families.",
      "He is passionate about service, ethical leadership, and creating systems that deliver meaningful and lasting social impact."
    ]
  }
];

export default function FoundingMembersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Cinematic Hero */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/business-people-meeting.jpg" 
              alt="Zera Leadership" 
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                Founding Members
              </h1>
              <p className="text-white/95 text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-tight">
                The visionaries driving our commitment to every child.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Bios Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-32">
              {foundingMembersData.map((member, i) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal key={member.name} delay={i * 100}>
                    <div
                      className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                        isEven ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Image Card */}
                      <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>

                      {/* Bio Content */}
                      <div className="w-full md:w-3/5 space-y-6">
                        <div>
                          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">
                            {member.name}
                          </h2>
                          <div className="text-secondary font-bold uppercase tracking-widest text-sm">
                            {member.role}
                          </div>
                        </div>

                        <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed font-medium">
                          {member.bio.map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
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
                    <Link href="/donate" className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform text-center shadow-xl shadow-secondary/20">
                      Donate Now
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto bg-white text-black border-2 border-black/5 px-10 py-5 rounded-full font-bold text-xl hover:bg-black/5 transition-all text-center">
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
