import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, Tag, CheckCircle, ChevronRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const colorImages = {
  'Stealth Black': '/shoe_stealth_black.jpg',
  'Earth Olive': '/shoe_earth_olive.jpg',
  'Summit Gray': '/shoe_summit_gray.jpg',
};

export default function CartDrawer() {
  const {
    isOpen, closeCart, items, removeItem, updateQuantity,
    getSubtotal, getTotal, promoCode, promoApplied, discount,
    applyPromo, removePromo,
  } = useCartStore();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();

  const subtotal = useCartStore((s) => s.getSubtotal());
  const total = useCartStore((s) => s.getTotal());
  const shipping = subtotal >= 75 ? 0 : 9.99;

  const handleApplyPromo = () => {
    const result = applyPromo(promoInput);
    if (result.success) {
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError('Invalid promo code. Try BAREFOOT10, STRIDENT15, or TRAIL20.');
    }
  };

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="cart-overlay fixed inset-0"
            style={{ zIndex: 100 }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full flex flex-col"
            style={{
              width: '100%',
              maxWidth: 420,
              background: '#13131f',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              zIndex: 101,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} style={{ color: '#e8b86d' }} />
                <h2 style={{ fontSize: 18, fontWeight: 700 }}>Your Cart</h2>
                {items.length > 0 && (
                  <span
                    style={{
                      background: 'rgba(232,184,109,0.15)',
                      color: '#e8b86d',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 20,
                    }}
                  >
                    {items.reduce((s, i) => s + i.quantity, 0)} items
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: 'none',
                  borderRadius: 8,
                  padding: 8,
                  cursor: 'pointer',
                  color: '#f0f0f5',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4"
                  style={{ color: '#8888aa' }}
                >
                  <ShoppingBag size={56} style={{ opacity: 0.3 }} />
                  <p style={{ fontSize: 16, fontWeight: 500 }}>Your cart is empty</p>
                  <p style={{ fontSize: 13 }}>Add the TrailGrip to get started</p>
                  <button
                    onClick={() => { closeCart(); navigate('/shop'); }}
                    className="btn-gold"
                    style={{ padding: '10px 24px', marginTop: 8, borderRadius: 10, fontSize: 14 }}
                  >
                    Shop Now
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item, idx) => (
                    <motion.div
                      key={`${item.id}-${item.size}-${item.color}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ delay: idx * 0.05 }}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 12,
                        padding: 16,
                        display: 'flex',
                        gap: 14,
                      }}
                    >
                      {/* Thumbnail */}
                      <div
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 8,
                          overflow: 'hidden',
                          background: '#fff',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={colorImages[item.color] || '/shoe_stealth_black.jpg'}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: '#8888aa', marginBottom: 4 }}>
                          {item.color} · Size US {item.size}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#e8b86d', marginBottom: 10 }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        {/* Qty + Remove */}
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center"
                            style={{
                              background: 'rgba(255,255,255,0.06)',
                              borderRadius: 8,
                              border: '1px solid rgba(255,255,255,0.1)',
                            }}
                          >
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                              style={{ padding: '4px 10px', background: 'none', border: 'none', color: '#f0f0f5', cursor: 'pointer' }}
                            >
                              <Minus size={13} />
                            </button>
                            <span style={{ fontSize: 14, fontWeight: 600, padding: '0 8px' }}>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              style={{ padding: '4px 10px', background: 'none', border: 'none', color: '#f0f0f5', cursor: 'pointer' }}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 6 }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer (Promo + Totals + Checkout) */}
            {items.length > 0 && (
              <div
                style={{
                  padding: '16px 24px 24px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(0,0,0,0.2)',
                }}
              >
                {/* Promo Code */}
                {!promoApplied ? (
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoInput}
                      onChange={(e) => { setPromoInput(e.target.value); setPromoError(''); }}
                      onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
                      className="form-input"
                      style={{ fontSize: 13, padding: '9px 12px', flex: 1 }}
                    />
                    <button
                      onClick={handleApplyPromo}
                      style={{
                        background: 'rgba(232,184,109,0.15)',
                        border: '1px solid rgba(232,184,109,0.3)',
                        color: '#e8b86d',
                        borderRadius: 8,
                        padding: '0 14px',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-between mb-4"
                    style={{
                      background: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.2)',
                      borderRadius: 8,
                      padding: '8px 12px',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} style={{ color: '#22c55e' }} />
                      <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>
                        {promoCode} – {(discount * 100).toFixed(0)}% off
                      </span>
                    </div>
                    <button
                      onClick={removePromo}
                      style={{ background: 'none', border: 'none', color: '#8888aa', cursor: 'pointer', fontSize: 12 }}
                    >
                      Remove
                    </button>
                  </div>
                )}
                {promoError && (
                  <p style={{ fontSize: 12, color: '#ef4444', marginBottom: 8 }}>{promoError}</p>
                )}

                {/* Totals */}
                <div className="flex flex-col gap-2 mb-4" style={{ fontSize: 13 }}>
                  <div className="flex justify-between" style={{ color: '#8888aa' }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between" style={{ color: '#22c55e' }}>
                      <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                      <span>-${(subtotal * discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between" style={{ color: '#8888aa' }}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span style={{ color: '#22c55e' }}>Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 75 && (
                    <div
                      style={{
                        background: 'rgba(232,184,109,0.06)',
                        border: '1px solid rgba(232,184,109,0.15)',
                        borderRadius: 6,
                        padding: '6px 10px',
                        fontSize: 12,
                        color: '#e8b86d',
                      }}
                    >
                      Add ${(75 - subtotal).toFixed(2)} more for free shipping
                    </div>
                  )}
                  <hr style={{ borderColor: 'rgba(255,255,255,0.07)', margin: '4px 0' }} />
                  <div className="flex justify-between" style={{ fontSize: 15, fontWeight: 700 }}>
                    <span>Total</span>
                    <span className="gold-text">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                  style={{ padding: '14px', fontSize: 15, borderRadius: 12 }}
                >
                  Proceed to Checkout
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
