import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import ReviewCarousel from '../components/ReviewCarousel';
import ShoeHotspots from '../components/ShoeHotspots';
import ComparisonTable from '../components/ComparisonTable';

const BENEFITS = [
  {
    icon: '👣',
    img: '/feature_toebox.jpg',
    title: 'Wide Toe Box & Protection',
    desc: 'Ample space lets your toes spread out naturally without red pressure spots. Plus a tough rubber toe guard protects against rocks!',
  },
  {
    icon: '⚡',
    img: '/feature_zerodrop.jpg',
    title: 'Zero-Drop Soles',
    desc: '100% Flat from heel to toe! Promotes natural walking posture and relieves pressure on your back, knees, and hips for all-day comfort.',
  },
  {
    icon: '💧',
    img: '/feature_drainage.jpg',
    title: 'Instant Water Drainage',
    desc: 'Special sole drainage holes pour water right out when wading! Quick-drying breathable fabric keeps your feet cool and dry.',
  },
  {
    icon: '🌀',
    img: '/feature_flexibility.jpg',
    title: '360° Twistable Flex',
    desc: 'Twists completely in half! Super lightweight and flexible construction lets your feet move freely without any limits.',
  },
];

const STATS = [
  { value: '12,000+', label: 'Happy Walkers', Icon: Users },
  { value: '4.9★', label: 'Love Rating', Icon: Star },
  { value: '30-Day', label: 'Happy Guarantee', Icon: Award },
  { value: '100%', label: 'Flexible Sole', Icon: Zap },
];

