"use client";
import React, { useState } from "react";

const BankDetails = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto text-left mt-12">
      {/* Naira Account Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-black/5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-8">
            <span className="bg-secondary/10 text-secondary px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">Naira Account</span>
            {copiedText === "naira" ? (
              <span className="text-emerald-600 font-bold text-sm animate-pulse">✓ Copied!</span>
            ) : null}
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Bank Name</div>
              <div className="text-2xl font-bold text-foreground">Union Bank of Nigeria Plc</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Account Name</div>
              <div className="text-2xl font-bold text-foreground">Zera Childcare Foundation</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Account Number</div>
              <div className="flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black tracking-wider text-foreground">0205740900</span>
                <button 
                  onClick={() => handleCopy("0205740900", "naira")}
                  className="p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors group cursor-pointer"
                  title="Copy Account Number"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/60 group-hover:scale-110 transition-transform">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USD Domiciliary Account Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-black/5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-8">
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">USD Domiciliary</span>
            {copiedText === "usd" ? (
              <span className="text-emerald-600 font-bold text-sm animate-pulse">✓ Copied!</span>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Bank Name</div>
                <div className="text-xl font-bold text-foreground">Union Bank of Nigeria Plc</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Branch</div>
                <div className="text-xl font-bold text-foreground">Oba Akran Avenue, Ikeja</div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Account Name</div>
              <div className="text-xl font-bold text-foreground">Zera Childcare Foundation</div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Account Number</div>
              <div className="flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black tracking-wider text-foreground">0238408107</span>
                <button 
                  onClick={() => handleCopy("0238408107", "usd")}
                  className="p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors group cursor-pointer"
                  title="Copy Account Number"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/60 group-hover:scale-110 transition-transform">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Swift Code</div>
                <div className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span>UBNINGLA</span>
                  <button 
                    onClick={() => handleCopy("UBNINGLA", "swift")}
                    className="p-1.5 hover:bg-black/5 rounded transition-colors"
                    title="Copy Swift Code"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                  {copiedText === "swift" && <span className="text-[10px] text-emerald-600 font-bold">✓ Copied</span>}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Routing Code</div>
                <div className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span>CITIUS33</span>
                  <button 
                    onClick={() => handleCopy("CITIUS33", "routing")}
                    className="p-1.5 hover:bg-black/5 rounded transition-colors"
                    title="Copy Routing Code"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                  {copiedText === "routing" && <span className="text-[10px] text-emerald-600 font-bold">✓ Copied</span>}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Intermediate / Correspondent Bank</div>
              <div className="text-base font-bold text-foreground">CITIBANK NEWYORK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
