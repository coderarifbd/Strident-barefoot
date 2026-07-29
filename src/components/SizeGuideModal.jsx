import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

const SIZE_DATA = [
  { us_men: 7, us_women: 8, eu: 39, uk: 6, cm: 24.5 },
  { us_men: 7.5, us_women: 8.5, eu: 40, uk: 6.5, cm: 25 },
  { us_men: 8, us_women: 9, eu: 41, uk: 7, cm: 25.5 },
  { us_men: 8.5, us_women: 9.5, eu: 41.5, uk: 7.5, cm: 26 },
  { us_men: 9, us_women: 10, eu: 42, uk: 8, cm: 26.5 },
  { us_men: 9.5, us_women: 10.5, eu: 43, uk: 8.5, cm: 27 },
  { us_men: 10, us_women: 11, eu: 44, uk: 9, cm: 27.5 },
  { us_men: 10.5, us_women: 11.5, eu: 44.5, uk: 9.5, cm: 28 },
  { us_men: 11, us_women: 12, eu: 45, uk: 10, cm: 28.5 },
  { us_men: 11.5, us_women: 12.5, eu: 46, uk: 10.5, cm: 29 },
  { us_men: 12, us_women: 13, eu: 47, uk: 11, cm: 29.5 },
  { us_men: 13, us_women: 14, eu: 48, uk: 12, cm: 30.5 },
];

export default function SizeGuideModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-backdrop fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 200 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#1a1a2e',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: '32px',
            width: '100%',
            maxWidth: 680,
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display" style={{ fontSize: 22, fontWeight: 800 }}>Size Guide</h2>
              <p style={{ fontSize: 13, color: '#8888aa', marginTop: 4 }}>
                Strident TrailGrip fits true to size
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                borderRadius: 8,
                padding: 8,
                cursor: 'pointer',
                color: '#f0f0f5',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Tip */}
          <div
            className="flex items-start gap-3 mb-6"
            style={{
              background: 'rgba(232,184,109,0.08)',
              border: '1px solid rgba(232,184,109,0.2)',
              borderRadius: 10,
              padding: '12px 14px',
            }}
          >
            <Info size={16} style={{ color: '#e8b86d', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 13, color: '#c0c0d8', lineHeight: 1.6 }}>
              For barefoot running shoes, we recommend going <strong style={{ color: '#e8b86d' }}>true to size</strong>. 
              The wide toe box allows natural toe splay. If between sizes, size up for a roomier feel.
              Measure your foot in the evening when feet are at their largest.
            </p>
          </div>

          {/* Table */}
          <div className="modal-scroll flex-1">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ background: 'rgba(232,184,109,0.1)' }}>
                    {['US Men', 'US Women', 'EU', 'UK', 'CM'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '10px 14px',
                          fontSize: 12,
                          fontWeight: 700,
                          color: '#e8b86d',
                          textAlign: 'center',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          borderBottom: '1px solid rgba(232,184,109,0.2)',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SIZE_DATA.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(232,184,109,0.06)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}
                    >
                      {[row.us_men, row.us_women, row.eu, row.uk, row.cm].map((val, j) => (
                        <td
                          key={j}
                          style={{
                            padding: '10px 14px',
                            fontSize: 14,
                            textAlign: 'center',
                            color: j === 0 ? '#f0f0f5' : '#c0c0d8',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                          }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Measuring Guide */}
          <div
            style={{
              marginTop: 20,
              paddingTop: 16,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, color: '#8888aa', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px' }}>
              How to Measure
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { step: '1', text: 'Place foot flat on paper and trace outline' },
                { step: '2', text: 'Measure heel to longest toe in cm' },
                { step: '3', text: 'Add 0.5cm and match to chart above' },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: 'linear-gradient(135deg, #e8b86d, #c9963a)',
                      borderRadius: '50%',
                      margin: '0 auto 8px',
                      fontSize: 12,
                      fontWeight: 800,
                      color: '#1a1a2e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.step}
                  </div>
                  <p style={{ fontSize: 11, color: '#8888aa', lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
