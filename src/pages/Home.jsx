import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import ReviewCarousel from '../components/ReviewCarousel';
import ShoeHotspots from '../components/ShoeHotspots';
import ComparisonTable from '../components/ComparisonTable';

const BENEFITS = [
  {
    icon: '👣',
    title: 'Wide Toe Box',
    desc: 'Anatomically shaped toe box allows your toes to splay naturally, strengthening intrinsic foot muscles and improving balance with every step.',
  },
  {
    icon: '⚡',
    title: 'Zero-Drop Heel',
    desc: 'Equal heel-to-toe height promotes a natural midfoot strike, reducing impact forces and lower back stress for healthier long-term biomechanics.',
  },
  {
    icon: '🌊',
    title: 'Ultra-Flexible Sole',
    desc: 'Our 4mm TrailGrip outsole flexes with your foot in 360°, allowing every muscle and tendon to activate and develop with each run.',
  },
  {
    icon: '🌍',
    title: 'Ground Feel Sensory',
    desc: 'Proprioceptive feedback from the trail surface sharpens your nervous system response, improving agility and reducing injury risk over time.',
  },
];

const STATS = [
  { value: '12,000+', label: 'Happy Runners', Icon: Users },
  { value: '4.9★', label: 'Average Rating', Icon: Star },
  { value: '30-Day', label: 'Motion Guarantee', Icon: Award },
  { value: '4mm', label: 'TrailGrip Sole', Icon: Zap },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero_banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,15,26,0.85) 0%, rgba(26,26,46,0.5) 50%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 840, margin: '0 auto' }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(232,184,109,0.12)',
                border: '1px solid rgba(232,184,109,0.25)',
                borderRadius: 20,
                padding: '6px 18px',
                fontSize: 13,
                fontWeight: 700,
                color: '#e8b86d',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: 24,
                boxShadow: '0 0 20px rgba(232,184,109,0.15)',
              }}
            >
              🏃 New: TrailGrip Minimalist
            </motion.div>

            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(52px, 8vw, 96px)',
                marginBottom: 24,
                textAlign: 'center',
              }}
            >
              Reconnect With
              <br />
              <span className="gold-text">Every Step.</span>
              <br />
              Zero-Drop Footwear.
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: 'rgba(240,240,245,0.8)',
                lineHeight: 1.75,
                marginBottom: 40,
                maxWidth: 680,
                margin: '0 auto 40px',
                textAlign: 'center',
              }}
            >
              The Strident TrailGrip Minimalist Running Shoe. Engineered to honor your
              foot's natural movement — feel the ground, free your stride.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/shop"
                  className="btn-gold flex items-center gap-2"
                  style={{ padding: '18px 36px', fontSize: 17, display: 'inline-flex', textDecoration: 'none', borderRadius: 14 }}
                >
                  Shop TrailGrip — $119.00
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <a
                  href="#philosophy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '18px 36px',
                    fontSize: 17,
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 14,
                    color: '#f0f0f5',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Our Philosophy
                </a>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8" style={{ marginTop: 10 }}>
              <div className="flex items-center gap-2">
                <div style={{ color: '#e8b86d', fontSize: 16 }}>⭐</div>
                <span style={{ fontSize: 14, color: 'rgba(240,240,245,0.7)', fontWeight: 500 }}>4.9/5 from 12,000+ runners</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: '#e8b86d', fontSize: 16 }}>🚚</div>
                <span style={{ fontSize: 14, color: 'rgba(240,240,245,0.7)', fontWeight: 500 }}>Free shipping over $75</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: '#e8b86d', fontSize: 16 }}>🛡️</div>
                <span style={{ fontSize: 14, color: 'rgba(240,240,245,0.7)', fontWeight: 500 }}>30-Day guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to top, #0f0f1a, transparent)',
          }}
        />
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'rgba(232,184,109,0.04)', borderTop: '1px solid rgba(232,184,109,0.1)', borderBottom: '1px solid rgba(232,184,109,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: 'rgba(232, 184, 109, 0.1)',
                    border: '1px solid rgba(232, 184, 109, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                    boxShadow: '0 4px 15px rgba(232, 184, 109, 0.1)',
                  }}
                >
                  <stat.Icon size={26} style={{ color: '#e8b86d', strokeWidth: 2.2 }} />
                </div>
                <div
                  className="font-display gold-text"
                  style={{ fontSize: 32, fontWeight: 800, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 14, color: '#8888aa', marginTop: 6, fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#e8b86d',
                  marginBottom: 16,
                }}
              >
                The Strident Philosophy
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}
              >
                Your Feet Were Built
                <br />
                <span className="gold-text">for This.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#c0c0d8', lineHeight: 1.8, marginBottom: 20 }}>
                Modern footwear has been systematically weakening the human foot for decades.
                Excessive cushioning, elevated heels, and narrow toe boxes force unnatural
                movement patterns that lead to pain, injury, and dysfunction.
              </p>
              <p style={{ fontSize: 16, color: '#c0c0d8', lineHeight: 1.8, marginBottom: 32 }}>
                Strident Barefoot was founded on a simple principle: trust your body.
                Our TrailGrip shoe is a tool for reconnection — not a replacement for
                what evolution already perfected over 2 million years.
              </p>
              <Link
                to="/shop"
                className="btn-gold inline-flex items-center gap-2"
                style={{ padding: '14px 28px', fontSize: 15, textDecoration: 'none', borderRadius: 12 }}
              >
                Experience the TrailGrip
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative' }}
            >
              <div className="float" style={{ position: 'relative', zIndex: 1 }}>
                <img
                  src="/shoe_earth_olive.jpg"
                  alt="Earth Olive TrailGrip"
                  style={{
                    width: '100%',
                    borderRadius: 24,
                    boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                  }}
                />
              </div>
              {/* Decorative glow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -40,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70%',
                  height: 80,
                  background: 'radial-gradient(ellipse, rgba(232,184,109,0.2), transparent)',
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#e8b86d',
                marginBottom: 12,
              }}
            >
              Engineered for Natural Motion
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Four Features That
              <br />
              <span className="gold-text">Change Everything</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="benefit-card glass-card"
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: 'rgba(232,184,109,0.1)',
                    border: '1px solid rgba(232,184,109,0.2)',
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{benefit.title}</h3>
                <p style={{ fontSize: 13, color: '#c0c0d8', lineHeight: 1.7 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Shoe Hotspots */}
      <ShoeHotspots />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Review Carousel */}
      <ReviewCarousel />

      {/* CTA Banner */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(232,184,109,0.12) 0%, rgba(201,150,58,0.06) 100%)',
              border: '1px solid rgba(232,184,109,0.2)',
              borderRadius: 24,
              padding: 'clamp(40px, 6vw, 64px)',
              textAlign: 'center',
            }}
          >
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 16 }}
            >
              Ready to Run Free?
            </h2>
            <p style={{ fontSize: 16, color: '#c0c0d8', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Join 12,000+ runners who've made the switch to natural motion.
              Backed by our 30-Day Natural Motion Guarantee.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link
                to="/shop"
                className="btn-gold inline-flex items-center gap-2"
                style={{ padding: '18px 40px', fontSize: 17, textDecoration: 'none', borderRadius: 14 }}
              >
                Shop TrailGrip — $119.00
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <p style={{ fontSize: 13, color: '#8888aa', marginTop: 16 }}>
              Free shipping over $75 · Promo codes: BAREFOOT10 | STRIDENT15 | TRAIL20
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
