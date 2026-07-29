import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  promoCode: '',
  promoApplied: false,
  discount: 0,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) => set((state) => {
    const existing = state.items.find(
      (i) => i.id === item.id && i.size === item.size && i.color === item.color
    );
    if (existing) {
      return {
        items: state.items.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    return { items: [...state.items, { ...item, quantity: 1 }] };
  }),

  removeItem: (id, size, color) => set((state) => ({
    items: state.items.filter(
      (i) => !(i.id === id && i.size === size && i.color === color)
    ),
  })),

  updateQuantity: (id, size, color, quantity) => set((state) => ({
    items: quantity <= 0
      ? state.items.filter((i) => !(i.id === id && i.size === size && i.color === color))
      : state.items.map((i) =>
          i.id === id && i.size === size && i.color === color
            ? { ...i, quantity }
            : i
        ),
  })),

  applyPromo: (code) => {
    const validCodes = { 'BAREFOOT10': 0.10, 'STRIDENT15': 0.15, 'TRAIL20': 0.20 };
    const upper = code.toUpperCase();
    if (validCodes[upper]) {
      set({ promoCode: upper, promoApplied: true, discount: validCodes[upper] });
      return { success: true, discount: validCodes[upper] };
    }
    return { success: false };
  },

  removePromo: () => set({ promoCode: '', promoApplied: false, discount: 0 }),

  clearCart: () => set({ items: [], promoCode: '', promoApplied: false, discount: 0 }),

  getSubtotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getTotal: () => {
    const { items, discount } = get();
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 75 ? 0 : 9.99;
    return subtotal - subtotal * discount + shipping;
  },

  getItemCount: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));

export default useCartStore;
