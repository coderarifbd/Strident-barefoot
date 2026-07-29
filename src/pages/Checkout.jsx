import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ChevronRight, ShoppingBag, Tag } from 'lucide-react';
import useCartStore from '../store/cartStore';

const colorImages = {
  'Stealth Black': '/shoe_stealth_black.jpg',
  'Earth Olive': '/shoe_earth_olive.jpg',
  'Summit Gray': '/shoe_summit_gray.jpg',
};

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP code'),
  country: z.string().min(1, 'Required'),
  cardName: z.string().min(2, 'Required'),
  cardNumber: z.string().regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 'Enter a valid 16-digit card number'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Enter MM/YY format'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Enter 3 or 4 digit CVV'),
});

function getCardType(number) {
  const clean = number.replace(/\s/g, '');
  if (/^4/.test(clean)) return 'visa';
  if (/^5[1-5]/.test(clean)) return 'mastercard';
  if (/^3[47]/.test(clean)) return 'amex';
  return null;
}

function formatCardNumber(value) {
  const clean = value.replace(/\D/g, '').slice(0, 16);
  return clean.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value) {
  const clean = value.replace(/\D/g, '').slice(0, 4);
  if (clean.length >= 3) return `${clean.slice(0, 2)}/${clean.slice(2)}`;
  return clean;
}

