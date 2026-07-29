import { Link } from 'react-router-dom';
import { Footprints, ExternalLink, Mail, Globe, Share2, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import useUIStore from '../store/uiStore';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', modal: 'privacy' },
  { label: 'Terms of Service', modal: 'terms' },
  { label: 'Return & Exchange Policy', modal: 'returns' },
  { label: 'Compliance & Legal Notice', modal: 'compliance' },
];

export default function Footer() {
  const { openModal } = useUIStore();

  return (
    <footer
      style={{
        background: '#090a10',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 80,
        paddingBottom: 40,
        width: '100%',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #f5d08c, #e8b86d, #c9963a)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(232, 184, 109, 0.3)',
                }}
              >
                <Footprints size={24} color="#0b0c16" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-brand" style={{ fontSize: 24, letterSpacing: '1.5px', lineHeight: 1 }}>
                  <span className="gold-text">STRIDENT</span>
                </div>
                <div style={{ fontSize: 10, color: '#8e8eb4', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', marginTop: 2 }}>
                  BAREFOOT
                </div>
              </div>
            </Link>

            <p style={{ fontSize: 14.5, color: '#a1a1aa', lineHeight: 1.75, maxWidth: 420 }}>
              Engineering footwear that honors the natural biomechanics of the human foot. 
              Zero-drop, wide toe box design for peak athletic performance and lifelong foot strength.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { Icon: Globe, href: '#', label: 'Website' },
                { Icon: Share2, href: '#', label: 'Share' },
                { Icon: Heart, href: '#', label: 'Favorites' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a1a1aa',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#e8b86d';
                    e.currentTarget.style.color = '#e8b86d';
                    e.currentTarget.style.background = 'rgba(232, 184, 109, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#a1a1aa';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#e8b86d',
                marginBottom: 4,
              }}
            >
              Explore & Shop
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Shop TrailGrip Minimalist', to: '/shop' },
                { label: 'Our Barefoot Philosophy', to: '/#philosophy' },
                { label: 'Interactive Size Guide', modal: 'sizeGuide' },
                { label: 'Track Order Status', to: '#' },
              ].map((link) => (
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{
                      fontSize: 14,
                      color: '#a1a1aa',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e8b86d'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => openModal(link.modal)}
                    style={{
                      fontSize: 14,
                      color: '#a1a1aa',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e8b86d'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Contact & Support (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#e8b86d',
                marginBottom: 4,
              }}
            >
              Customer Support
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:hello@ridgewellsupplycollc.com"
                className="flex items-center gap-2.5"
                style={{ fontSize: 14, color: '#d4d4d8', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e8b86d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d4d4d8'}
              >
                <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(232,184,109,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} style={{ color: '#e8b86d' }} />
                </div>
                hello@ridgewellsupplycollc.com
              </a>

              <a
                href="https://ridgewellsupplycollc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
                style={{ fontSize: 14, color: '#d4d4d8', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e8b86d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d4d4d8'}
              >
                <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(232,184,109,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ExternalLink size={14} style={{ color: '#e8b86d' }} />
                </div>
                ridgewellsupplycollc.com
              </a>

              <div style={{ fontSize: 13, color: '#8e8eb4', lineHeight: 1.6, marginTop: 4 }}>
                ⏱️ Mon–Fri: 9:00 AM – 6:00 PM EST<br />
                📦 Express orders ship within 1–2 business days
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(232, 184, 109, 0.25), transparent)', margin: '40px 0 32px' }} />

        {/* Legal Links */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          style={{ marginBottom: 28, marginTop: 4 }}
        >
          {LEGAL_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => openModal(link.modal)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 13,
                color: '#a1a1aa',
                cursor: 'pointer',
                padding: '4px 8px',
                transition: 'color 0.2s ease',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e8b86d'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Corporate Attribution Banner */}
        <div
          style={{
            background: 'rgba(18, 19, 32, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 16,
            padding: '22px 28px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          }}
        >
          <p style={{ fontSize: 13, color: '#d4d4d8', lineHeight: 1.7, fontWeight: 500 }}>
            Strident Barefoot is owned and operated by{' '}
            <a
              href="https://ridgewellsupplycollc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text"
              style={{ textDecoration: 'none', fontWeight: 800 }}
            >
              Ridgewell Supply Co LLC
            </a>
            . All rights reserved. © {new Date().getFullYear()} Ridgewell Supply Co LLC.
          </p>
          <p style={{ fontSize: 12, color: '#8e8eb4', marginTop: 4 }}>
            Strident TrailGrip Minimalist Running Shoe — Zero-Drop Footwear Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
