import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';

const HOTSPOTS = [
  {
    id: 1,
    x: '28%',
    y: '58%',
    title: 'Wide Toe Box & Toe Guard',
    desc: 'Ample space lets toes spread out naturally without red pressure spots. Tough rubber cap protects toes against rocks!',
    tag: 'Pure Barefoot Freedom',
    icon: Sparkles,
  },
  {
    id: 2,
    x: '52%',
    y: '72%',
    title: 'Instant Drainage Holes',
    desc: 'Bottom drainage holes let water pour out instantly so you move effortlessly during every beach wade or trail crossing.',
    tag: 'Quick-Dry Sole',
    icon: Zap,
  },
  {
    id: 3,
    x: '76%',
    y: '54%',
    title: 'Zero Drop Soles',
    desc: 'Sense the ground fully with a natural walking gait. Relieves joint pressure for all-day easy walking.',
    tag: 'Natural Gait Platform',
    icon: Shield,
  },
  {
    id: 4,
    x: '48%',
    y: '34%',
    title: '360° Flexible & Light Mesh',
    desc: 'Twists completely in half! Breathable fabric and skin-friendly lining give you lightweight comfort without limits.',
    tag: 'Super Bendy Upper',
    icon: Check,
  },
];

export default function ShoeHotspots() {
  const [activeSpot, setActiveSpot] = useState(HOTSPOTS[0]);

  return (
    <section style={{ padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(232, 184, 109, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 20 }}>
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
            Simple & Smart Design
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            How Our Shoe <span className="gold-text">Helps Your Feet</span>
          </h2>
          <p style={{ fontSize: 16, color: '#8e8eb4', marginTop: 16 }}>
            Click the glowing dots on the shoe to see why your feet will love walking in these!
          </p>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Shoe Image with Hotspot Pins (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div
              style={{
                position: 'relative',
                background: 'radial-gradient(circle at center, rgba(30, 32, 50, 0.6) 0%, rgba(10, 11, 18, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 28,
                padding: '30px 20px',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <img
                src="/feature_flexibility.jpg"
                alt="Strident Barefoot Feature Visualizer"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 16,
                  display: 'block',
                }}
              />

              {/* Hotspot Pins */}
              {HOTSPOTS.map((spot) => {
                const isActive = activeSpot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    aria-label={spot.title}
                    style={{
                      position: 'absolute',
                      left: spot.x,
                      top: spot.y,
                      transform: 'translate(-50%, -50%)',
                      width: isActive ? 34 : 26,
                      height: isActive ? 34 : 26,
                      borderRadius: '50%',
                      background: isActive
                        ? 'linear-gradient(135deg, #f5d08c, #e8b86d)'
                        : 'rgba(10, 11, 18, 0.85)',
                      border: isActive
                        ? '2px solid #ffffff'
                        : '2px solid rgba(232, 184, 109, 0.8)',
                      boxShadow: isActive
                        ? '0 0 25px rgba(232, 184, 109, 0.9)'
                        : '0 0 12px rgba(0, 0, 0, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 20,
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: isActive ? '#0b0c16' : '#e8b86d',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Specs Detail Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              {HOTSPOTS.map((spot) => {
                const isActive = activeSpot.id === spot.id;
                const IconComponent = spot.icon;
                return (
                  <motion.div
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    whileHover={{ x: 6 }}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(232,184,109,0.14) 0%, rgba(22,22,38,0.85) 100%)'
                        : 'rgba(22, 22, 38, 0.4)',
                      border: isActive
                        ? '1px solid rgba(232, 184, 109, 0.45)'
                        : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: 20,
                      padding: 20,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive
                        ? '0 15px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(232, 184, 109, 0.2)'
                        : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: isActive
                              ? 'linear-gradient(135deg, #e8b86d, #c9963a)'
                              : 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isActive ? '#0b0c16' : '#e8b86d',
                          }}
                        >
                          <IconComponent size={18} />
                        </div>
                        <h3
                          style={{
                            fontSize: 18,
                            fontWeight: 800,
                            color: isActive ? '#ffffff' : '#f0f0f5',
                          }}
                        >
                          {spot.title}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: '#e8b86d',
                          background: 'rgba(232,184,109,0.12)',
                          padding: '3px 10px',
                          borderRadius: 12,
                        }}
                      >
                        {spot.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: isActive ? '#d8d8ea' : '#8e8eb4',
                        lineHeight: 1.6,
                        marginTop: 6,
                      }}
                    >
                      {spot.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
