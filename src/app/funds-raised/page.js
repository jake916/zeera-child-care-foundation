"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function formatNaira(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

const donorData = {
  "2019": {
    label: "Founding Supporters",
    type: "founding",
    entries: [
      { name: "Laide Adepetu", amount: "₦25,000", raw: 25000 },
      { name: "Ayo Agbebi", amount: "₦30,000", raw: 30000 },
      { name: "Kayode Obagbemi", amount: "₦30,000", raw: 30000 },
      { name: "Motunrayo Balogun", amount: "₦20,000", raw: 20000 },
      { name: "Toke Adegbola", amount: "₦20,000", raw: 20000 },
      { name: "Akeem Amusa", amount: "₦20,000", raw: 20000 },
      { name: "Gbenga", amount: "₦20,000", raw: 20000 },
      { name: "Anjola Onajobi", amount: "₦50,000", raw: 50000 },
      { name: "Aduraseyi Adeoye", amount: "₦10,000", raw: 10000 },
      { name: "Bunmi Obagbemi", amount: "₦50,000", raw: 50000 },
    ],
  },
  "2020": {
    label: "Founding Supporters",
    type: "founding",
    entries: [
      { name: "Ayo Agbebi", amount: "₦200,000", raw: 200000 },
      { name: "Bunmi Obagbemi", amount: "₦100,000", raw: 100000 },
      { name: "Kayode Obagbemi", amount: "₦75,000", raw: 75000 },
      { name: "Tolu Oyemade", amount: "₦75,000", raw: 75000 },
      { name: "Anjola Onajobi", amount: "₦70,000", raw: 70000 },
      { name: "Biodun Okeneye", amount: "₦50,000", raw: 50000 },
      { name: "Kunle Babalola", amount: "₦50,000", raw: 50000 },
      { name: "Funmi Odesina", amount: "₦50,000", raw: 50000 },
      { name: "Laide Adepetu", amount: "₦35,000", raw: 35000 },
      { name: "Dr Bunmi Okegbemiro", amount: "₦30,000", raw: 30000 },
      { name: "Segun Craig", amount: "₦25,000", raw: 25000 },
      { name: "Sunkanmi Ojelabi", amount: "₦25,000", raw: 25000 },
      { name: "Akeem Amusa", amount: "₦25,000", raw: 25000 },
      { name: "Ope Majekodunmi", amount: "₦20,000", raw: 20000 },
      { name: "Motunrayo Balogun", amount: "₦20,000", raw: 20000 },
      { name: "Enitan Daramola", amount: "₦20,000", raw: 20000 },
      { name: "Toke Adegbola", amount: "₦20,000", raw: 20000 },
      { name: "Maccoy Adedeji", amount: "₦20,000", raw: 20000 },
      { name: "Fikayo Onabiyi", amount: "₦15,000", raw: 15000 },
      { name: "Mrs Adejoke Craig", amount: "₦10,000", raw: 10000 },
      { name: "Dr Tolu Puddicombe", amount: "₦10,000", raw: 10000 },
      { name: "Gbenga Obagbemi", amount: "₦5,000", raw: 5000 },
      { name: "Ayo Agbebi", amount: "₦1,000,000", raw: 1000000 },
    ],
  },
  "2021": {
    label: "Founding Supporters",
    type: "founding",
    entries: [
      { name: "Kayode Obagbemi", amount: "₦100,000", raw: 100000 },
      { name: "Enitan Daramola", amount: "₦50,000", raw: 50000 },
      { name: "Dr Bunmi Okegbemiro", amount: "₦73,000", raw: 73000 },
      { name: "Ope Majekodunmi", amount: "₦30,000", raw: 30000 },
      { name: "Motunrayo Balogun", amount: "₦50,000", raw: 50000 },
      { name: "Bunmi Obagbemi", amount: "₦200,000", raw: 200000 },
      { name: "Laide Adepetu", amount: "₦50,000", raw: 50000 },
      { name: "Adejoke Craig", amount: "₦20,000", raw: 20000 },
      { name: "The Ojelabis", amount: "₦80,000", raw: 80000 },
      { name: "Gbenja Bamkefa", amount: "₦200,000", raw: 200000 },
      { name: "Anjola Onajobi", amount: "₦50,000", raw: 50000 },
      { name: "Ayo Agbebi", amount: "₦100,000", raw: 100000 },
      { name: "Akeem Amusa", amount: "₦25,000", raw: 25000 },
      { name: "Kunle Babalola", amount: "₦50,000", raw: 50000 },
      { name: "Bambo Oluwasuji", amount: "₦10,000", raw: 10000 },
      { name: "Ebun Oluwasuji", amount: "₦5,000", raw: 5000 },
      { name: "Kayode Obagbemi", amount: "₦25,000", raw: 25000 },
      { name: "Ayo Agbebi", amount: "₦20,000", raw: 20000 },
      { name: "Bunmi Obagbemi", amount: "₦20,000", raw: 20000 },
      { name: "Martins Awofisayo", amount: "₦25,000", raw: 25000 },
      { name: "Oyeronke Babalola", amount: "₦20,000", raw: 20000 },
      { name: "Kunle Craig", amount: "₦10,000", raw: 10000 },
      { name: "Anne Azuh", amount: "₦10,000", raw: 10000 },
      { name: "Sunkanmi Ojelabi", amount: "₦20,000", raw: 20000 },
      { name: "Toke Adegbola", amount: "₦10,000", raw: 10000 },
      { name: "Aarinola Lydia Aruleba", amount: "₦20,000", raw: 20000 },
      { name: "Ope Majekodunmi", amount: "₦30,000", raw: 30000 },
      { name: "Yele Adenika", amount: "₦20,000", raw: 20000 },
      { name: "Adejoke Craig", amount: "₦10,000", raw: 10000 },
      { name: "Anonymous", amount: "₦50,000", raw: 50000 },
      { name: "Sarah Igbekele Jegede", amount: "₦2,000", raw: 2000 },
      { name: "Fidelia Ibeh", amount: "₦10,000", raw: 10000 },
      { name: "Kunle Babalola", amount: "₦50,000", raw: 50000 },
    ],
  },
  "2022": {
    label: "Ongoing Supporters",
    type: "ongoing",
    entries: [
      { date: "6 Dec 2022", name: "Bunmi Ijanusi", amount: "₦71,600", raw: 71600 },
      { date: "7 Dec 2022", name: "Bunmi Obagbemi", amount: "₦100,000", raw: 100000 },
      { date: "6 Dec 2022", name: "Ope Majekodunmi", amount: "₦35,000", raw: 35000 },
      { date: "18 Dec 2022", name: "Laide Adepetu", amount: "₦50,000", raw: 50000 },
      { date: "20 Dec 2022", name: "Kayode Obagbemi", amount: "₦120,000", raw: 120000 },
      { date: "24 Dec 2022", name: "Ayodele Agbebi", amount: "₦100,000", raw: 100000 },
      { date: "26 Dec 2022", name: "Toke Adegbola", amount: "₦25,000", raw: 25000 },
      { date: "28 Dec 2022", name: "Anjola Onajobi", amount: "₦150,000", raw: 150000 },
    ],
  },
  "2023": {
    label: "Ongoing Supporters",
    type: "ongoing",
    entries: [
      { date: "5 Apr 2023", name: "Damola Fabiyi", amount: "₦10,000", raw: 10000 },
      { date: "21 Apr 2023", name: "Joba Akinjo", amount: "₦40,000", raw: 40000 },
      { date: "12 May 2023", name: "Kunle Babalola", amount: "₦50,000", raw: 50000 },
      { date: "5 Aug 2023", name: "Anonymous", amount: "₦78,500", raw: 78500 },
      { date: "16 Aug 2023", name: "Anonymous", amount: "₦200,000", raw: 200000 },
      { date: "28 May 2023", name: "Adeola Awonusi", amount: "₦50,000", raw: 50000 },
      { date: "29 May 2023", name: "Sunkanmi Ojelabi", amount: "₦30,000", raw: 30000 },
      { date: "29 May 2023", name: "Laide Adepetu", amount: "₦10,000", raw: 10000 },
      { date: "29 May 2023", name: "Anjola Onajobi", amount: "₦75,000", raw: 75000 },
      { date: "29 May 2023", name: "Kayode Obagbemi", amount: "₦20,000", raw: 20000 },
      { date: "29 May 2023", name: "Ayo Agbebi", amount: "₦70,000", raw: 70000 },
      { date: "30 May 2023", name: "Enitan Daramola", amount: "₦100,000", raw: 100000 },
      { date: "31 May 2023", name: "Olawale Ibrahim Temitope", amount: "₦50,000", raw: 50000 },
      { date: "30 May 2023", name: "Akeem Amusa", amount: "₦10,000", raw: 10000 },
      { date: "24 Oct 2023", name: "Kayode Obagbemi", amount: "₦50,000", raw: 50000 },
      { date: "24 Oct 2023", name: "Ope Majekodunmi", amount: "₦40,000", raw: 40000 },
      { date: "25 Oct 2023", name: "Doyin Craig", amount: "₦50,000", raw: 50000 },
      { date: "26 Oct 2023", name: "Ngozi Craig", amount: "₦5,000", raw: 5000 },
      { date: "27 Oct 2023", name: "Olatosi Bankole Adeyemi", amount: "₦50,000", raw: 50000 },
      { date: "27 Oct 2023", name: "Ayodele Agbebi", amount: "₦143,608", raw: 143608 },
      { date: "28 Oct 2023", name: "Akeem Amusa", amount: "₦25,000", raw: 25000 },
      { date: "28 Oct 2023", name: "Motunrayo Balogun's sister", amount: "₦30,000", raw: 30000 },
      { date: "29 Oct 2023", name: "Yewande Celilia Oyekan & friends", amount: "₦50,000", raw: 50000 },
      { date: "30 Oct 2023", name: "Biodun Okeneye", amount: "₦50,000", raw: 50000 },
      { date: "4 Nov 2023", name: "Sunkanmi Ojelabi", amount: "₦70,000", raw: 70000 },
      { date: "4 Nov 2023", name: "Olumide Shotomiwa", amount: "₦30,000", raw: 30000 },
      { date: "4 Nov 2023", name: "Ayoyemi Jegede", amount: "₦25,610", raw: 25610 },
      { date: "4 Nov 2023", name: "Seun Shotomiwa", amount: "₦100,000", raw: 100000 },
      { date: "1 Dec 2023", name: "Biodun Okeneye", amount: "₦150,000", raw: 150000 },
      { date: "14 Dec 2023", name: "Dr Bunmi Ijanusi", amount: "₦104,000", raw: 104000 },
      { date: "8 Dec 2023", name: "Kayode Obagbemi", amount: "₦50,000", raw: 50000 },
    ],
  },
  "2024": {
    label: "Ongoing Supporters",
    type: "ongoing",
    entries: [
      { date: "19 Mar 2024", name: "Pharm Dayo & Dr Ronke Adesiyan", amount: "₦20,000", raw: 20000 },
      { date: "26 Mar 2024", name: "Bunmi Obagbemi", amount: "₦250,000", raw: 250000 },
      { date: "4 Apr 2024", name: "Adejoke Craig", amount: "₦50,000", raw: 50000 },
      { date: "9 Feb 2024", name: "Bunmi Obagbemi", amount: "₦5,000", raw: 5000 },
      { date: "10 Jun 2024", name: "Anonymous", amount: "₦200,000", raw: 200000 },
      { date: "12 Jan 2024", name: "Biodun Okeneye", amount: "₦100,000", raw: 100000 },
      { date: "12 Sep 2024", name: "Kayode Obagbemi", amount: "₦150,000", raw: 150000 },
      { date: "13 Dec 2024", name: "Akeem Amusa", amount: "₦25,000", raw: 25000 },
      { date: "23 Dec 2024", name: "Ayo Agbebi & Anonymous", amount: "₦350,000", raw: 350000 },
    ],
  },
  "2025": {
    label: "Ongoing Supporters",
    type: "ongoing",
    entries: [
      { date: "14 Apr 2025", name: "Abosede Ojo", amount: "₦200,000", raw: 200000 },
      { date: "16 May 2025", name: "Bunmi Obagbemi", amount: "₦50,000", raw: 50000 },
      { date: "12 Aug 2025", name: "Bunmi Obagbemi", amount: "₦200,000", raw: 200000 },
      { date: "11 Dec 2025", name: "Adejoke Craig", amount: "₦200,000", raw: 200000 },
      { date: "17 Dec 2025", name: "Fikayo Onabiyi", amount: "₦40,000", raw: 40000 },
      { date: "22 Dec 2025", name: "Kayode Obagbemi", amount: "₦150,000", raw: 150000 },
      { date: "22 Dec 2025", name: "Toyin Lawal", amount: "₦25,000", raw: 25000 },
      { date: "22 Dec 2025", name: "Ayo Agbebi", amount: "₦100,000", raw: 100000 },
    ],
  },
};

