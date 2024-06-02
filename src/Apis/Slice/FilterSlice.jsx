import { createSlice } from "@reduxjs/toolkit";

const FilterData = createSlice({
    name: "filterData",
    initialState: {
        SortPrice: "",
        search: "",
        checkData: null, 
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
        Cart: JSON.parse(localStorage.getItem('Cart')) || [],
    },
    reducers: {
        sortbyprice: (state, action) => {
            state.SortPrice = action.payload;
        },
        searchproduct: (state, action) => {
            state.search = action.payload;
        },
        CheckBoXData: (state, action) => {
            state.checkData = action.payload;
        },
        WishlistProduct: (state, action) => {
            state.wishlist.push(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        RemoveWishlistProduct: (state, action) => {
            state.wishlist.splice(action.payload.id, 1);
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        AddTocart: (state, action) => {
            state.Cart.push(action.payload);
            localStorage.setItem('Cart', JSON.stringify(state.Cart));
        },
        RemoveCart: (state, action) => {
            state.Cart.splice(action.payload.id, 1);
            localStorage.setItem('Cart', JSON.stringify(state.Cart));
        }
    }
});

export const { sortbyprice, searchproduct, CheckBoXData, WishlistProduct, RemoveWishlistProduct, AddTocart, RemoveCart } = FilterData.actions;

export default FilterData.reducer;
