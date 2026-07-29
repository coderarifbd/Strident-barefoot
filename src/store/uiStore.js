import { create } from 'zustand';

const useUIStore = create((set) => ({
  selectedSize: null,
  selectedColor: 'Stealth Black',
  activeModal: null, // 'sizeGuide' | 'privacy' | 'terms' | 'returns' | 'compliance'
  isProcessing: false,
  mobileMenuOpen: false,

  setSize: (size) => set({ selectedSize: size }),
  setColor: (color) => set({ selectedColor: color }),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  setProcessing: (val) => set({ isProcessing: val }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));

export default useUIStore;