const years = Object.keys(donorData);

function getTotal(entries) {
  return entries.reduce((sum, e) => sum + (e.raw || 0), 0);
}

export default function FundsRaisedPage() {
  const [activeYear, setActiveYear] = useState("2019");
  const active = donorData[activeYear];
  const yearTotal = getTotal(active.entries);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <Image
            src="/person-giving-friend-cash-gift-envelope.jpg"
            alt="Funds Raised"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center px-6">
            <ScrollReveal>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Transparency &amp; Trust</p>
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-none">
                Funds Raised
              </h1>
              <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                Every naira given is an act of faith in the life of a child. Here is a record of every generous soul who made our work possible.
              </p>
            </ScrollReveal>
          </div>
          {/* Scroll indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* Tabs + Content */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <p className="text-center text-foreground/40 font-bold uppercase tracking-widest text-xs mb-12">Select a year to view supporters</p>

              {/* Year Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 border ${
                      activeYear === year
                        ? "bg-primary text-black border-primary shadow-lg shadow-primary/20 scale-105"
                        : "bg-transparent text-foreground/50 border-black/10 hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Tab Content */}
            <div key={activeYear} className="animate-in fade-in duration-500">
              {/* Year header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
                  active.type === "founding"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}>
                  {active.type === "founding" ? "★ Founding Supporter" : "Ongoing Supporter"}
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">{activeYear}</h2>
                <p className="text-foreground/40 mt-2 font-medium">{active.entries.length} contributor{active.entries.length !== 1 ? "s" : ""}</p>
              </div>

              {/* Cards */}
              {active.type === "founding" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {active.entries.map((entry, i) => (
                    <div
                      key={i}
                      className="bg-card-bg rounded-[2rem] px-8 py-6 border border-black/5 hover:border-primary/30 hover:shadow-xl transition-all group flex items-center justify-between gap-4"
                    >
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                        {entry.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-foreground text-[15px] truncate">{entry.name}</div>
                        <div className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-0.5">Seed Donation</div>
                      </div>
                      <div className="text-primary font-black text-sm shrink-0">{entry.amount}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Table header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-3 text-xs font-bold uppercase tracking-widest text-foreground/30">
                    <div className="col-span-3">Date</div>
                    <div className="col-span-6">Donor</div>
                    <div className="col-span-3 text-right">Amount</div>
                  </div>
                  {active.entries.map((entry, i) => (
                    <div
                      key={i}
                      className="bg-card-bg rounded-[1.5rem] px-8 py-5 border border-black/5 hover:border-primary/30 hover:shadow-lg transition-all group"
                    >
                      {/* Mobile */}
                      <div className="md:hidden flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                            {entry.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-sm">{entry.name}</div>
                            <div className="text-xs text-foreground/40 mt-0.5">{entry.date}</div>
                          </div>
                        </div>
                        <div className="text-primary font-black text-sm">{entry.amount}</div>
                      </div>
                      {/* Desktop */}
                      <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 text-sm text-foreground/50 font-medium">{entry.date}</div>
                        <div className="col-span-6 flex items-center gap-4">
                          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                            {entry.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold text-foreground">{entry.name}</span>
                        </div>
                        <div className="col-span-3 text-right text-primary font-black">{entry.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Total bar */}
              <div className="mt-10 bg-black rounded-[2rem] px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-white/40 font-bold uppercase tracking-widest text-xs mb-2">{activeYear} Total Contributors</div>
                  <div className="text-white font-black text-3xl">{active.entries.length} <span className="text-primary text-xl font-bold">Supporters</span></div>
                </div>
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                  <div className="text-white/40 font-bold uppercase tracking-widest text-xs mb-2">{activeYear} Total Amount Raised</div>
                  <div className="text-primary font-black text-3xl">{formatNaira(yearTotal)}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card-bg">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-6">
                Join our list of <span className="text-primary">heroes.</span>
              </h2>
              <p className="text-foreground/60 text-xl mb-12">
                Your contribution, no matter the size, gives a child a fighting chance at life.
              </p>
              <a
                href="/donate"
                className="inline-block bg-primary text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-primary/20"
              >
                Donate Today
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
