import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, shipping address, payment information (processed securely via our payment gateway), and order history.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use the information we collect to process and fulfill orders, send order confirmations and shipping updates, respond to customer service requests, send marketing communications (with your consent), improve our products and services, and comply with legal obligations.',
      },
      {
        heading: 'Information Sharing',
        body: 'We do not sell your personal information to third parties. We may share your information with service providers who assist in our operations (shipping carriers, payment processors), when required by law, or with your explicit consent.',
      },
      {
        heading: 'Data Security',
        body: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology.',
      },
      {
        heading: 'Your Rights',
        body: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, visit our website at https://ridgewellsupplycollc.com/',
      },
      {
        heading: 'Contact',
        body: 'For privacy-related inquiries, visit Ridgewell Supply Co LLC at https://ridgewellsupplycollc.com/',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and using the Strident Barefoot website and purchasing our products, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services. Strident Barefoot is owned and operated by Ridgewell Supply Co LLC.',
      },
      {
        heading: '2. Products and Pricing',
        body: 'All prices are listed in USD and are subject to change without notice. We reserve the right to modify or discontinue products at any time. Product images are representative; actual product may vary slightly due to manufacturing processes and screen calibration.',
      },
      {
        heading: '3. Order Acceptance',
        body: 'Your receipt of an order confirmation does not constitute our acceptance of your order. We reserve the right to accept or decline your order for any reason, including product availability, errors in product or pricing information, or issues identified by our fraud prevention systems.',
      },
      {
        heading: '4. Intellectual Property',
        body: 'All content on this website, including text, graphics, logos, images, and software, is the property of Ridgewell Supply Co LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.',
      },
      {
        heading: '5. Limitation of Liability',
        body: 'Ridgewell Supply Co LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services. Our total liability shall not exceed the amount paid for the specific product giving rise to the claim.',
      },
      {
        heading: '6. Governing Law',
        body: 'These Terms of Service shall be governed by and construed in accordance with applicable federal and state laws. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
      },
    ],
  },
  returns: {
    title: 'Return & Exchange Policy',
    sections: [
      {
        heading: '30-Day Natural Motion Guarantee',
        body: 'We stand behind every pair of Strident Barefoot shoes with our 30-Day Natural Motion Guarantee. If you are not completely satisfied with your purchase within 30 days of receiving your order, we will accept a return for a full refund or exchange — no questions asked.',
      },
      {
        heading: 'Eligibility Requirements',
        body: 'To be eligible for a return or exchange, items must be in their original condition with all original packaging, tags, and accessories included. Shoes must not show signs of excessive wear beyond normal try-on. We reserve the right to deny returns that do not meet these conditions.',
      },
      {
        heading: 'How to Initiate a Return',
        body: 'Visit ridgewellsupplycollc.com with your order number and reason for return. We will provide a prepaid shipping label within 2 business days. Once we receive and inspect your return, we will process your refund within 5-7 business days.',
      },
      {
        heading: 'Exchanges',
        body: 'For exchanges (different size or colorway), please note your preferred alternative on our website return request form. We will ship the replacement pair at no additional charge once we have confirmed receipt of your original item.',
      },
      {
        heading: 'Refund Processing',
        body: 'Refunds are issued to the original payment method. Please allow 5-10 business days for the refund to appear on your statement, depending on your bank or credit card issuer. Shipping charges are non-refundable unless the return is due to our error.',
      },
    ],
  },
  compliance: {
    title: 'Compliance & Legal Notice',
    sections: [
      {
        heading: 'Corporate Information',
        body: 'Strident Barefoot is a brand owned and operated by Ridgewell Supply Co LLC. All transactions, legal agreements, and corporate obligations are the responsibility of Ridgewell Supply Co LLC. Registered business: ridgewellsupplycollc.com',
      },
      {
        heading: 'Consumer Protection Compliance',
        body: 'We comply with all applicable federal and state consumer protection laws, including the Federal Trade Commission Act, the CAN-SPAM Act, and applicable state consumer protection statutes. If you believe your consumer rights have been violated, please contact us immediately through ridgewellsupplycollc.com.',
      },
      {
        heading: 'Product Safety & Standards',
        body: 'All Strident Barefoot products comply with applicable product safety standards and regulations. Our manufacturing partners adhere to ethical labor practices and environmental standards. We do not use restricted substances in our products as defined by applicable regulations.',
      },
      {
        heading: 'Accessibility Statement',
        body: 'Ridgewell Supply Co LLC is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards. If you experience any accessibility barriers, please visit ridgewellsupplycollc.com.',
      },
      {
        heading: 'DMCA Notice',
        body: 'If you believe any content on our site infringes your copyright, please submit a DMCA notice at ridgewellsupplycollc.com with the required information. We will respond to valid notices in accordance with the Digital Millennium Copyright Act.',
      },
      {
        heading: 'Contact for Legal Matters',
        body: 'For legal inquiries, compliance questions, or formal notices, visit Ridgewell Supply Co LLC at https://ridgewellsupplycollc.com/.',
      },
    ],
  },
};

export default function LegalModal({ type, onClose }) {
  const content = LEGAL_CONTENT[type];
  if (!content) return null;

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
            maxWidth: 640,
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display" style={{ fontSize: 22, fontWeight: 800 }}>
                {content.title}
              </h2>
              <p style={{ fontSize: 12, color: '#8888aa', marginTop: 4 }}>
                Ridgewell Supply Co LLC · Last updated July 2026
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

          {/* Content */}
          <div className="modal-scroll flex-1">
            {content.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e8b86d', marginBottom: 8 }}>
                  {section.heading}
                </h3>
                <p style={{ fontSize: 14, color: '#c0c0d8', lineHeight: 1.7 }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 16,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <AlertCircle size={14} style={{ color: '#8888aa', flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: '#8888aa', lineHeight: 1.5 }}>
              This document is maintained by{' '}
              <a
                href="https://ridgewellsupplycollc.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#e8b86d', textDecoration: 'none' }}
              >
                Ridgewell Supply Co LLC
              </a>
              . For questions, visit ridgewellsupplycollc.com.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
