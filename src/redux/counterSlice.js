import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload; 
            const existingItem = state.items.find(item => item.product === product);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); 
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items)); 
        },
        removeItem: (state, action) => {
            const { product } = action.payload;
            state.items = state.items.filter(item => item.product !== product); 
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        incrementQuantity: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.items.find(item => item.product === product);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        decrementQuantity: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.items.find(item => item.product === product);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; 
                } else {
                    state.items = state.items.filter(item => item.product !== product);
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


export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;