export default function Checkout() {
  const { items, getSubtotal, getTotal, promoApplied, discount, promoCode, clearCart } = useCartStore();
  const subtotal = useCartStore((s) => s.getSubtotal());
  const total = useCartStore((s) => s.getTotal());
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardType, setCardType] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/order-success', { 
        state: { 
          orderData: data,
          items: items.slice(), // snapshot
          total,
        } 
      });
    }, 3200);
  };

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <ShoppingBag size={56} style={{ color: '#8888aa', margin: '0 auto 16px' }} />
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Your cart is empty</h2>
        <p style={{ color: '#8888aa', marginBottom: 24 }}>Add the TrailGrip to your cart first.</p>
        <button
          onClick={() => navigate('/shop')}
          className="btn-gold"
          style={{ padding: '12px 28px', fontSize: 15, borderRadius: 12 }}
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Processing Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(10,10,20,0.97)',
              zIndex: 500,
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Animated spinner */}
            <div style={{ position: 'relative', marginBottom: 40 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{
                  width: 80,
                  height: 80,
                  border: '3px solid rgba(232,184,109,0.2)',
                  borderTopColor: '#e8b86d',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 12,
                  background: 'rgba(232,184,109,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Lock size={24} style={{ color: '#e8b86d' }} />
              </div>
            </div>

            <motion.h2
              className="font-display gold-text"
              style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Processing Your Order
            </motion.h2>
            <p style={{ fontSize: 14, color: '#8888aa', textAlign: 'center', maxWidth: 320 }}>
              Securing payment with{' '}
              <span style={{ color: '#e8b86d' }}>Ridgewell Supply Co LLC</span> gateway...
            </p>
            <div
              style={{
                marginTop: 32,
                display: 'flex',
                gap: 6,
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.25 }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#e8b86d',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <h1 className="font-display" style={{ fontSize: 32, fontWeight: 800, marginBottom: 6 }}>
          Checkout
        </h1>
        <p style={{ fontSize: 13, color: '#8888aa', marginBottom: 40 }}>
          Secured by Ridgewell Supply Co LLC payment gateway
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Contact */}
              <section
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ background: 'linear-gradient(135deg, #e8b86d, #c9963a)', width: 24, height: 24, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#1a1a2e' }}>1</span>
                  Contact Information
                </h2>
                <div>
                  <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.email.message}</p>}
                </div>
              </section>

              {/* Shipping */}
              <section
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ background: 'linear-gradient(135deg, #e8b86d, #c9963a)', width: 24, height: 24, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#1a1a2e' }}>2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>First Name</label>
                    <input {...register('firstName')} placeholder="John" className={`form-input ${errors.firstName ? 'error' : ''}`} />
                    {errors.firstName && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Last Name</label>
                    <input {...register('lastName')} placeholder="Doe" className={`form-input ${errors.lastName ? 'error' : ''}`} />
                    {errors.lastName && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.lastName.message}</p>}
                  </div>
                  <div className="col-span-2">
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Street Address</label>
                    <input {...register('address')} placeholder="123 Trail Run Blvd" className={`form-input ${errors.address ? 'error' : ''}`} />
                    {errors.address && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.address.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>City</label>
                    <input {...register('city')} placeholder="Boulder" className={`form-input ${errors.city ? 'error' : ''}`} />
                    {errors.city && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.city.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>State</label>
                    <input {...register('state')} placeholder="CO" className={`form-input ${errors.state ? 'error' : ''}`} />
                    {errors.state && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.state.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>ZIP Code</label>
                    <input {...register('zip')} placeholder="80301" className={`form-input ${errors.zip ? 'error' : ''}`} />
                    {errors.zip && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.zip.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Country</label>
                    <select
                      {...register('country')}
                      className={`form-input ${errors.country ? 'error' : ''}`}
                      style={{ background: 'rgba(255,255,255,0.05)', cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: '#1a1a2e' }}>Select country</option>
                      <option value="US" style={{ background: '#1a1a2e' }}>United States</option>
                      <option value="CA" style={{ background: '#1a1a2e' }}>Canada</option>
                      <option value="GB" style={{ background: '#1a1a2e' }}>United Kingdom</option>
                      <option value="AU" style={{ background: '#1a1a2e' }}>Australia</option>
                    </select>
                    {errors.country && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.country.message}</p>}
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 style={{ fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ background: 'linear-gradient(135deg, #e8b86d, #c9963a)', width: 24, height: 24, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#1a1a2e' }}>3</span>
                    Payment Information
                  </h2>
                  <div className="card-badges">
                    <span className={`card-badge visa ${cardType === 'visa' ? 'ring-2 ring-blue-400' : 'opacity-60'}`} style={{ opacity: !cardType || cardType === 'visa' ? 1 : 0.3 }}>VISA</span>
                    <span className={`card-badge mc`} style={{ opacity: !cardType || cardType === 'mastercard' ? 1 : 0.3 }}>MC</span>
                    <span className={`card-badge amex`} style={{ opacity: !cardType || cardType === 'amex' ? 1 : 0.3 }}>AMEX</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Name on Card</label>
                    <input {...register('cardName')} placeholder="John Doe" className={`form-input ${errors.cardName ? 'error' : ''}`} />
                    {errors.cardName && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.cardName.message}</p>}
                  </div>

                  <div>
                    <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Card Number</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        {...register('cardNumber')}
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => {
                          const formatted = formatCardNumber(e.target.value);
                          setCardNumber(formatted);
                          setCardType(getCardType(formatted));
                          e.target.value = formatted;
                        }}
                        className={`form-input ${errors.cardNumber ? 'error' : ''}`}
                        style={{ paddingRight: 48 }}
                      />
                      <CreditCard
                        size={18}
                        style={{
                          position: 'absolute',
                          right: 14,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#8888aa',
                        }}
                      />
                    </div>
                    {errors.cardNumber && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.cardNumber.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>Expiry Date</label>
                      <input
                        {...register('expiry')}
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          setExpiry(formatted);
                          e.target.value = formatted;
                        }}
                        className={`form-input ${errors.expiry ? 'error' : ''}`}
                      />
                      {errors.expiry && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.expiry.message}</p>}
                    </div>
                    <div>
                      <label style={{ fontSize: 12, color: '#8888aa', fontWeight: 600, display: 'block', marginBottom: 6 }}>CVV</label>
                      <input {...register('cvv')} placeholder="123" maxLength={4} className={`form-input ${errors.cvv ? 'error' : ''}`} />
                      {errors.cvv && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.cvv.message}</p>}
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 mt-5"
                  style={{
                    background: 'rgba(34,197,94,0.06)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 8,
                    padding: '8px 12px',
                  }}
                >
                  <Lock size={13} style={{ color: '#22c55e', flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: '#8888aa' }}>
                    Your payment is encrypted and secured by Ridgewell Supply Co LLC gateway. We never store your card data.
                  </p>
                </div>
              </section>

              {/* Submit */}
              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-2"
                style={{ padding: '18px', fontSize: 17, borderRadius: 14 }}
              >
                <Lock size={18} />
                Place Order — ${total.toFixed(2)}
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-2">
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 24,
                  position: 'sticky',
                  top: 96,
                }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShoppingBag size={16} style={{ color: '#e8b86d' }} />
                  Order Summary
                </h3>

                {/* Items */}
                <div className="flex flex-col gap-3 mb-6">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex gap-3 items-center"
                    >
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 8,
                          background: '#fff',
                          overflow: 'hidden',
                          flexShrink: 0,
                          position: 'relative',
                        }}
                      >
                        <img
                          src={colorImages[item.color] || '/shoe_stealth_black.jpg'}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: -6,
                            right: -6,
                            background: 'linear-gradient(135deg, #e8b86d, #c9963a)',
                            borderRadius: '50%',
                            width: 18,
                            height: 18,
                            fontSize: 10,
                            fontWeight: 800,
                            color: '#1a1a2e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {item.quantity}
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>TrailGrip Minimalist</div>
                        <div style={{ fontSize: 11, color: '#8888aa' }}>{item.color} · Size {item.size}</div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <div className="section-divider mb-4" />

                {/* Totals */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between" style={{ color: '#8888aa' }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1" style={{ color: '#22c55e' }}>
                        <Tag size={12} />
                        <span>{promoCode} ({(discount * 100).toFixed(0)}% off)</span>
                      </div>
                      <span style={{ color: '#22c55e' }}>-${(subtotal * discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between" style={{ color: '#8888aa' }}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span style={{ color: '#22c55e' }}>Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="section-divider my-1" />
                  <div className="flex justify-between" style={{ fontSize: 16, fontWeight: 800 }}>
                    <span>Total</span>
                    <span className="gold-text">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Guarantees */}
                <div
                  style={{
                    marginTop: 20,
                    background: 'rgba(232,184,109,0.05)',
                    border: '1px solid rgba(232,184,109,0.12)',
                    borderRadius: 10,
                    padding: '12px 14px',
                  }}
                >
                  <p style={{ fontSize: 12, color: '#8888aa', lineHeight: 1.6 }}>
                    🛡️ <strong style={{ color: '#e8b86d' }}>30-Day Guarantee</strong> — Not satisfied? Full refund, no questions.<br />
                    🚚 <strong style={{ color: '#e8b86d' }}>Free Shipping</strong> — {shipping === 0 ? 'Applied to this order!' : `On orders over $75.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
