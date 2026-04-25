"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, TrendingUp, CreditCard, Smartphone, Briefcase, Building, ArrowRight, ArrowUpRight } from 'lucide-react';
import "./products.css";

const categories = [
  {
    id: 'core',
    icon: <Landmark size={24} strokeWidth={1.5} />,
    title: 'Core Banking',
    products: [
      { href: '/pages/core-banking/consumer-core-banking', title: 'Consumer Core Banking', desc: 'Mobile-first core for retail banks and fintechs. Real-time processing at scale.', stats: '212 implementations · 53 clients' },
      { href: '/pages/core-banking/corporate-core-banking', title: 'Corporate Core Banking', desc: 'Multi-entity, multi-currency corporate core with AI-powered operations.', stats: '212 implementations · 53 clients' },
      { href: '/pages/core-banking/central-core-banking', title: 'Central Core Banking', desc: 'Mission-critical infrastructure for central banks and monetary authorities.', stats: '66 implementations · 30 clients' },
    ]
  },
  {
    id: 'lending',
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    title: 'Lending',
    products: [
      { href: '/pages/lending/consumer-originations', title: 'Consumer Originations', desc: 'AI-first loan originations across the consumer lending journey.', stats: '19 products · 45 countries' },
      { href: '/pages/lending/consumer-loan-management', title: 'Consumer Loan Management', desc: 'Full lifecycle loan servicing for consumer lending books.', stats: '80 countries · 24 clients' },
      { href: '/pages/lending/sme-corporate-originations', title: 'SME & Corporate Originations', desc: 'AI-powered originations for SME and corporate credit.', stats: '60 products · 26 implementations' },
      { href: '/pages/lending/sme-corporate-loan-management', title: 'SME Corporate Loan Management', desc: 'Comprehensive loan lifecycle for commercial and corporate lending.', stats: '542 implementations · 31 clients' },
      { href: '/pages/lending/debt-collections', title: 'Debt Collections', desc: 'AI-first intelligent digital collections with empathy and precision.', stats: '28 countries · 10 clients' },
    ]
  },
  {
    id: 'cards',
    icon: <CreditCard size={24} strokeWidth={1.5} />,
    title: 'Cards',
    products: [
      { href: '/pages/cards/consumer-cards', title: 'Consumer Cards', desc: 'Future-ready CMS for consumer card issuance and personalisation.', stats: '74 implementations · 64 clients' },
      { href: '/pages/cards/corporate-cards', title: 'Corporate Cards', desc: 'End-to-end corporate card management with spend analytics and controls.', stats: '74 implementations · 64 clients' },
    ]
  },
  {
    id: 'digital',
    icon: <Smartphone size={24} strokeWidth={1.5} />,
    title: 'Digital Engagement',
    products: [
      { href: '/pages/digital-engagement/consumers-sme', title: 'Digital Engagement — Consumers & SME', desc: 'Low-code unified digital banking platform for consumer and SME journeys.', stats: '447 clients · 170 implementations' },
      { href: '/pages/digital-engagement/corporate-exchange', title: 'CBX — Corporate Banking Exchange', desc: 'The intelligent nervous system for corporate banking operations.', stats: '229 implementations · 28 clients' },
    ]
  },
  {
    id: 'wealth',
    icon: <Briefcase size={24} strokeWidth={1.5} />,
    title: 'Wealth & Capital Markets',
    products: [
      { href: '/pages/wealth-capital-markets/wealth-management', title: 'Wealth Management', desc: 'AI-first wealth platform empowering advisors to grow AUM and deliver hyper-personalised client experiences.', stats: '486 clients · 62 implementations' },
      { href: '/pages/wealth-capital-markets/financial-advisor', title: 'Wealth — Financial Advisor', desc: "The world's first AI office for relationship managers — 360° client view, AI recommendations, automated compliance.", stats: '491 implementations · 48 clients' },
      { href: '/pages/wealth-capital-markets/brokerage', title: 'Brokerage', desc: 'Ultra-low latency multi-asset brokerage with AI-native risk controls and automated regulatory compliance.', stats: '13 asset classes · 179 API endpoints' },
      { href: '/pages/wealth-capital-markets/custody', title: 'Custody', desc: 'Institutional-grade safekeeping, settlement, and fund accounting for banks, asset managers, and CSDs.', stats: '23 countries · 66 implementations' },
    ]
  },
  {
    id: 'treasury',
    icon: <Building size={24} strokeWidth={1.5} />,
    title: 'Treasury & Payments',
    products: [
      { href: '/pages/treasury-payments/virtual-accounts-management', title: 'Virtual Accounts Management', desc: 'Intelligent virtual account structures for precise cash visibility, automated reconciliation, and embedded banking capabilities.', stats: '142 FIs · 60 clients · 28 countries' },
    ]
  }
];

