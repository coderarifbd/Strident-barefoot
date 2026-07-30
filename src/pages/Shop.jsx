import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Shield, Truck, RefreshCw, Star, ChevronDown, ChevronUp } from 'lucide-react';
import ProductGallery from '../components/ProductGallery';
import SizeSelector from '../components/SizeSelector';
import useUIStore from '../store/uiStore';
import useCartStore from '../store/cartStore';

const PRODUCT = {
  id: 'strident-trailgrip-001',
  name: 'Strident Water & Trail Barefoot Shoe',
  price: 119.0,
  shortDesc: 'Move without limits! Features instant sole drainage holes, 100% zero-drop soles, wide toe box with rubber toe protection, and 360° twistable flexibility.',
};

const FEATURES = [
  'Instant Sole Drainage Holes — Water flows right out when wading',
  'Zero-Drop Soles — Sense the ground fully with natural walking gait',
  'Wide Toe Box — Ample space lets toes spread out naturally without red pinch spots',
  'Protective Rubber Toe Guard — Keeps toes safe from rocks, stumps & trail debris',
  '360° Twistable Flex — Ultra-lightweight construction rolls & bends freely',
  'Quick-Dry Breathable Fabric & Skin-Friendly Soft Lining',
  'Adjustable Speed Toggle Laces — Easy slip-on comfort without tying',
  'Multi-Activity Versatility — Perfect for beach wading, boating, trail hiking, gym & daily walking',
];

const FAQS = [
  { q: 'Can I wear these shoes in water, rivers, and the ocean?', a: 'Yes! The bottom features instant drainage holes so water flows right out, while the quick-dry mesh upper dries rapidly.' },
  { q: 'Will these protect my toes on rocky trails?', a: 'Absolutely! The shoe includes a reinforced rubber toe bumper that guards your toes against rocks, roots, and hard surfaces.' },
  { q: 'Will these fit my normal shoe size?', a: 'Yes! Order your regular shoe size. The wide toe box gives your toes extra room to spread out naturally.' },
  { q: 'What if I want to return or exchange them?', a: 'Every pair includes our 30-Day Happy Guarantee. If you don\'t love them, we will exchange them or refund your money with zero stress.' },
];

export default function Shop() {
  const { selectedSize, selectedColor, openModal } = useUIStore();
  const { addItem, openCart } = useCartStore();
  const [gender, setGender] = useState('men');
  const [addedState, setAddedState] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addItem({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      size: selectedSize,
      color: selectedColor,
    });
    setAddedState(true);
    setTimeout(() => setAddedState(false), 2000);
    openCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 12, color: '#8888aa', marginBottom: 40 }}>
        <span>Home</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span>Shop</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: '#e8b86d' }}>TrailGrip Minimalist</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
        {/* Gallery */}
        <div className="lg:sticky" style={{ top: 96 }}>
          <ProductGallery />
        </div>

        {/* Product Details */}
        <div>
          {/* Badge */}
          {/* Stock & Scarcity Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 20,
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: 700,
                color: '#22c55e',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              In Stock — Ships Next Business Day
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: 20,
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: 700,
                color: '#f87171',
              }}
            >
              🔥 High Demand: 8 pairs remaining
            </div>
          </div>

          <h1
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 12 }}
          >
            Strident TrailGrip
            <br />
            <span className="gold-text">Minimalist Running Shoe</span>
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="#e8b86d" style={{ color: '#e8b86d' }} />
              ))}
            </div>
            <span style={{ fontSize: 13, color: '#8e8eb4', fontWeight: 600 }}>4.9 · 12,000+ reviews</span>
          </div>

          {/* Price */}
          <div
            className="flex items-center gap-4 mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(232,184,109,0.1) 0%, rgba(201,150,58,0.04) 100%)',
              border: '1px solid rgba(232,184,109,0.25)',
              borderRadius: 14,
              padding: '16px 20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <span
              className="font-display gold-text"
              style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-0.5px' }}
            >
              $119.00
            </span>
            <span
              style={{
                textDecoration: 'line-through',
                color: '#8e8eb4',
                fontSize: 20,
              }}
            >
              $149.00
            </span>
            <span
              style={{
                background: 'rgba(232,184,109,0.18)',
                border: '1px solid rgba(232,184,109,0.35)',
                color: '#e8b86d',
                fontSize: 12,
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: 8,
                letterSpacing: '0.5px',
              }}
            >
              SAVE $30
            </span>
          </div>

          <p style={{ fontSize: 14, color: '#c0c0d8', lineHeight: 1.7, marginBottom: 24 }}>
            {PRODUCT.shortDesc}
          </p>

          {/* Divider */}
          <div className="section-divider mb-6" />

          {/* Size Selector */}
          <div style={{ marginBottom: 24 }}>
            <AnimatePresence>
              {sizeError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 8,
                    padding: '8px 12px',
                    fontSize: 13,
                    color: '#ef4444',
                    marginBottom: 12,
                  }}
                >
                  ⚠️ Please select a size before adding to cart
                </motion.div>
              )}
            </AnimatePresence>
            <SizeSelector gender={gender} setGender={setGender} />
          </div>

          {/* Add to Cart */}
          <motion.button
            whileHover={!addedState ? { scale: 1.02 } : {}}
            whileTap={!addedState ? { scale: 0.98 } : {}}
            onClick={handleAddToCart}
            className="btn-gold w-full flex items-center justify-center gap-3"
            style={{ padding: '18px', fontSize: 17, marginBottom: 12, borderRadius: 14 }}
          >
            <AnimatePresence mode="wait">
              {addedState ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Check size={20} />
                  Added to Cart!
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag size={20} />
                  Add to Cart — $119.00
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { Icon: Truck, text: 'Free shipping over $75' },
              { Icon: Shield, text: '30-Day guarantee' },
              { Icon: RefreshCw, text: 'Easy returns' },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  padding: '10px 8px',
                  textAlign: 'center',
                }}
              >
                <Icon size={16} style={{ color: '#e8b86d', margin: '0 auto 5px' }} />
                <p style={{ fontSize: 11, color: '#8888aa', lineHeight: 1.4 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider mb-6" />

          {/* Features */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Key Features</h3>
            <div className="grid grid-cols-1 gap-2">
              {FEATURES.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      background: 'rgba(34,197,94,0.15)',
                      border: '1px solid rgba(34,197,94,0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={10} style={{ color: '#22c55e' }} />
                  </div>
                  <span style={{ fontSize: 13, color: '#c0c0d8' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Common Questions</h3>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  paddingBottom: 2,
                  marginBottom: 2,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    color: '#f0f0f5',
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, textAlign: 'left' }}>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} style={{ color: '#e8b86d', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={16} style={{ color: '#8888aa', flexShrink: 0 }} />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ fontSize: 13, color: '#c0c0d8', lineHeight: 1.7, paddingBottom: 12 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
