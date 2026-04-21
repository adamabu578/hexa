import Link from 'next/link';
import "./Footer.css";

const Twitter = ({ size = 18, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size = 18, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 18, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="glass" style={{ borderTop: 'none', background: 'rgba(255,255,255,0.02)' }}>
      <div className="fnews glass" style={{ margin: '0 auto 60px', maxWidth: '1100px', borderRadius: '20px', border: '1px solid var(--border)' }}>
        <div className="d-inner fnews-inner">
          <div style={{fontSize:'16px', fontWeight: 600, color: 'var(--navy)'}}>Stay ahead with our banking insights</div>
          <div className="fnews-form">
            <input type="email" className="fnews-input" placeholder="Work Email*" />
            <button className="btn-prim">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="d-inner">
        <div className="ftop">
          <div className="fbrand">
            <div style={{display:'flex', alignItems:'center', gap:'9px'}}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <polygon points="18,1 33,9 33,27 18,35 3,27 3,9" fill="none" stroke="url(#fg)" strokeWidth="2.2"/>
                <line x1="13" y1="11" x2="13" y2="25" stroke="url(#fg)" strokeWidth="2.8" strokeLinecap="round"/>
                <line x1="23" y1="11" x2="23" y2="25" stroke="url(#fg)" strokeWidth="2.8" strokeLinecap="round"/>
                <line x1="13" y1="18" x2="23" y2="18" stroke="url(#fg)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="fg" x1="3" y1="1" x2="33" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00c8e8"/><stop offset="100%" stopColor="#1a6fd4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{fontFamily:'var(--fd)', fontSize:'17px', fontWeight:'800', color:'#0d1f4a'}}>Hexatech</span>
            </div>
            <p>The composable Open Finance Platform for banks, fintechs, and financial institutions worldwide.</p>
            <div className="fsocials" style={{marginTop:'16px'}}>
              <div className="fsoc"><Twitter size={18} strokeWidth={2} /></div>
              <div className="fsoc"><Linkedin size={18} strokeWidth={2} /></div>
              <div className="fsoc"><Youtube size={18} strokeWidth={2} /></div>
            </div>
          </div>
          <div className="fcols">
            <div className="fcol">
              <h4>Products</h4>
              <ul>
                <li><Link href="/pages/core-banking/consumer-core-banking">Consumer Core Banking</Link></li>
                <li><Link href="/pages/core-banking/corporate-core-banking">Corporate Core Banking</Link></li>
                <li><Link href="/pages/lending/consumer-originations">Consumer Originations</Link></li>
                <li><Link href="/pages/lending/debt-collections">Debt Collections</Link></li>
                <li><Link href="/pages/cards/consumer-cards">Consumer Cards</Link></li>
                <li><Link href="/pages/wealth-capital-markets/wealth-management">Wealth Management</Link></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Solutions</h4>
              <ul>
                <li><Link href="#">Commercial Banks</Link></li>
                <li><Link href="#">Digital Banks</Link></li>
                <li><Link href="#">NBFCs</Link></li>
                <li><Link href="#">Fintechs</Link></li>
                <li><Link href="#">Central Banks</Link></li>
                <li><Link href="#">Insurance</Link></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Technology</h4>
              <ul>
                <li><Link href="/technology">Overview</Link></li>
                <li><Link href="/partners">Partners</Link></li>
                <li><Link href="/docs">Developer Portal</Link></li>
                <li><Link href="#">API Reference</Link></li>
                <li><Link href="#">Security</Link></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about/our-story">About Us</Link></li>
                <li><Link href="/about/our-leadership">Leadership</Link></li>
                <li><Link href="/about/careers">Careers</Link></li>
                <li><Link href="/about/our-investors">Investors</Link></li>
                <li><Link href="/about/social-impact">Social Impact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fbot">
          <p>© 2026 Hexatech Inc. All rights reserved.</p>
          <div className="fleg">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
