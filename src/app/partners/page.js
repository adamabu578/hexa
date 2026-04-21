"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Handshake, Rocket, Zap, ShieldCheck, TrendingUp, Megaphone } from 'lucide-react';

const partnerTypes = {
  gsi: {
    label: 'Global System Integrators',
    logos: ['Accenture', 'Infosys', 'DXC Technology', 'HCL Technologies', 'Hexaware Technologies', 'IBM', 'Kyndryl', 'LTIMindtree', 'Mphasis Systems', 'Hexaware', 'Tech Mahindra', 'Wipro']
  },
  consulting: {
    label: 'Consulting Partners',
    logos: ['McKinsey & Co', 'Deloitte', 'PwC', 'EY', 'KPMG', 'BCG', 'Capgemini', 'Oliver Wyman', 'Cognizant']
  },
  cloud: {
    label: 'Cloud & Infrastructure',
    logos: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud', 'Salesforce']
  },
  regional: {
    label: 'Regional Partners',
    logos: ['Interswitch', 'Flutterwave', 'NIBSS', 'CRC Credit Bureau', 'eTranzact', 'Ecobank', 'Stanbic IBTC', 'Access Bank', 'Zenith Bank']
  }
};

export default function Partners() {
  const [activePartnerType, setActivePartnerType] = useState('gsi');

  return (
    <main>
      <style>{`
        @keyframes scroll-pt {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 10px)); }
        }
        .animate-scroll-pt { animation: scroll-pt 30s linear infinite; }
        .hover-pause:hover .animate-scroll-pt { animation-play-state: paused; }
      `}</style>

      <section className="relative min-h-[62vh] flex items-center bg-gradient-to-br from-[#07102a] via-[#06091a] via-55% to-[#091228] overflow-hidden pt-[110px] md:pt-[120px] pb-[60px] md:pb-[80px] text-left">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,200,232,.12)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_70%_100%_at_60%_50%,black_0%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(0,200,232,.12)_0%,transparent_68%)] pointer-events-none"></div>
        
        <div className="d-inner relative z-10 w-full">
          <div className="relative z-10 max-w-[600px]">
            <div className="text-[12px] text-white/50 mb-5 flex items-center gap-[6px]">
              <Link href="/" className="hover:text-[var(--cyan)] transition-colors duration-200">Home</Link>
              <span className="text-[var(--cyan)]">›</span>
              <span>Partners</span>
            </div>
            <div className="text-[12px] uppercase tracking-[3px] text-[var(--cyan)] font-bold mb-[14px]">Partners</div>
            <h1 className="font-[family-name:var(--fd)] text-[clamp(36px,4.5vw,58px)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-[18px]">
              Build the Future of<br />Banking — Together
            </h1>
            <p className="text-[16px] text-white/70 leading-[1.8] max-w-[500px] mb-[34px]">
              Join Hexatech&apos;s partner ecosystem to co-create intelligent banking solutions, accelerate digital transformation programs, and drive scalable growth across global financial institutions.
            </p>
            <Link href="#become-partner" className="inline-flex py-[14px] px-[32px] text-[15px] font-bold rounded-[30px] border border-transparent shadow-[0_4px_14px_rgba(0,200,232,0.3)] hover:shadow-[0_6px_20px_rgba(0,200,232,0.4)] hover:-translate-y-[2px] transition-all bg-[var(--grad)] text-white font-[family-name:var(--fd)] no-underline mx-auto">Become a Partner →</Link>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-gradient-to-br from-[#07102a] to-[#06091a] text-white">
        <div className="d-inner">
          <div className="flex flex-col md:flex-row gap-0 bg-white/2 border border-white/10 rounded-2xl overflow-hidden mb-14">
            <div className="flex-1 py-6 px-7 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 text-center">
              <div className="font-[family-name:var(--fd)] text-[36px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">200+</div>
              <div className="text-[12px] text-white/50 uppercase tracking-[0.5px]">Partner organisations</div>
            </div>
            <div className="flex-1 py-6 px-7 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 text-center">
              <div className="font-[family-name:var(--fd)] text-[36px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">40+</div>
              <div className="text-[12px] text-white/50 uppercase tracking-[0.5px]">Countries covered</div>
            </div>
            <div className="flex-1 py-6 px-7 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 text-center">
              <div className="font-[family-name:var(--fd)] text-[36px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">$12B+</div>
              <div className="text-[12px] text-white/50 uppercase tracking-[0.5px]">Partner-led revenue enabled</div>
            </div>
            <div className="flex-1 py-6 px-7 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 text-center">
              <div className="font-[family-name:var(--fd)] text-[36px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">1,300+</div>
              <div className="text-[12px] text-white/50 uppercase tracking-[0.5px]">Joint implementations</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start text-left">
            <div>
              <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-left">Partner Ecosystem</span>
              <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-left mb-3.5">A Partner Ecosystem Built for Enterprise Transformation</h2>
            </div>
            <div>
              <p className="text-[15px] text-white/60 leading-[1.85] mb-4">At Hexatech, partnerships are not transactional. They are strategic, long-term and outcome-driven. We work with global and regional partners to help financial institutions modernise faster, achieve lower total cost of transformation, and drive measurable outcomes in digital banking.</p>
              <p className="text-[15px] text-white/60 leading-[1.85]">Whether you are a System Integrator, Consulting Partner, Cloud Provider, or ISV — our co-opetition offers you a composable platform foundation, enterprise AI orchestration, and strong go-to-market enablement to grow your business and deliver real value to global clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-[#f8fafc] text-[var(--navy)]">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Why Partner</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-3.5">Why Partner with Hexatech</h2>
          <p className="text-[17px] leading-[1.8] text-center max-w-[640px] mx-auto mb-[52px]">Three pillars that make the Hexatech partner ecosystem one of the most differentiated in financial technology.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden mt-[52px]">
            {[
              { num: '01', title: 'Hexatech Philosophy', desc: 'We believe transformation succeeds when technology, domain-depth and execution come together. Our partner programme is built around breaking banking complexity into seamless builds and ensuring solutions that are simple, smarter, and future-ready.' },
              { num: '02', title: 'Hexatech Approach', desc: 'We enable partners with an enterprise-grade product foundation, modular intellectual, and flexible co-investment model. Together, we help you shape differentiated offerings, deploy faster, and deliver measurable outcomes to clients across all segments.' },
              { num: '03', title: 'How We Grow Together', desc: "We grow together by combining your market presence and domain strengths with Hexatech's platform depth — sharing a strategic transformation path, and with strong GTM alignment to unlock joint pipeline, accelerate client wins, and expand into new territories." },
            ].map((w, i) => (
              <div className="bg-white py-8 px-7 transition-colors duration-200 text-left" key={i}>
                <div className="font-[family-name:var(--fd)] text-[11px] font-bold text-[var(--blue)] tracking-[2px] uppercase mb-3.5">{w.num}</div>
                <div className="font-[family-name:var(--fd)] text-[17px] font-extrabold text-[var(--navy)] mb-3 leading-tight">{w.title}</div>
                <div className="text-[14px] text-[var(--muted)] leading-[1.75]">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-gradient-to-br from-[#07102a] to-[#06091a] text-white">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Partner Benefits</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-3.5">What You Gain as a Hexatech Partner</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
            {[
              { ico: <Handshake size={32} strokeWidth={1.5} />, title: 'Co-Innovation & Solution Building', desc: "Co-create new differentiated solutions using Hexatech's eHEX platform and domain accelerators. Access our product roadmap, early-release APIs, and dedicated co-innovation labs to build IP that wins new markets together." },
              { ico: <Rocket size={32} strokeWidth={1.5} />, title: 'Go-to-Market Enablement', desc: 'Joint campaigns, partner playbooks, reference architectures, and sales enablement support. Our partner marketing team co-invests in demand generation, event presence, and analyst recognition programmes on your behalf.' },
              { ico: <Zap size={32} strokeWidth={1.5} />, title: 'Faster Delivery & Repeatability', desc: 'Deploy transformation projects faster with composable architecture and modular building blocks. Certified delivery frameworks, pre-built accelerators, and rapid-implementation playbooks reduce delivery risk and time-to-value.' },
              { ico: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Enterprise Readiness by Design', desc: "Hexatech's scalable and governance-built platform is built for the needs of regulated institutions. Security, compliance, audit, and resilience are embedded by design — not added after the fact." },
              { ico: <TrendingUp size={32} strokeWidth={1.5} />, title: 'Commercial & Growth Frameworks', desc: 'Structured incentives, co-opetition engagement frameworks, and joint revenue opportunities. Tier-based partner programmes reward investment in certification, pipeline, and delivery with higher margins and priority access.' },
            ].map((g, i) => (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden text-left hover:border-[rgba(0,200,232,0.3)] hover:bg-[rgba(0,200,232,0.03)] hover:-translate-y-1" key={i}>
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.2)] flex items-center justify-center text-[18px] mb-3.5">{g.ico}</div>
                <div className="font-[family-name:var(--fd)] text-[16px] font-bold text-white mb-2">{g.title}</div>
                <div className="text-[14px] text-white/60 leading-[1.7]">{g.desc}</div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#00c8e8] to-white border border-[rgba(0,200,232,0.25)] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden text-left hover:border-[rgba(0,200,232,0.25)] hover:-translate-y-1">
              <div className="text-[14px] text-[var(--cyan)] font-semibold mb-2.5 flex items-center gap-2">
                <Megaphone size={18} strokeWidth={2} /> Partner Network Advantage
              </div>
              <p className="text-[var(--navy)] text-[15px] leading-[1.75]">Partners across Hexatech&apos;s network use the eHEX platform to accelerate transformation programs, reduce implementation complexity, and improve innovation for clients — delivering 40% faster go-live on average.</p>
              <div className="mt-[18px]">
                <Link href="#become-partner" className="inline-flex py-[14px] px-[32px] text-[15px] font-bold rounded-[30px] border border-transparent shadow-[0_4px_14px_rgba(0,200,232,0.3)] hover:shadow-[0_6px_20px_rgba(0,200,232,0.4)] hover:-translate-y-[2px] transition-all bg-[var(--grad)] text-white font-[family-name:var(--fd)] no-underline mx-auto">Join the Ecosystem →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-[#f8fafc] text-[var(--navy)]">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Partner Types</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-[32px]">Our Partner Network</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-1 bg-[#f1f5f9] border border-[var(--border)] rounded-[10px] p-1 w-fit mb-8 mx-auto">
            {Object.keys(partnerTypes).map(key => (
              <button 
                key={key} 
                className={`py-[9px] px-5 text-[13px] font-semibold cursor-pointer rounded-[7px] border-none font-[family-name:var(--fd)] transition-all duration-200 whitespace-nowrap ${activePartnerType === key ? 'bg-[var(--grad)] text-white' : 'text-[var(--muted)] bg-transparent'}`}
                onClick={() => setActivePartnerType(key)}
              >
                {partnerTypes[key].label}
              </button>
            ))}
          </div>

          <div className="flex overflow-hidden select-none mt-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] hover-pause">
            <div className="flex items-center gap-5 w-max animate-scroll-pt hover:[animation-play-state:paused]">
              {partnerTypes[activePartnerType].logos.map((logo, i) => (
                <div className="bg-white/5 border border-white/10 rounded-xl py-5 px-8 flex items-center justify-center font-[family-name:var(--fd)] text-[14px] font-bold text-[#64748b] text-center whitespace-nowrap cursor-pointer transition-all duration-300 hover:border-[var(--cyan)] hover:text-white hover:bg-[rgba(0,200,232,0.1)] hover:-translate-y-0.5" key={`p1-${i}`}>{logo}</div>
              ))}
              {/* Duplicate for infinite loop */}
              {partnerTypes[activePartnerType].logos.map((logo, i) => (
                <div className="bg-white/5 border border-white/10 rounded-xl py-5 px-8 flex items-center justify-center font-[family-name:var(--fd)] text-[14px] font-bold text-[#64748b] text-center whitespace-nowrap cursor-pointer transition-all duration-300 hover:border-[var(--cyan)] hover:text-white hover:bg-[rgba(0,200,232,0.1)] hover:-translate-y-0.5" key={`p2-${i}`}>{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
