
import { createSlice } from "@reduxjs/toolkit";

// Function to generate a unique ID based on product ID and selected size
const generateUniqueId = (productId, selectedSize) => {
    return `${productId}-${selectedSize}`;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    reducers: {
        addItem: (state, action) => {
            const { product, selectedsize } = action.payload; 
            const uniqueId = generateUniqueId(product, selectedsize);
            const existingItem = state.items.find(item => item.id === uniqueId);

            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if already exists
            } else {
                state.items.push({ ...action.payload, id: uniqueId, quantity: 1 }); // Add new item with quantity 1
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items)); 
        },
        removeItem: (state, action) => {
            const { product, selectedsize } = action.payload;
            const uniqueId = generateUniqueId(product, selectedsize);
            state.items = state.items.filter(item => item.id !== uniqueId); 
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        incrementQuantity: (state, action) => {
            const { product, selectedsize } = action.payload;
            const uniqueId = generateUniqueId(product, selectedsize);
            const existingItem = state.items.find(item => item.id === uniqueId);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        decrementQuantity: (state, action) => {
            const { product, selectedsize } = action.payload;
            const uniqueId = generateUniqueId(product, selectedsize);
            const existingItem = state.items.find(item => item.id === uniqueId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; 
                } else {
                    state.items = state.items.filter(item => item.id !== uniqueId); // Remove item if quantity is 0
                }
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
