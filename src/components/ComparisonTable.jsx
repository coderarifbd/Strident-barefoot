import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

const COMPARISONS = [
  {
    feature: 'Toe Room & Protection',
    traditional: 'Narrow tip squishes toes causing red pain spots & zero toe guard',
    strident: 'Wide toe box lets toes spread out naturally, with protective rubber toe cap!',
  },
  {
    feature: 'Sole Height (Zero Drop)',
    traditional: 'High artificial heel tilts posture and strains knees & lower back',
    strident: '100% Flat Zero Drop sole lets you sense ground with natural gait',
  },
  {
    feature: 'Water & Moisture Handling',
    traditional: 'Holds water inside like a heavy wet sponge when walking in water',
    strident: 'Instant sole drainage holes pour water right out for quick-dry comfort',
  },
  {
    feature: 'Flexibility & Weight',
    traditional: 'Heavy stiff sole restricts foot movement and causes foot fatigue',
    strident: 'Ultra-flexible 360° twistable sole moves effortlessly without limits',
  },
  {
    feature: 'All-Day Versatility',
    traditional: 'Limited to basic walking on flat pavement',
    strident: 'Great for beach wading, boating, trail hiking, gym, and daily wear!',
  },
];

export default function ComparisonTable() {
  return (
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 56 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#e8b86d',
              background: 'rgba(232,184,109,0.1)',
              border: '1px solid rgba(232,184,109,0.25)',
              padding: '6px 16px',
              borderRadius: 20,
              display: 'inline-block',
              marginBottom: 16,
            }}
          >
            Easy Side-By-Side Comparison
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            Regular Old Shoes vs. <span className="gold-text">Strident Barefoot</span>
          </h2>
          <p style={{ fontSize: 16, color: '#8e8eb4', marginTop: 14 }}>
            See why switching to barefoot shoes makes walking feel so much easier and more fun!
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div
          style={{
            background: 'rgba(15, 16, 28, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 0, 0, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontSize: 12,
                      fontWeight: 800,
                      color: '#8e8eb4',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      width: '28%',
                    }}
                  >
                    Feature / Specification
                  </th>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontSize: 13,
                      fontWeight: 800,
                      color: '#ef4444',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '36%',
                    }}
                  >
                    Traditional Shoes
                  </th>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontSize: 13,
                      fontWeight: 800,
                      color: '#e8b86d',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '36%',
                      background: 'rgba(232, 184, 109, 0.06)',
                      borderLeft: '1px solid rgba(232, 184, 109, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} style={{ color: '#e8b86d' }} />
                      <span className="gold-text">Strident Barefoot</span>
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #e8b86d, #c9963a)',
                          color: '#0b0c16',
                          fontSize: 10,
                          fontWeight: 900,
                          padding: '2px 8px',
                          borderRadius: 12,
                          marginLeft: 'auto',
                        }}
                      >
                        RECOMMENDED
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: idx < COMPARISONS.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    {/* Feature Name */}
                    <td
                      style={{
                        padding: '20px 24px',
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#f0f0f5',
                        verticalAlign: 'top',
                      }}
                    >
                      {row.feature}
                    </td>

                    {/* Traditional Shoes */}
                    <td style={{ padding: '20px 24px', verticalAlign: 'top' }}>
                      <div className="flex items-start gap-3">
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            background: 'rgba(239, 68, 68, 0.12)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          <X size={12} style={{ color: '#ef4444' }} />
                        </div>
                        <span style={{ fontSize: 13, color: '#8e8eb4', lineHeight: 1.5 }}>
                          {row.traditional}
                        </span>
                      </div>
                    </td>

                    {/* Strident Barefoot */}
                    <td
                      style={{
                        padding: '20px 24px',
                        verticalAlign: 'top',
                        background: 'rgba(232, 184, 109, 0.03)',
                        borderLeft: '1px solid rgba(232, 184, 109, 0.15)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: 'rgba(34, 197, 94, 0.18)',
                            border: '1px solid rgba(34, 197, 94, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: 1,
                            boxShadow: '0 0 10px rgba(34, 197, 94, 0.2)',
                          }}
                        >
                          <Check size={14} style={{ color: '#22c55e' }} />
                        </div>
                        <span style={{ fontSize: 14, color: '#22c55e', fontWeight: 600, lineHeight: 1.5 }}>
                          {row.strident}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
