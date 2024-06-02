import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const FetchProducts = createAsyncThunk("fetchproduct", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data.products
});

export const FetchCategory = createAsyncThunk("FetchCategory", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data
});


const DataSlice = createSlice({
    name: "Products",
    initialState: {
        products: [],
        IsLoading: false,
        IsError: false,
        Category: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProducts.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchProducts.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.products = action.payload;
        });
        builder.addCase(FetchProducts.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });
        builder.addCase(FetchCategory.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchCategory.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.Category = action.payload;
        });
        builder.addCase(FetchCategory.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });
    }
});


export default DataSlice.reducer;