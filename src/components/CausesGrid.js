import React from "react";
import Image from "next/image";
import Link from "next/link";

const causes = [
  {
    id: 1,
    title: "Hospital Outreach Programme",
    tagline: "At the bedside. When it matters most.",
    description: "We visit the paediatric unit at LASUTH and other government hospitals, identifying children from low-income families who need urgent medical support. We pay bills, fund surgeries, and provide medications so treatment is never delayed.",
    image: "/closeup-shot-boy-doctor-wearing-sanitary-masks.jpg",
  },
  {
    id: 2,
    title: "Special Needs Intervention",
    tagline: "Every child deserves to thrive not just survive.",
    description: "We support children with special needs from underserved communities particularly those who need timely intervention to improve their quality of life. Speech therapy, occupational therapy, and specialist care, made accessible.",
    image: "/african-kid-marketplace.jpg",
  },
];

const CausesGrid = () => {
  return (
    <section id="programmes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">How We Help</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Real intervention. <br /> 
              <span className="text-primary">Real impact.</span>
            </h3>
          </div>
          <Link href="/programmes" className="text-foreground font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            Learn More About Our Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} className="group bg-card-bg border border-card-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={cause.image} 
                  alt={cause.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cause.title}
                </h4>
                <p className="text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                  {cause.tagline}
                </p>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  {cause.description}
                </p>
                
                <div className="mt-auto">
                   <Link href="/programmes">
                     <button className="w-full py-4 bg-primary/5 border border-primary/10 rounded-2xl font-bold hover:bg-secondary hover:text-white hover:border-secondary transition-all text-foreground hover:text-white">
                       Support this Programme
                     </button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesGrid;
