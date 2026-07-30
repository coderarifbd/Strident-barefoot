import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, BadgeCheck, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Marcus T.',
    location: 'Denver, CO',
    rating: 5,
    date: 'June 2026',
    title: 'No more foot or knee pain!',
    body: 'My feet used to hurt after every walk. Switching to these gave my toes lots of room to wiggle and relax. Now walking feels fun and easy again!',
    verified: true,
    size: 'US Men 10',
  },
  {
    id: 2,
    name: 'Sara L.',
    location: 'Portland, OR',
    rating: 5,
    date: 'May 2026',
    title: 'Feels like walking on grass!',
    body: "I love how soft and light these feel. My toes are never squished, and walking feels natural and effortless. My whole family wants a pair now!",
    verified: true,
    size: 'US Women 8.5',
  },
  {
    id: 3,
    name: 'James O.',
    location: 'Austin, TX',
    rating: 5,
    date: 'April 2026',
    title: 'Best shoes I ever bought',
    body: "Super easy to slip on with the quick toggle string. The non-slip bottom keeps me steady on wet ground, and my feet stay cool all day.",
    verified: true,
    size: 'US Men 11',
  },
  {
    id: 4,
    name: 'Nina P.',
    location: 'Seattle, WA',
    rating: 5,
    date: 'March 2026',
    title: 'Grandpa approved comfort!',
    body: 'I bought these for daily walks in the park. My ankles feel stronger, my back doesn\'t ache anymore, and my toes have plenty of room to stretch out.',
    verified: true,
    size: 'US Women 9',
  },
  {
    id: 5,
    name: 'Derek W.',
    location: 'Boulder, CO',
    rating: 5,
    date: 'February 2026',
    title: 'I wear them everywhere!',
    body: 'From walking the dog to hiking on rocky trails, these shoes are fantastic. Lightweight, super bendy, and extremely comfortable.',
    verified: true,
    size: 'US Men 9.5',
  },
  {
    id: 6,
    name: 'Aisha R.',
    location: 'Chicago, IL',
    rating: 4,
    date: 'January 2026',
    title: 'Great shoe, take the transition slow',
    body: 'If you\'re coming from cushioned shoes, take 2–3 weeks to transition slowly. I went too hard at first and got some calf soreness. But now that I\'ve adapted, these feel like a second skin. Earth Olive is stunning.',
    verified: true,
    size: 'US Women 7.5',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? '#e8b86d' : 'transparent'}
          style={{ color: i < rating ? '#e8b86d' : 'rgba(232,184,109,0.2)' }}
        />
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto" style={{ marginBottom: 48 }}>
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
            Customer Reviews
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            What Runners Are <span className="gold-text">Saying</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-3">
            <StarRating rating={5} />
            <span style={{ fontSize: 22, fontWeight: 900 }} className="gold-text">{avgRating}</span>
            <span style={{ fontSize: 14, color: '#8e8eb4', fontWeight: 500 }}>({REVIEWS.length} verified reviews)</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll(-1)}
              style={{
                width: 44,
                height: 44,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#f0f0f5',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,184,109,0.4)';
                e.currentTarget.style.color = '#e8b86d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#f0f0f5';
              }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll(1)}
              style={{
                width: 44,
                height: 44,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#f0f0f5',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,184,109,0.4)';
                e.currentTarget.style.color = '#e8b86d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#f0f0f5';
              }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Scrollable Container with Smooth Padding */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingTop: 8,
            paddingBottom: 24,
            paddingLeft: 4,
            paddingRight: 4,
            margin: '0 -4px',
          }}
        >
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              style={{
                width: 'calc(100vw - 48px)',
                maxWidth: 360,
                minWidth: 320,
                scrollSnapAlign: 'start',
                flexShrink: 0,
                background: 'rgba(16, 17, 28, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 20,
                padding: '24px 24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                {/* Top Bar: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span
                    style={{
                      background: 'rgba(232,184,109,0.1)',
                      border: '1px solid rgba(232,184,109,0.2)',
                      borderRadius: 6,
                      padding: '3px 8px',
                      fontSize: 11,
                      color: '#e8b86d',
                      fontWeight: 700,
                    }}
                  >
                    {review.date}
                  </span>
                </div>

                {/* Title */}
                <h4 style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f5', marginBottom: 10, lineHeight: 1.35 }}>
                  "{review.title}"
                </h4>

                {/* Body Text */}
                <p style={{ fontSize: 13.5, color: '#c0c0d8', lineHeight: 1.7, marginBottom: 20 }}>
                  {review.body}
                </p>
              </div>

              {/* Footer Divider + User Info */}
              <div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 14 }} />
                <div className="flex items-center justify-between">
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#f0f0f5' }}>{review.name}</div>
                    <div style={{ fontSize: 11, color: '#8e8eb4', marginTop: 2 }}>{review.location} · {review.size}</div>
                  </div>
                  {review.verified && (
                    <div
                      className="flex items-center gap-1"
                      style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.25)',
                        borderRadius: 12,
                        padding: '3px 8px',
                        fontSize: 11,
                        color: '#22c55e',
                        fontWeight: 700,
                      }}
                    >
                      <BadgeCheck size={13} />
                      Verified
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
