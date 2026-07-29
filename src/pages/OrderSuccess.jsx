import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Package, MapPin, Truck, ArrowRight, Home } from 'lucide-react';

const colorImages = {
  'Stealth Black': '/shoe_stealth_black.jpg',
  'Earth Olive': '/shoe_earth_olive.jpg',
  'Summit Gray': '/shoe_summit_gray.jpg',
};

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const orderNumber = 'STR-40912'; // Fixed demo order number as specified
  const items = state?.items || [];
  const orderData = state?.orderData || {};
  const total = state?.total || 119.0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const estimatedDelivery = () => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 64, paddingBottom: 96 }}>
      {/* Success Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 48 }}
      >
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div
            style={{
              position: 'relative',
              width: 96,
              height: 96,
            }}
          >
            {/* Outer ring animation */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5, repeat: 1 }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(34,197,94,0.4)',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))',
                border: '2px solid rgba(34,197,94,0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(34,197,94,0.2)',
              }}
            >
              <CheckCircle size={46} style={{ color: '#22c55e' }} />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display"
          style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 900, marginBottom: 12 }}
        >
          Order Confirmed! 🎉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 16, color: '#c0c0d8', lineHeight: 1.65, maxWidth: 540, margin: '0 auto' }}
        >
          Thank you for your order! Your Strident TrailGrip Minimalist Running Shoes
          are being prepared for shipment.
        </motion.p>
      </motion.div>

      {/* Order Number Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(232,184,109,0.12), rgba(201,150,58,0.05))',
          border: '1px solid rgba(232,184,109,0.25)',
          borderRadius: 20,
          padding: '24px 32px',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}
      >
        <div>
          <p style={{ fontSize: 11, color: '#8888aa', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4, fontWeight: 700 }}>
            Order Number
          </p>
          <p className="font-display gold-text" style={{ fontSize: 30, fontWeight: 900, letterSpacing: '1px' }}>
            #{orderNumber}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: 11, color: '#8888aa', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4, fontWeight: 700 }}>
            Order Total
          </p>
          <p style={{ fontSize: 26, fontWeight: 900, color: '#f0f0f5' }}>${total.toFixed(2)}</p>
        </div>
      </motion.div>

      {/* Items Ordered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{
          background: 'rgba(18, 19, 32, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '28px 32px',
          marginBottom: 24,
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8, color: '#f0f0f5' }}>
          <Package size={18} style={{ color: '#e8b86d' }} />
          Items in Your Order
        </h3>
        {items.length > 0 ? (
          items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-center"
              style={{
                padding: '16px 0',
                borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  background: '#fff',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={colorImages[item.color] || '/shoe_stealth_black.jpg'}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, color: '#f0f0f5' }}>Strident TrailGrip Minimalist Running Shoe</p>
                <p style={{ fontSize: 13, color: '#8888aa' }}>
                  Colorway: <span style={{ color: '#e8b86d', fontWeight: 600 }}>{item.color}</span> · 
                  Size: <span style={{ color: '#e8b86d', fontWeight: 600 }}> US {item.size}</span> · 
                  Qty: <span style={{ color: '#f0f0f5', fontWeight: 600 }}>{item.quantity}</span>
                </p>
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#e8b86d' }}>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))
        ) : (
          <div className="flex gap-4 items-center" style={{ padding: '8px 0' }}>
            <div style={{ width: 72, height: 72, borderRadius: 12, background: '#fff', overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <img src="/shoe_earth_olive.jpg" alt="TrailGrip" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, color: '#f0f0f5' }}>Strident TrailGrip Minimalist Running Shoe</p>
              <p style={{ fontSize: 13, color: '#8888aa' }}>
                Colorway: <span style={{ color: '#e8b86d', fontWeight: 600 }}>Earth Olive</span> · Size: <span style={{ color: '#e8b86d', fontWeight: 600 }}>US 7.5</span> · Qty: <span style={{ color: '#f0f0f5', fontWeight: 600 }}>1</span>
              </p>
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#e8b86d' }}>$119.00</div>
          </div>
        )}
      </motion.div>

      {/* Shipping Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'rgba(18, 19, 32, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '28px 32px',
          marginBottom: 24,
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8, color: '#f0f0f5' }}>
          <MapPin size={18} style={{ color: '#e8b86d' }} />
          Shipping Details
        </h3>
        {orderData.address ? (
          <p style={{ fontSize: 14.5, color: '#c0c0d8', lineHeight: 1.75 }}>
            <strong style={{ color: '#f0f0f5' }}>{orderData.firstName} {orderData.lastName}</strong><br />
            {orderData.address}<br />
            {orderData.city}, {orderData.state} {orderData.zip}<br />
            {orderData.country}
          </p>
        ) : (
          <p style={{ fontSize: 14.5, color: '#c0c0d8', lineHeight: 1.75 }}>
            <strong style={{ color: '#f0f0f5' }}>Ariful Islam</strong><br />
            vill-Chakulmua, post: shantinagar, kalai<br />
            joypurhat 80301<br />
            United States
          </p>
        )}
        <p style={{ fontSize: 13, color: '#8888aa', marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          Confirmation sent to: <span style={{ color: '#e8b86d', fontWeight: 600 }}>{orderData.email || 'customer@example.com'}</span>
        </p>
      </motion.div>

      {/* Tracking Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          background: 'rgba(18, 19, 32, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '28px 32px',
          marginBottom: 32,
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, color: '#f0f0f5' }}>
          <Truck size={18} style={{ color: '#e8b86d' }} />
          Delivery Tracking
        </h3>
        <div className="flex items-start gap-0" style={{ marginBottom: 36, padding: '0 16px' }}>
          {[
            { label: 'Confirmed', done: true },
            { label: 'Preparing', done: true },
            { label: 'Shipped', done: false },
            { label: 'Delivered', done: false },
          ].map((step, i, arr) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
              <div className="flex flex-col items-center" style={{ flex: 'none' }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: step.done ? 'linear-gradient(135deg, #e8b86d, #c9963a)' : 'rgba(255,255,255,0.08)',
                    border: step.done ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: step.done ? '#1a1a2e' : '#8888aa',
                    fontWeight: 900,
                    boxShadow: step.done ? '0 0 14px rgba(232,184,109,0.35)' : 'none',
                  }}
                >
                  {step.done ? '✓' : i + 1}
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: step.done ? '#e8b86d' : '#666680',
                    marginTop: 8,
                    textAlign: 'center',
                    fontWeight: step.done ? 700 : 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: step.done ? 'linear-gradient(90deg, #e8b86d, rgba(232,184,109,0.3))' : 'rgba(255,255,255,0.07)',
                    margin: '0 8px',
                    marginTop: 16,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Estimated Delivery Box */}
        <div
          style={{
            background: 'rgba(232,184,109,0.06)',
            border: '1px solid rgba(232,184,109,0.18)',
            borderRadius: 16,
            padding: '20px 24px',
            marginTop: 12,
          }}
        >
          <p style={{ fontSize: 13.5, color: '#c0c0d8', lineHeight: 1.7 }}>
            <strong style={{ color: '#e8b86d' }}>Estimated Delivery:</strong> {estimatedDelivery()}<br />
            <strong style={{ color: '#e8b86d' }}>Tracking Number:</strong>{' '}
            <span style={{ color: '#8888aa' }}>Will be emailed within 24 hours of shipment</span>
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4"
        style={{ marginTop: 8 }}
      >
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          style={{
            flex: 1,
            padding: '16px 28px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 14,
            color: '#f0f0f5',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 15,
            textAlign: 'center',
            transition: 'all 0.2s',
          }}
        >
          <Home size={18} />
          Back to Home
        </Link>
        <Link
          to="/shop"
          className="btn-gold flex items-center justify-center gap-2"
          style={{ flex: 1, padding: '16px 28px', fontSize: 15, borderRadius: 14, textDecoration: 'none' }}
        >
          Shop More
          <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ fontSize: 12, color: '#8e8eb4', textAlign: 'center', marginTop: 36, lineHeight: 1.6 }}
      >
        This order is fulfilled by{' '}
        <a
          href="https://ridgewellsupplycollc.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#e8b86d', textDecoration: 'none', fontWeight: 600 }}
        >
          Ridgewell Supply Co LLC
        </a>
        . Questions? Email hello@ridgewellsupplycollc.com
      </motion.p>
    </div>
  );
}
