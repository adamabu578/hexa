"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BarChart, User, Landmark, TrendingDown, Zap, Bot, Puzzle, Blocks, Globe, ArrowRight } from 'lucide-react';
import "./page.css";

export default function Home() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="d-hero relative overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(0, 200, 232, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(26, 111, 212, 0.05) 0%, transparent 50%)' }}>
        <div className="d-inner relative z-10 flex flex-col items-center gap-12 text-center">
          
          {/* TEXT - TOP */}
          <motion.div
            className="w-full max-w-4xl d-hero-content"
            variants={container}
            initial="hidden"
            animate="show"
            style={{ textAlign: 'center', margin: '0 auto' }}
          >
            <motion.div variants={item} className="d-hero-badge" style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <span className="d-hero-badge-dot"></span>
              eHEX Platform · 700+ Microservices · 3,061 APIs
            </motion.div>

            <motion.h1 variants={item} style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', color: 'var(--navy)' }}>
              The #1 composable Open Finance Platform
            </motion.h1>

            <motion.div variants={item} style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, marginBottom: '30px', fontFamily: 'var(--fd)', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'var(--grad)' }}>
              for banks &amp; fintechs
            </motion.div>

            <motion.div variants={item} className="d-hero-sub" style={{ margin: '0 auto 40px auto', color: 'var(--muted)', fontSize: '18px', maxWidth: '640px' }}>
              <p>Streamline digital banking transformation with Hexatech's composable, AI-powered platform.</p>
              <p style={{ marginTop: '12px' }}>Deploy faster, scale further, and comply everywhere.</p>
            </motion.div>

            <motion.div variants={item} className="d-hero-acts" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <Link href="#contact" className="btn-prim">Get Started <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px', marginBottom: '-2px' }} /></Link>
              <Link href="/products" className="btn-out">Explore Products</Link>
            </motion.div>
          </motion.div>

          {/* IMAGE - BOTTOM */}
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(13,31,74,0.15)] border border-[var(--border)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06091a]/5 to-transparent z-10"></div>
              <Image src="/images/hero.jpg" alt="Hero Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="d-logos">
        <div className="d-inner">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="d-logos-label"
          >
            Trusted by leading financial institutions globally
          </motion.div>
          <div className="d-logos-row">
            <div className="d-logos-track">
              {['FirstBank', 'Ecobank', 'Standard Chartered', 'Access Bank', 'HDFC', 'Zenith Bank'].map((logo, i) => (
                <span key={`l1-${i}`} className="d-logo-item">{logo}</span>
              ))}
              {/* Duplicate for infinite loop */}
              {['FirstBank', 'Ecobank', 'Standard Chartered', 'Access Bank', 'HDFC', 'Zenith Bank'].map((logo, i) => (
                <span key={`l2-${i}`} className="d-logo-item">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="d-sec gray">
        <div className="d-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="sec-label">Why Hexatech</span>
            <h2 className="sec-title">Increase speed-to-market and reduce<br />cost of banking transformation</h2>
          </div>

          <div className="d-feats">
            {[
              { ico: <Zap size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'eHEX Platform', desc: 'The eHEX core powers your banking operations with high-performance microservices.' },
              { ico: <Bot size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'Contextual AI', desc: 'The AI layer offers a robust command-line tool for precise control over your banking workflows.' },
              { ico: <Puzzle size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'Composable by Design', desc: 'Hexatech simplifies the process of deploying and managing composable banking modules.' },
              { ico: <Blocks size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'Build Once, Deploy Everywhere', desc: 'Simplify the process to package and ship your code to any institution on any cloud.' },
              { ico: <Globe size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'Multi-Entity Orchestration', desc: 'Support for multiple countries, currencies, and regulatory environments.' },
              { ico: <BarChart size={28} strokeWidth={1.5} style={{ color: 'var(--cyan)' }} />, title: 'Real-Time Data Visibility', desc: 'Securely manage positions for intraday visibility and data portability.' },
            ].map((f, i) => (
              <motion.div
                className="d-feat"
                key={i}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="d-feat-ico">{f.ico}</div>
                <div className="d-feat-title">{f.title}</div>
                <div className="d-feat-desc">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="d-cta" id="contact">
        <div className="d-inner">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Build better banking,<br />together with Hexatech
          </motion.h2>
          <p>Get started today or choose the implementation programme that's right for your institution.</p>
          <div className="d-cta-acts">
            <Link href="#" className="btn-cyan">Request a Demo <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px', marginBottom: '-2px' }} /></Link>
            <Link href="/about/our-story" className="btn-out" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