const HERO_SLIDES = [
  { img: '/feature_toebox.jpg', label: 'Wide Toe Box Freedom', tag: '👣 Toe Protection' },
  { img: '/feature_zerodrop.jpg', label: 'Zero-Drop Flat Soles', tag: '⚡ Natural Gait' },
  { img: '/feature_flexibility.jpg', label: '360° Twistable Flex', tag: '🌀 Super Bendy' },
  { img: '/feature_drainage.jpg', label: 'Instant Water Drainage', tag: '💧 Quick-Dry' },
  { img: '/feature_lifestyle.jpg', label: 'Multi-Activity Lifestyle', tag: '🏄 All-Terrain' },
];

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

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
          paddingTop: 40,
          paddingBottom: 60,
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
            filter: 'brightness(0.25)',
          }}
        />

        {/* Dynamic Gradient Glow Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 70% 30%, rgba(232, 184, 109, 0.12) 0%, transparent 60%), linear-gradient(135deg, rgba(15,15,26,0.92) 0%, rgba(26,26,46,0.75) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Headline & Benefits (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Category Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(232,184,109,0.14)',
                  border: '1px solid rgba(232,184,109,0.3)',
                  borderRadius: 20,
                  padding: '6px 18px',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#e8b86d',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                  boxShadow: '0 0 25px rgba(232,184,109,0.2)',
                }}
              >
                <span>🌊 Instant Drainage</span>
                <span>•</span>
                <span>👣 Wide Toe Box</span>
                <span>•</span>
                <span>⚡ Zero Drop</span>
              </motion.div>

              {/* Headline */}
              <h1
                className="hero-heading"
                style={{
                  fontSize: 'clamp(42px, 5.5vw, 76px)',
                  lineHeight: 1.05,
                  marginBottom: 20,
                  textAlign: 'left',
                  letterSpacing: '-0.02em',
                }}
              >
                Walk Free.
                <br />
                <span className="gold-text">Feel Happy.</span>
                <br />
                Pure Barefoot Freedom.
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 18px)',
                  color: 'rgba(240,240,245,0.85)',
                  lineHeight: 1.7,
                  marginBottom: 28,
                  maxWidth: 620,
                }}
              >
                Super comfortable water & trail barefoot shoes! Designed with instant sole drainage ports, zero-drop soles, 360° twistable flex, and a protective wide toe box.
              </p>

              {/* Feature Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 w-full max-w-xl">
                {[
                  { icon: '💧', text: 'Instant Sole Drainage Holes' },
                  { icon: '👣', text: 'Wide Toe Box & Toe Guard' },
                  { icon: '⚡', text: '100% Flat Zero-Drop Soles' },
                  { icon: '🌀', text: '360° Flexible & Featherlight' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 10,
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontSize: 13, color: 'rgba(240,240,245,0.9)', fontWeight: 600 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Distinct Action Block with Generous Spacing */}
              <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-xl"
                style={{ marginTop: 16, marginBottom: 40 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link
                    to="/shop"
                    className="btn-gold w-full flex items-center justify-center gap-2"
                    style={{
                      padding: '16px 24px',
                      fontSize: 15.5,
                      fontWeight: 700,
                      textDecoration: 'none',
                      borderRadius: 14,
                      boxShadow: '0 8px 25px rgba(232, 184, 109, 0.28)',
                      minHeight: 54,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>Get Your Pair — $119</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <a
                    href="#philosophy"
                    className="w-full flex items-center justify-center gap-2"
                    style={{
                      padding: '16px 24px',
                      fontSize: 15.5,
                      background: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 14,
                      color: '#f0f0f5',
                      textDecoration: 'none',
                      fontWeight: 600,
                      minHeight: 54,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>Why Barefoot is Best</span>
                  </a>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div
                className="flex flex-wrap items-center justify-between gap-4 max-w-xl"
                style={{
                  paddingTop: 24,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  width: '100%',
                }}
              >
                <div className="flex items-center gap-2">
                  <div style={{ color: '#e8b86d', fontSize: 14 }}>⭐</div>
                  <span style={{ fontSize: 12.5, color: 'rgba(240,240,245,0.75)', fontWeight: 500 }}>
                    4.9/5 from 12,000+ happy feet
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ color: '#e8b86d', fontSize: 14 }}>🚚</div>
                  <span style={{ fontSize: 12.5, color: 'rgba(240,240,245,0.75)', fontWeight: 500 }}>
                    Free shipping over $75
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ color: '#e8b86d', fontSize: 14 }}>🛡️</div>
                  <span style={{ fontSize: 12.5, color: 'rgba(240,240,245,0.75)', fontWeight: 500 }}>
                    30-Day happy guarantee
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Product Showcase Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div
                style={{
                  position: 'relative',
                  background: 'radial-gradient(circle at top right, rgba(232, 184, 109, 0.15), rgba(15, 16, 28, 0.95) 70%)',
                  border: '1px solid rgba(232, 184, 109, 0.3)',
                  borderRadius: 28,
                  padding: 20,
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(232, 184, 109, 0.15)',
                }}
              >
                {/* Main Image View */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '1/1',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: '#0d0e17',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeHeroSlide}
                      src={HERO_SLIDES[activeHeroSlide].img}
                      alt={HERO_SLIDES[activeHeroSlide].label}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </AnimatePresence>

                  {/* Floating Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      background: 'rgba(10, 11, 18, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(232, 184, 109, 0.4)',
                      borderRadius: 20,
                      padding: '5px 14px',
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#f0f0f5',
                    }}
                  >
                    {HERO_SLIDES[activeHeroSlide].tag}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: 14,
                      left: 14,
                      right: 14,
                      background: 'rgba(10, 11, 18, 0.88)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 14,
                      padding: '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#e8b86d' }}>
                      {HERO_SLIDES[activeHeroSlide].label}
                    </span>
                    <span style={{ fontSize: 11, color: '#8e8eb4', fontWeight: 600 }}>
                      Image {activeHeroSlide + 1} of 5
                    </span>
                  </div>
                </div>

                {/* Interactive Thumbnail Selector Bar */}
                <div style={{ marginTop: 14 }}>
                  <p style={{ fontSize: 11, color: '#8888aa', marginBottom: 8, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center' }}>
                    Click to Inspect Amazon Product Graphics:
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveHeroSlide(idx)}
                        style={{
                          aspectRatio: '1/1',
                          borderRadius: 10,
                          overflow: 'hidden',
                          padding: 0,
                          border: activeHeroSlide === idx ? '2px solid #e8b86d' : '1px solid rgba(255,255,255,0.15)',
                          opacity: activeHeroSlide === idx ? 1 : 0.65,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          background: '#0e0f17',
                        }}
                      >
                        <img src={slide.img} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
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
                Why Barefoot Shoes?
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}
              >
                Your Feet Were Made
                <br />
                <span className="gold-text">To Move Freely!</span>
              </h2>
              <p style={{ fontSize: 16, color: '#c0c0d8', lineHeight: 1.8, marginBottom: 20 }}>
                Stiff old shoes squeeze your toes together and lift your heels unnaturally. That can make your feet, knees, and back tired and sore!
              </p>
              <p style={{ fontSize: 16, color: '#c0c0d8', lineHeight: 1.8, marginBottom: 32 }}>
                Strident Barefoot shoes give your toes lots of room to wiggle and keep your feet completely flat. It feels just like walking barefoot, with a protective non-slip sole!
              </p>
              <Link
                to="/shop"
                className="btn-gold inline-flex items-center gap-2"
                style={{ padding: '14px 28px', fontSize: 15, textDecoration: 'none', borderRadius: 12 }}
              >
                Try Happy Feet Shoes
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
                  src="/feature_zerodrop.jpg"
                  alt="Zero Drop Barefoot Shoe"
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
                className="benefit-card glass-card flex flex-col"
                style={{ overflow: 'hidden', padding: 0 }}
              >
                <div style={{ aspectRatio: '1/1', width: '100%', overflow: 'hidden', background: '#0e0f17', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <img src={benefit.img} alt={benefit.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }} className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        background: 'rgba(232,184,109,0.1)',
                        border: '1px solid rgba(232,184,109,0.2)',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>{benefit.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: '#c0c0d8', lineHeight: 1.6 }}>{benefit.desc}</p>
                </div>
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
