"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, User, Leaf, Zap, Puzzle, Bot, Landmark, Rocket, TrendingDown, Network, ClipboardCheck, Database, Settings, Search, RefreshCcw, CheckCircle, Server, Shield, BarChart, Globe, Workflow, TrendingUp, Brain, PieChart, Lock, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Technology() {
  const [activeTab, setActiveTab] = useState('paramount');

  const platforms = {
    paramount: {
      id: 'it',
      label: 'iTurmeric',
      tagline: 'Enterprise Composability and Integration Platform',
      desc: "Hexatech eHEX is powered by the iTurmeric technology — facilitating composable content of your platform. Accelerate integration velocity, reduce operational complexity, and orchestrate banking workflows at enterprise scale.",
      caps: [
        { ico: <Database size={20} strokeWidth={1.5} />, name: 'Accelerated Record Storage', desc: 'High-performance event store for banking transactions at any volume.' },
        { ico: <Settings size={20} strokeWidth={1.5} />, name: 'Low-Code Configuration', desc: 'Visual workflow builder — configure complex banking processes without code.' },
        { ico: <Search size={20} strokeWidth={1.5} />, name: 'Visual Background', desc: 'Real-time operational dashboards with full system observability.' },
        { ico: <RefreshCcw size={20} strokeWidth={1.5} />, name: 'Business Agility', desc: 'Rapid deployment of new banking products and process changes.' },
        { ico: <CheckCircle size={20} strokeWidth={1.5} />, name: 'Licence Centre', desc: 'Unified licence and entitlement management across all platform modules.' },
        { ico: <Server size={20} strokeWidth={1.5} />, name: 'Repository Management', desc: 'Version-controlled microservices repository with automated CI/CD pipelines.' },
      ]
    },
    purplefabric: {
      id: 'pf',
      label: 'Purple Fabric',
      tagline: 'Open Business Impact Platform',
      desc: "Purple Fabric is an enterprise-grade open finance fabric — configurable to run measurable business impact, orchestrating policies, workflows, and partner integrations with intelligent routing across your entire estate.",
      caps: [
        { ico: <Network size={20} strokeWidth={1.5} />, name: 'Open API Gateway', desc: 'Managed API gateway with rate limiting, versioning, and analytics.' },
        { ico: <Zap size={20} strokeWidth={1.5} />, name: 'Event Streaming', desc: 'Real-time event mesh connecting all banking systems and channels.' },
        { ico: <Shield size={20} strokeWidth={1.5} />, name: 'Policy Engine', desc: 'Business rules and compliance policy enforcement at the integration layer.' },
        { ico: <BarChart size={20} strokeWidth={1.5} />, name: 'Analytics Layer', desc: 'Cross-platform business intelligence and operational metrics.' },
        { ico: <Globe size={20} strokeWidth={1.5} />, name: 'Ecosystem Hub', desc: 'Managed connectivity to 500+ banking ecosystem partners.' },
        { ico: <Workflow size={20} strokeWidth={1.5} />, name: 'Workflow Orchestration', desc: 'Visual process designer for complex multi-party banking workflows.' },
      ]
    },
    sigma: {
      id: 'Σ',
      label: 'Sigma',
      tagline: 'Enterprise Intelligence & Analytics Platform',
      desc: "Sigma powers the AI and data intelligence layer of the eHEX platform — delivering real-time analytics, predictive decisioning, and explainable AI across all banking operations with bank-grade governance.",
      caps: [
        { ico: <Bot size={20} strokeWidth={1.5} />, name: 'AI Model Management', desc: 'Deploy, monitor, and retrain ML models across all banking use cases.' },
        { ico: <TrendingUp size={20} strokeWidth={1.5} />, name: 'Predictive Analytics', desc: 'Forward-looking insights for risk, churn, fraud, and growth.' },
        { ico: <Brain size={20} strokeWidth={1.5} />, name: 'Generative AI', desc: 'LLM-powered assistant for bankers, customers, and operations.' },
        { ico: <Search size={20} strokeWidth={1.5} />, name: 'Explainable AI', desc: 'Audit-ready AI decisions with full decision trail and bias monitoring.' },
        { ico: <PieChart size={20} strokeWidth={1.5} />, name: 'Real-Time Dashboards', desc: 'Live KPI and operational dashboards for every business function.' },
        { ico: <Lock size={20} strokeWidth={1.5} />, name: 'Data Governance', desc: 'Centralised data catalogue, lineage, and privacy controls.' },
      ]
    }
  };

  return (
    <main>
      <section className="relative min-h-[58vh] flex items-center bg-gradient-to-br from-[#07102a] via-[#06091a] via-55% to-[#0a1228] pt-[100px] md:pt-[130px] pb-[60px] md:pb-[84px] overflow-hidden text-left">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,200,232,.18)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(ellipse_65%_100%_at_58%_50%,black_0%,transparent_100%)] pointer-events-none"></div>
        <div className="d-inner w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-full lg:max-w-[590px]"
          >
            <div className="flex items-center gap-[7px] text-[12px] text-[var(--muted)] mb-[18px]">
              <Link href="/" className="hover:text-[var(--cyan)] transition-colors duration-200">Home</Link>
              <span className="text-[var(--cyan)]"><ChevronRight size={14} style={{ display: 'inline' }} /></span>
              <span>Technology</span>
            </div>
            <div className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-bold mb-[14px]">Technology</div>
            <h1 className="font-[family-name:var(--fd)] text-[clamp(38px,4.8vw,62px)] font-extrabold text-white leading-[1.04] tracking-[-2px] mb-[18px]">Powering the Future of<br />Financial Services</h1>
            <p className="text-[16px] text-white/70 leading-[1.8] max-w-[510px]">Designed for agility, scale and resilience — Hexatech brings best-in-class financial technology capabilities that help financial institutions modernise smarter, move faster, and compete in an era defined by rapid digital disruption.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#06091a] to-transparent opacity-40 z-10"></div>
              <Image src="/images/hero2.jpg" alt="Technology Architecture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8fafc] pb-[64px]">
        <div className="d-inner">
          <div className="flex flex-col md:flex-row gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-[14px] overflow-hidden mt-0">
            <div className="flex-1 bg-white py-[26px] px-[36px] text-center transition-colors duration-200">
              <div className="font-[family-name:var(--fd)] text-[40px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">700</div>
              <div className="text-[12px] text-[var(--muted)] uppercase tracking-[0.6px]">Microservices</div>
            </div>
            <div className="flex-1 bg-white py-[26px] px-[36px] text-center transition-colors duration-200">
              <div className="font-[family-name:var(--fd)] text-[40px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">3,061</div>
              <div className="text-[12px] text-[var(--muted)] uppercase tracking-[0.6px]">APIs</div>
            </div>
            <div className="flex-1 bg-white py-[26px] px-[36px] text-center transition-colors duration-200">
              <div className="font-[family-name:var(--fd)] text-[40px] font-extrabold bg-clip-text text-transparent bg-[var(--grad)] leading-none mb-1.5">942</div>
              <div className="text-[12px] text-[var(--muted)] uppercase tracking-[0.6px]">Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-gradient-to-br from-[#07102a] to-[#06091a] text-white">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Architecture Principles</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-3.5">Built for Change. Designed for Impact.</h2>
          <p className="text-[17px] leading-[1.8] text-center max-w-[640px] mx-auto mb-[52px] text-white/70">Our technology is not just modern — it is composable, intelligent, and built to create immediate business value and deliver measurable global impact for every implementation.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-white/5 border-white/10 text-white hover:border-[rgba(0,200,232,0.3)] hover:-translate-y-1 hover:bg-[rgba(0,200,232,0.03)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-[44px] h-[44px] rounded-[11px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[20px] mb-2"><Sparkles strokeWidth={1.5} size={24} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[16px] font-bold text-white leading-tight">Built for the Future</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-white/60 leading-[1.75]">An architecture that evolves without disruption — composable microservices, open APIs, and cloud-native deployment ensure your technology investment stays relevant for decades, not years. Future-proof by design.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white hover:border-[rgba(0,200,232,0.3)] hover:-translate-y-1 hover:bg-[rgba(0,200,232,0.03)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-[44px] h-[44px] rounded-[11px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[20px] mb-2"><Target strokeWidth={1.5} size={24} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[16px] font-bold text-white leading-tight">Designed for Real Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-white/60 leading-[1.75]">Platforms purpose-built to accelerate real business outcomes — faster product launch, reduced operational cost, improved STP rates, increasing customer satisfaction, and accelerating your innovations to market.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white hover:border-[rgba(0,200,232,0.3)] hover:-translate-y-1 hover:bg-[rgba(0,200,232,0.03)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-[44px] h-[44px] rounded-[11px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[20px] mb-2"><User strokeWidth={1.5} size={24} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[16px] font-bold text-white leading-tight">User-Centric by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-white/60 leading-[1.75]">Designed from the outside in — every interaction, workflow, and API is designed with the experience of the banker, the developer, and the end-customer at the absolute forefront of every design decision we make.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white hover:border-[rgba(0,200,232,0.3)] hover:-translate-y-1 hover:bg-[rgba(0,200,232,0.03)] transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-[44px] h-[44px] rounded-[11px] bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[20px] mb-2"><Leaf strokeWidth={1.5} size={24} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[16px] font-bold text-white leading-tight">Technology That Enables Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-white/60 leading-[1.75]">Scale from 100K to 100M customers on the same platform. Take bold bets on new markets and segments today knowing the underlying technology will grow alongside you without compromise or rearchitecting.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-[#f8fafc] text-[var(--navy)]">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Platform Core</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-3.5">eHEX Platform</h2>
          <p className="text-[17px] leading-[1.8] text-center max-w-[640px] mx-auto mb-[52px]">When Hexatech&apos;s foundational eHEX architecture meets composable Open Finance — it creates a unified, comprehensive, and composable Open Finance Platform.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-9">
            <Card className="bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[14px] mb-2"><Zap strokeWidth={1.5} size={20} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[15px] font-bold text-[var(--navy)]">Excellence at the Core</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-[var(--muted)] leading-[1.65]">Sub-millisecond transaction processing with five-nines availability and active-active multi-region deployment for mission-critical banking operations at any scale.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[14px] mb-2"><Puzzle strokeWidth={1.5} size={20} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[15px] font-bold text-[var(--navy)]">Composable Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-[var(--muted)] leading-[1.65]">Deploy only the domains you need, on your timeline, without disrupting what is already live. Every product is independently deployable, scalable, and upgradeable from a single platform core.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[14px] mb-2"><Bot strokeWidth={1.5} size={20} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[15px] font-bold text-[var(--navy)]">Contextual Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-[var(--muted)] leading-[1.65]">AI and machine learning embedded at the platform layer — not bolted on. Predictive, prescriptive, and generative AI capabilities built natively into every banking workflow and interaction.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,200,232,0.1)] border border-[rgba(0,200,232,0.18)] flex items-center justify-center text-[14px] mb-2"><Landmark strokeWidth={1.5} size={20} className="text-[var(--cyan)]" /></div>
                <CardTitle className="font-[family-name:var(--fd)] text-[15px] font-bold text-[var(--navy)]">Two-Tier Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[14px] text-[var(--muted)] leading-[1.65]">Separation of Corebanking and Channels tiers enables independent innovation at each layer — modernise channels without touching core, or evolve core without disrupting the customer experience.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-gradient-to-br from-[#07102a] to-[#06091a] text-white">
        <div className="d-inner">
          <div className="bg-gradient-to-br from-[#06091a] to-[#080f26] border border-white/10 rounded-[20px] p-6 lg:p-12 relative overflow-hidden mt-0 text-left">
            <div className="inline-flex items-center gap-[7px] py-[5px] px-[14px] border border-[rgba(110,50,220,0.3)] rounded-full text-[11px] text-[#b07fff] font-semibold bg-[rgba(110,50,220,0.08)] mb-5"><span className="w-1.5 h-1.5 rounded-full bg-[#9060ef] block"></span>Purple Fabric</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,42px)] font-extrabold text-white tracking-[-1px] leading-[1.1] mb-3.5">Purple Fabric</div>
                <p className="text-[15px] text-white/70 leading-[1.8] mb-[28px]">Purple Fabric is an enterprise-grade open finance fabric that allows you to configure and run measurable business impact across your entire banking technology estate — composable, intelligent, and always-on.</p>
                <Link href="#" className="btn-cyan">Explore Purple Fabric <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px', marginBottom: '-2px' }} /></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 lg:mt-0">
                {[
                  { ico: <Rocket strokeWidth={1.5} size={16} className="text-white" />, title: 'Faster Time-to-Value', desc: 'Accelerated delivery with enterprise-grade robustness' },
                  { ico: <TrendingDown strokeWidth={1.5} size={16} className="text-white" />, title: 'Lower Carmo Rates', desc: 'Reduced infrastructure and operations cost' },
                  { ico: <Network strokeWidth={1.5} size={16} className="text-white" />, title: 'Ecosystem Connectivity', desc: 'Open integration to 500+ ecosystem partners' },
                  { ico: <ClipboardCheck strokeWidth={1.5} size={16} className="text-white" />, title: 'Comprehensive Compliance', desc: 'Automated regulatory compliance at every layer' },
                ].map((s, i) => (
                  <div className="bg-white/5 border border-white/10 rounded-[10px] py-[14px] px-[15px] flex items-start gap-2.5 transition-all duration-200 hover:border-[rgba(110,50,220,0.3)] hover:bg-[rgba(110,50,220,0.06)]" key={i}>
                    <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[#7c3cf8] to-[#1a6fd4] flex flex-shrink-0 items-center justify-center text-[12px]">{s.ico}</div>
                    <div>
                      <div className="text-[12.5px] text-white font-semibold mb-0.5">{s.title}</div>
                      <div className="text-[11px] text-white/50 leading-[1.4]">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[90px] relative bg-[#f8fafc] text-[var(--navy)]">
        <div className="d-inner">
          <span className="text-[11px] uppercase tracking-[3px] text-[var(--cyan)] font-semibold block mb-3 text-center">Platform Portfolio</span>
          <h2 className="font-[family-name:var(--fd)] text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-center mb-[32px]">Our Technology Platforms</h2>
          <div className="flex flex-wrap items-center justify-center gap-1 bg-[#f1f5f9] border border-[var(--border)] rounded-[10px] p-1 w-fit mb-8 mx-auto">
            {Object.keys(platforms).map(key => (
              <button
                key={key}
                className={`py-[9px] px-[26px] text-[14px] font-semibold cursor-pointer rounded-[7px] border-none font-[family-name:var(--fd)] transition-all duration-200 whitespace-nowrap ${activeTab === key ? 'bg-[var(--grad)] text-white' : 'text-[var(--muted)] bg-transparent'}`}
                onClick={() => setActiveTab(key)}
              >
                {platforms[key].label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] border border-[var(--border)] rounded-[14px] overflow-hidden bg-white text-left">
            <div className="p-8 lg:border-r border-b lg:border-b-0 border-[var(--border)] bg-[#f8fafc]">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[var(--grad)] flex items-center justify-center font-[family-name:var(--fd)] text-[13px] font-extrabold text-white">{platforms[activeTab].id}</div>
                <div className="font-[family-name:var(--fd)] text-[19px] font-extrabold text-[var(--navy)]">{platforms[activeTab].label}</div>
              </div>
              <div className="text-[12px] text-[var(--muted)] italic mb-3.5">{platforms[activeTab].tagline}</div>
              <div className="text-[13.5px] text-[var(--muted)] leading-[1.7] mb-[24px]">{platforms[activeTab].desc}</div>
              <Link href="#" className="btn-out">Learn More <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px', marginBottom: '-2px' }} /></Link>
            </div>
            <div className="p-7">
              <div className="text-[10px] uppercase tracking-[2px] text-[var(--blue)] font-bold mb-4">Key Capabilities</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms[activeTab].caps.map((c, i) => (
                  <div className="flex items-start gap-[9px]" key={i}>
                    <div className="text-[15px] flex-shrink-0 mt-[1px] text-[var(--cyan)]">{c.ico}</div>
                    <div>
                      <div className="font-[family-name:var(--fd)] text-[12.5px] font-bold text-[var(--navy)] mb-[3px]">{c.name}</div>
                      <div className="text-[12px] text-[var(--muted)] leading-[1.5]">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
