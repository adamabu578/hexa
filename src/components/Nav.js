"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, TrendingUp, CreditCard, Smartphone, Briefcase, Building, Globe, Shield, BookOpen, Users, Target, Leaf, ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Nav() {
  const [activePanel, setActivePanel] = useState('core');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const panels = [
    { id: 'core', label: 'Core Banking', icon: <Landmark size={18} strokeWidth={1.5} />, title: 'Core Banking', links: [
      { text: 'Consumer Core Banking', href: '/pages/core-banking/consumer-core-banking' },
      { text: 'Corporate Core Banking', href: '/pages/core-banking/corporate-core-banking' },
      { text: 'Central Core Banking', href: '/pages/core-banking/central-core-banking' },
    ]},
    { id: 'lending', label: 'Lending', icon: <TrendingUp size={18} strokeWidth={1.5} />, title: 'Lending', links: [
      { text: 'Consumer Originations', href: '/pages/lending/consumer-originations' },
      { text: 'Consumer Loan Management', href: '/pages/lending/consumer-loan-management' },
      { text: 'SME & Corporate Originations', href: '/pages/lending/sme-corporate-originations' },
      { text: 'SME Corporate Loan Management', href: '/pages/lending/sme-corporate-loan-management' },
      { text: 'Debt Collections', href: '/pages/lending/debt-collections' },
    ]},
    { id: 'cards', label: 'Cards', icon: <CreditCard size={18} strokeWidth={1.5} />, title: 'Cards', links: [
      { text: 'Consumer Cards', href: '/pages/cards/consumer-cards' },
      { text: 'Corporate Cards', href: '/pages/cards/corporate-cards' },
    ]},
    { id: 'digital', label: 'Digital Engagement', icon: <Smartphone size={18} strokeWidth={1.5} />, title: 'Digital Engagement', links: [
      { text: 'Digital Engagement — Consumers & SME', href: '/pages/digital-engagement/consumers-sme' },
      { text: 'CBX — Corporate Exchange', href: '/pages/digital-engagement/corporate-exchange' },
    ]},
    { id: 'wealth', label: 'Wealth & Capital Markets', icon: <Briefcase size={18} strokeWidth={1.5} />, title: 'Wealth & Capital Markets', links: [
      { text: 'Wealth Management', href: '/pages/wealth-capital-markets/wealth-management' },
      { text: 'Financial Advisor', href: '/pages/wealth-capital-markets/financial-advisor' },
      { text: 'Brokerage', href: '/pages/wealth-capital-markets/brokerage' },
      { text: 'Custody', href: '/pages/wealth-capital-markets/custody' },
    ]},
    { id: 'treasury', label: 'Treasury & Payments', icon: <Building size={18} strokeWidth={1.5} />, title: 'Treasury & Payments', links: [
      { text: 'Virtual Accounts Management', href: '/pages/treasury-payments/virtual-accounts-management' },
    ]},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-white/70 backdrop-blur-[14px] border-b border-[var(--border)] px-5 md:px-[40px] h-[68px] flex items-center shadow-sm">
      <div className="max-w-[1240px] w-full mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-[var(--navy)] font-[family-name:var(--font-syne)] text-[19px] font-extrabold tracking-[-0.02em]">
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center gap-[9px]"
          >
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
              <polygon points="18,1 33,9 33,27 18,35 3,27 3,9" fill="none" stroke="url(#ng2)" strokeWidth="2.2"/>
              <line x1="13" y1="11" x2="13" y2="25" stroke="url(#ng2)" strokeWidth="2.8" strokeLinecap="round"/>
              <line x1="23" y1="11" x2="23" y2="25" stroke="url(#ng2)" strokeWidth="2.8" strokeLinecap="round"/>
              <line x1="13" y1="18" x2="23" y2="18" stroke="url(#ng2)" strokeWidth="2.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="ng2" x1="3" y1="1" x2="33" y2="35" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00c8e8"/><stop offset="100%" stopColor="#1a6fd4"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Hexatech</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 list-none ml-10 flex-1">
          <li className="relative group/nav z-[201]">
            <Link href="/products" className="flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-semibold font-[family-name:var(--fb)] text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#0d1f4a0a] rounded-lg transition-all cursor-pointer">
              Products <ChevronDown size={14} className="text-[var(--blue)] opacity-80 transition-transform duration-300 group-hover/nav:rotate-180" />
            </Link>
            <div className="absolute top-full left-[-100px] pt-3 opacity-0 invisible translate-y-3 scale-95 transition-all duration-300 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 pointer-events-none group-hover/nav:pointer-events-auto">
              <div className="min-w-[760px] bg-white/95 backdrop-blur-[20px] border border-[var(--navy)]/10 rounded-2xl shadow-xl flex overflow-hidden">
                <div className="w-[240px] bg-white border-r border-[var(--border)] p-4">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[var(--muted)] font-bold px-3 pb-4 mb-2 border-b border-[var(--border)]">Product Suite</div>
                  {panels.map(p => (
                    <button 
                      key={p.id}
                      className={`flex items-center gap-3 w-full p-2.5 rounded-xl cursor-pointer text-left transition-all ${activePanel === p.id ? 'bg-[var(--light)] text-[var(--blue)]' : 'text-[var(--text)] hover:bg-[var(--light)] hover:text-[var(--blue)]'}`}
                      onMouseEnter={() => setActivePanel(p.id)}
                    >
                      <div className={`w-[34px] h-[34px] rounded-[10px] bg-white border border-[var(--border)] flex items-center justify-center text-[16px] shadow-sm transition-all ${activePanel === p.id ? 'bg-[var(--light)] border-[var(--blue)] scale-110' : ''}`}>
                        {p.icon}
                      </div>
                      <span className="text-[14.5px] font-semibold">{p.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex-1 p-6 min-h-[400px] bg-white relative">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activePanel}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-[12px] uppercase tracking-[1.5px] text-[var(--muted)] font-bold mb-5">{panels.find(p => p.id === activePanel)?.title}</div>
                      <div className="grid gap-2">
                        {panels.find(p => p.id === activePanel)?.links.map((l, i) => (
                          <Link key={i} href={l.href} className="group/link flex items-center justify-between p-2.5 rounded-xl text-[14px] font-medium text-[var(--text)] hover:bg-[var(--light)] hover:text-[var(--blue)] hover:translate-x-1 transition-all">
                            {l.text} <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-all translate-x-[-4px] group-hover/link:translate-x-0" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </li>
          
          <li className="relative group/nav z-[201]">
            <Link href="#" className="flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-semibold font-[family-name:var(--fb)] text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#0d1f4a0a] rounded-lg transition-all cursor-pointer">
              Solutions <ChevronDown size={14} className="text-[var(--blue)] opacity-80 transition-transform duration-300 group-hover/nav:rotate-180" />
            </Link>
            <div className="absolute top-full pt-3 opacity-0 invisible translate-y-3 scale-95 transition-all duration-300 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 pointer-events-none group-hover/nav:pointer-events-auto">
              <div className="min-w-[240px] bg-white/95 backdrop-blur-[20px] border border-[var(--navy)]/10 rounded-2xl shadow-xl flex overflow-hidden">
                <div className="bg-white p-3 min-w-[240px] w-full">
                  <div className="text-[10px] uppercase tracking-[2px] text-slate-400 font-bold py-2 px-3">By Segment</div>
                  <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Building size={16} strokeWidth={1.5} /></span>Commercial Banks
                  </Link>
                  <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Smartphone size={16} strokeWidth={1.5} /></span>Digital & Neo Banks
                  </Link>
                  <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Briefcase size={16} strokeWidth={1.5} /></span>NBFCs & Fintechs
                  </Link>
                  <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Globe size={16} strokeWidth={1.5} /></span>Central Banks
                  </Link>
                  <Link href="#" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Shield size={16} strokeWidth={1.5} /></span>Insurance Companies
                  </Link>
                </div>
              </div>
            </div>
          </li>
          
          <li><Link href="/technology" className="px-3.5 py-2 text-[15px] font-semibold font-[family-name:var(--fb)] text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#0d1f4a0a] rounded-lg transition-all">Technology</Link></li>
          <li><Link href="/partners" className="px-3.5 py-2 text-[15px] font-semibold font-[family-name:var(--fb)] text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#0d1f4a0a] rounded-lg transition-all">Partners</Link></li>
          
          <li className="relative group/nav z-[201]">
            <Link href="#" className="flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-semibold font-[family-name:var(--fb)] text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#0d1f4a0a] rounded-lg transition-all cursor-pointer">
              About Us <ChevronDown size={14} className="text-[var(--blue)] opacity-80 transition-transform duration-300 group-hover/nav:rotate-180" />
            </Link>
            <div className="absolute top-full pt-3 opacity-0 invisible translate-y-3 scale-95 transition-all duration-300 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 pointer-events-none group-hover/nav:pointer-events-auto">
              <div className="min-w-[240px] bg-white/95 backdrop-blur-[20px] border border-[var(--navy)]/10 rounded-2xl shadow-xl flex overflow-hidden">
                <div className="bg-white p-3 min-w-[240px] w-full">
                  <Link href="/about/our-story" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><BookOpen size={16} strokeWidth={1.5} /></span>Our Story
                  </Link>
                  <Link href="/about/our-leadership" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Users size={16} strokeWidth={1.5} /></span>Our Leadership
                  </Link>
                  <Link href="/about/design-thinking-dna" className="flex items-center gap-3 p-2.5 rounded-xl text-[var(--text)] text-[14px] font-medium hover:bg-[var(--light)] hover:text-[var(--blue)] transition-all group/item">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-[var(--light)] border border-[var(--border)] flex items-center justify-center transition-all group-hover/item:bg-white group-hover/item:border-[var(--blue)] group-hover/item:scale-110 group-hover/item:-rotate-3"><Target size={16} strokeWidth={1.5} /></span>Design Thinking DNA
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-5 ml-auto">
          <Link href="#" className="hidden lg:block text-[14px] font-semibold text-[var(--muted)] hover:text-[var(--navy)] transition-colors">Sign In</Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
            <Link href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--navy)] text-white text-[15px] font-semibold hover:bg-[var(--blue)] hover:translate-y-[-1px] hover:shadow-[0_6px_20px_rgba(26,111,212,0.3)] transition-all">Get Started</Link>
          </motion.div>
          
          <button 
            className="lg:hidden flex items-center justify-center p-2 text-[var(--navy)] transition-colors rounded-lg hover:bg-slate-100" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto', overflow: 'hidden' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-[68px] left-0 right-0 bg-white border-t border-[var(--border)] shadow-xl lg:hidden z-50 rounded-b-2xl pb-4 flex flex-col"
          >
            <div className="flex flex-col p-4 space-y-1">
              <div className="flex flex-col">
                <button 
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'products' ? null : 'products')} 
                  className="flex items-center justify-between py-3 px-4 text-[16px] font-bold text-[var(--navy)] hover:bg-slate-50 rounded-xl transition-all"
                >
                  Products <ChevronDown size={18} className={`text-slate-400 transition-transform ${openMobileDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'products' && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden flex flex-col px-4 bg-slate-50 rounded-xl">
                      {panels.map((p, idx) => (
                        <div key={idx} className="py-2.5 border-b border-slate-200 last:border-0">
                          <div className="text-[14px] font-bold text-[var(--navy)] mb-2 flex items-center gap-2">{p.icon} {p.title}</div>
                          <div className="flex flex-col space-y-2 pl-6">
                            {p.links.map((l, i) => (
                              <Link key={i} href={l.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[13px] font-medium text-slate-500">{l.text}</Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <button 
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'solutions' ? null : 'solutions')} 
                  className="flex items-center justify-between py-3 px-4 text-[16px] font-bold text-[var(--navy)] hover:bg-slate-50 rounded-xl transition-all"
                >
                  Solutions <ChevronDown size={18} className={`text-slate-400 transition-transform ${openMobileDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'solutions' && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden flex flex-col pl-4 gap-2 pt-2 bg-slate-50 rounded-xl pb-3">
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-medium text-slate-500">Commercial Banks</Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-medium text-slate-500">Digital & Neo Banks</Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-medium text-slate-500">NBFCs & Fintechs</Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-medium text-slate-500">Central Banks</Link>
                        <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[14px] font-medium text-slate-500">Insurance Companies</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/technology" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-[16px] font-bold text-[var(--navy)] hover:bg-slate-50 rounded-xl transition-all">Technology</Link>
              <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-[16px] font-bold text-[var(--navy)] hover:bg-slate-50 rounded-xl transition-all">Partners</Link>
              <Link href="/about/our-story" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-[16px] font-bold text-[var(--navy)] hover:bg-slate-50 rounded-xl transition-all">About Us</Link>
            </div>
            
            <div className="mx-4 h-[1px] bg-[var(--border)] my-2"></div>
            
            <div className="flex flex-col p-4 space-y-3">
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center text-[15px] font-bold text-[var(--navy)] bg-slate-100 rounded-xl hover:bg-slate-200 transition-all">Sign In</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-center text-[15px] font-bold text-white bg-[var(--grad)] rounded-xl hover:translate-y-[-1px] hover:shadow-lg transition-all">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

