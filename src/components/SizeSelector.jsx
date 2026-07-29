import { motion } from 'framer-motion';
import { Ruler, HelpCircle } from 'lucide-react';
import useUIStore from '../store/uiStore';

const MEN_SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13];
const WOMEN_SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13];

export default function SizeSelector({ gender, setGender }) {
  const { selectedSize, setSize, openModal } = useUIStore();

  const sizes = gender === 'men' ? MEN_SIZES : WOMEN_SIZES;

  return (
    <div>
      {/* Gender Toggle + Size Guide Link */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="flex"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: 3,
            gap: 2,
          }}
        >
          {['men', 'women'].map((g) => (
            <button
              key={g}
              onClick={() => { setGender(g); setSize(null); }}
              style={{
                padding: '5px 14px',
                borderRadius: 6,
                border: 'none',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: gender === g ? 'linear-gradient(135deg, #e8b86d, #c9963a)' : 'transparent',
                color: gender === g ? '#1a1a2e' : '#8888aa',
                textTransform: 'capitalize',
              }}
            >
              {g === 'men' ? "Men's" : "Women's"}
            </button>
          ))}
        </div>

        <button
          onClick={() => openModal('sizeGuide')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            background: 'none',
            border: 'none',
            color: '#e8b86d',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
          }}
        >
          <Ruler size={14} />
          Size Guide
        </button>
      </div>

      {/* Size label */}
      <p style={{ fontSize: 13, color: '#8888aa', marginBottom: 10, fontWeight: 500 }}>
        US {gender === 'men' ? "Men's" : "Women's"} Size
        {selectedSize && (
          <span style={{ color: '#e8b86d', marginLeft: 6, fontWeight: 700 }}>
            {selectedSize}
          </span>
        )}
      </p>

      {/* Size Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 8,
        }}
      >
        {sizes.map((size) => (
          <motion.button
            key={size}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSize(size)}
            className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
          >
            {size}
          </motion.button>
        ))}
      </div>

      {!selectedSize && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontSize: 12, color: '#e8b86d', marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <HelpCircle size={12} />
          Please select a size to continue
        </motion.p>
      )}
    </div>
  );
}
