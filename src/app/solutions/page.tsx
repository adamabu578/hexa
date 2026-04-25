"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Briefcase, Store, Globe, Building2, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const solutions = [
  {
    id: 'retail',
    icon: <Users size={24} strokeWidth={1.5} className="text-[var(--cyan)]" />,
    title: 'Retail Banking',
    desc: 'Transform consumer experiences with hyper-personalised, mobile-first banking solutions designed for the modern retail customer.',
    stats: '120+ Retail Banks · 50M+ Consumers',
    href: '/solutions/retail-banking'
  },
  {
    id: 'corporate',
    icon: <Building2 size={24} strokeWidth={1.5} className="text-[var(--cyan)]" />,
    title: 'Corporate Banking',
    desc: 'Empower large enterprises with comprehensive cash management, trade finance, and sophisticated treasury solutions.',
    stats: '45+ Corporate Banks · 10K+ Enterprises',
    href: '/solutions/corporate-banking'
  },
  {
    id: 'sme',
    icon: <Store size={24} strokeWidth={1.5} className="text-[var(--cyan)]" />,
    title: 'SME Banking',
    desc: 'Bridge the funding gap and provide tailored financial tools that help small and medium businesses scale rapidly.',
    stats: '80+ SME Banks · 5M+ Businesses',
    href: '/solutions/sme-banking'
  },
  {
    id: 'wealth',
    icon: <Briefcase size={24} strokeWidth={1.5} className="text-[var(--cyan)]" />,
    title: 'Wealth Management',
    desc: 'Deliver elite advisory services with AI-driven insights, multi-asset brokerage, and automated compliance for high-net-worth clients.',
    stats: '30+ Wealth Managers · $2T+ AUM',
    href: '/solutions/wealth-management'
  },
  {
    id: 'islamic',
    icon: <Globe size={24} strokeWidth={1.5} className="text-[var(--cyan)]" />,
    title: 'Islamic Banking',
    desc: 'Fully Sharia-compliant banking solutions built from the ground up to support Murabaha, Mudarabah, and Sukuk instruments.',
    stats: '25+ Islamic Banks · 15+ Countries',
    href: '/solutions/islamic-banking'
  }
];

export default function Solutions() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(0, 200, 232, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(26, 111, 212, 0.05) 0%, transparent 50%)' }}>
        <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col items-center gap-12 text-center" style={{ padding: '100px 24px 60px' }}>
          
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', margin: '0 auto' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', border: '1px solid rgba(0,200,232,.3)', borderRadius: '100px', fontSize: '11px', color: 'var(--cyan)', fontWeight: 600, background: 'rgba(0,200,232,.06)', marginBottom: '22px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan)', display: 'block' }}></span>
              eHEX Platform · Solutions
            </div>
            <h1 style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', color: 'var(--navy)', fontFamily: 'var(--fd)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
              Banking Solutions<br /><span style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'var(--grad)' }}>By Segment</span>
            </h1>
            <p style={{ margin: '0 auto 40px auto', color: 'var(--muted)', fontSize: '18px', maxWidth: '640px', lineHeight: 1.8 }}>
              Discover purpose-built banking solutions tailored to the unique operational, regulatory, and growth requirements of your specific market segment.
            </p>
          </motion.div>

          <motion.div
            className="w-full max-w-5xl mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(13,31,74,0.15)] border border-[var(--border)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06091a]/5 to-transparent z-10"></div>
              <Image src="/images/hero4.jpg" alt="Solutions Overview" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-[60px] md:py-[90px] relative bg-[#f8fafc]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <Link href={s.href} key={i}>
                <Card className="h-full border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:-translate-y-1 hover:border-[var(--cyan)] group">
                  <CardHeader className="pb-3 flex flex-col items-start gap-4">
                    <div className="w-14 h-14 rounded-[14px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[20px]">{s.icon}</div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <CardTitle className="text-[20px] font-bold text-[var(--navy)] font-[family-name:var(--fd)]">{s.title}</CardTitle>
                      <ArrowUpRight size={18} className="text-[var(--cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[15px] leading-relaxed text-[var(--muted)] mb-5">{s.desc}</CardDescription>
                    <div className="text-[11.5px] font-semibold text-[var(--blue)] uppercase tracking-wider">{s.stats}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
