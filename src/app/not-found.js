import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '120px 0', textAlign: 'center', background: '#f8fafc', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ fontFamily: 'var(--fd)', fontSize: '64px', color: 'var(--navy)', marginBottom: '16px' }}>404</h1>
        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--navy)', marginBottom: '16px' }}>Page Under Migration</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>This page is currently being migrated to Next.js. Please check back soon!</p>
        <Link href="/" className="btn-prim">Back to Home</Link>
      </div>
    </main>
  );
}
