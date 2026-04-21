"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart, User, Landmark, TrendingDown, Zap, Bot, Puzzle, Blocks, Globe, ArrowRight } from 'lucide-react';
import "./page.css";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="d-hero">
        <div className="d-inner">
          <motion.div 
            className="d-hero-content"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="d-hero-badge">
              <span className="d-hero-badge-dot"></span>
              eHEX Platform · 700+ Microservices · 3,061 APIs
            </motion.div>
            
            <motion.h1 variants={item}>
              The #1 composable Open Finance Platform
            </motion.h1>
            
            <motion.div variants={item} className="hl" style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, marginBottom: '40px', fontFamily: 'var(--fd)' }}>
              for banks &amp; fintechs
            </motion.div>
            
            <motion.div variants={item} className="d-hero-sub">
              <p>Streamline digital banking transformation with Hexatech's composable, AI-powered platform.</p>
              <p style={{ marginTop: '12px' }}>Deploy faster, scale further, and comply everywhere.</p>
            </motion.div>
            
            <motion.div variants={item} className="d-hero-acts">
              <Link href="#contact" className="btn-prim">Get Started <ArrowRight size={16} style={{display:'inline', marginLeft:'4px', marginBottom:'-2px'}} /></Link>
              <Link href="/products" className="btn-out">Explore Products</Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <div className="d-inner" style={{ paddingTop: 0 }}>
          <motion.div 
            className="d-hero-visual"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div {...float}>
              <div className="mockup-bar">
              <div className="mockup-dots">
                <div className="mockup-dot" style={{ background: '#ff5f56' }}></div>
                <div className="mockup-dot" style={{ background: '#ffbd2e' }}></div>
                <div className="mockup-dot" style={{ background: '#27c93f' }}></div>
              </div>
              <div className="mockup-url">app.hexatech.io/dashboard · Operations</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-sb-logo">
                  <div className="mockup-sb-logo-box">H</div>
                  <div className="mockup-sb-logo-name">Hexatech</div>
                </div>
                <div className="mockup-sb-section">Core Banking</div>
                <div className="mockup-sb-item active"><span className="mockup-sb-ico"><BarChart size={14} style={{display:'inline'}} /></span>Dashboard</div>
                <div className="mockup-sb-item"><span className="mockup-sb-ico"><User size={14} style={{display:'inline'}} /></span>Customers</div>
                <div className="mockup-sb-item"><span className="mockup-sb-ico"><Landmark size={14} style={{display:'inline'}} /></span>Accounts</div>
                <div className="mockup-sb-item"><span className="mockup-sb-ico"><TrendingDown size={14} style={{display:'inline'}} /></span>Loans</div>
              </div>
              <div className="mockup-main">
                <div className="mockup-toprow">
                  <div className="mockup-page-title">Real-time Overview</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mockup-badge green"
                    >
                      ● All systems live
                    </motion.div>
                  </div>
                </div>
                
                <div className="mockup-kpi-row">
                  {[
                    { label: 'AUM Today', val: '$2.4B', up: '↑4.2%' },
                    { label: 'Accounts', val: '148K', up: '↑12%' },
                    { label: 'Uptime', val: '99.98%', up: '↑' },
                    { label: 'Response', val: '1.2ms', up: '' }
                  ].map((kpi, i) => (
                    <motion.div 
                      key={i} 
                      className="mockup-kpi"
                      whileHover={{ scale: 1.02, borderColor: 'var(--blue)' }}
                    >
                      <div className="mockup-kpi-n">{kpi.val}{kpi.up && <span className="up">{kpi.up}</span>}</div>
                      <div className="mockup-kpi-l">{kpi.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mockup-chart">
                  {[45, 65, 40, 80, 55, 48, 72, 58, 90, 62, 85, 68].map((h, i) => (
                    <motion.div 
                      key={i}
                      className={`bar ${h > 60 ? 'hi' : ''}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.8 + (i * 0.05) }}
                    />
                  ))}
                </div>
                
                <div className="mockup-table">
                  <div className="mockup-th"><span>Transaction</span><span>Amount</span><span>Status</span></div>
                  <div className="mockup-tr">
                    <span className="name">NIP Transfer</span>
                    <span>₦245,000</span>
                    <span><div className="mockup-status s-active">Settled</div></span>
                  </div>
                  <div className="mockup-tr">
                    <span className="name">Loan Disbursement</span>
                    <span>₦12.5M</span>
                    <span><div className="mockup-status s-active">Settled</div></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              { ico: <Zap size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'eHEX Platform', desc: 'The eHEX core powers your banking operations with high-performance microservices.' },
              { ico: <Bot size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'Contextual AI', desc: 'The AI layer offers a robust command-line tool for precise control over your banking workflows.' },
              { ico: <Puzzle size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'Composable by Design', desc: 'Hexatech simplifies the process of deploying and managing composable banking modules.' },
              { ico: <Blocks size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'Build Once, Deploy Everywhere', desc: 'Simplify the process to package and ship your code to any institution on any cloud.' },
              { ico: <Globe size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'Multi-Entity Orchestration', desc: 'Support for multiple countries, currencies, and regulatory environments.' },
              { ico: <BarChart size={28} strokeWidth={1.5} style={{color: 'var(--cyan)'}}/>, title: 'Real-Time Data Visibility', desc: 'Securely manage positions for intraday visibility and data portability.' },
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
            <Link href="#" className="btn-cyan">Request a Demo <ArrowRight size={16} style={{display:'inline', marginLeft:'4px', marginBottom:'-2px'}} /></Link>
            <Link href="/about/our-story" className="btn-out" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