export default function Products() {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    products: cat.products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.products.length > 0);

  return (
    <main>
      <section className="d-hero relative overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(0, 200, 232, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(26, 111, 212, 0.05) 0%, transparent 50%)' }}>
        <div className="d-inner relative z-10 flex flex-col items-center gap-12 text-center" style={{ padding: '100px 0 60px' }}>
          
          <motion.div
            className="w-full max-w-4xl d-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', margin: '0 auto' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', border: '1px solid rgba(0,200,232,.3)', borderRadius: '100px', fontSize: '11px', color: 'var(--cyan)', fontWeight: 600, background: 'rgba(0,200,232,.06)', marginBottom: '22px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan)', display: 'block' }}></span>
              eHEX Platform · Product Suite
            </div>
            <h1 style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', color: 'var(--navy)', fontFamily: 'var(--fd)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
              Our Products<br /><span style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'var(--grad)' }}>Portfolio</span>
            </h1>
            <p style={{ margin: '0 auto 40px auto', color: 'var(--muted)', fontSize: '18px', maxWidth: '640px', lineHeight: 1.8 }}>
              Explore our comprehensive suite of composable banking modules — each purpose-built for a specific domain, each designed to work seamlessly together.
            </p>
            <div className="idx-search" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '14px 24px', borderRadius: '30px', border: '1px solid var(--border)', fontSize: '15px', minWidth: '280px' }}
              />
            </div>
            <div className="idx-stats" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              <div><div className="idx-stat-n" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>2B+</div><div className="idx-stat-l" style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase' }}>Transactions / year</div></div>
              <div><div className="idx-stat-n" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>140+</div><div className="idx-stat-l" style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase' }}>Global clients</div></div>
              <div><div className="idx-stat-n" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>40+</div><div className="idx-stat-l" style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase' }}>Countries</div></div>
              <div><div className="idx-stat-n" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--navy)' }}>1,300+</div><div className="idx-stat-l" style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase' }}>Implementations</div></div>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-5xl mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(13,31,74,0.15)] border border-[var(--border)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06091a]/5 to-transparent z-10"></div>
              <Image src="/images/hero1.jpg" alt="Products Portfolio" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="idx-body">
        <div className="d-inner">
          {filteredCategories.map(cat => (
            <div className="idx-cat" key={cat.id}>
              <div className="idx-cat-hdr">
                <span className="idx-cat-icon">{cat.icon}</span>
                <h3 className="idx-cat-title">{cat.title}</h3>
              </div>
              <div className="idx-cards">
                {cat.products.map((p, i) => (
                  <Link href={p.href} className="idx-card" key={i}>
                    <div className="idx-card-top">
                      <div className="idx-card-title">{p.title}</div>
                      <span className="idx-card-arrow"><ArrowUpRight size={18} style={{ display: 'inline' }} /></span>
                    </div>
                    <div className="idx-card-desc">{p.desc}</div>
                    <div className="idx-card-stats">{p.stats}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
