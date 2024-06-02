import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSingle = createAsyncThunk("FetchSingle", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
})

const SingleProductSlice = createSlice({
    name: "SingleProduct",
    initialState: {
        product: null,
        Loading: false,
        Error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchSingle.pending, (state, action) => {
            state.Loading = true;
            state.Error = false;
        });
        builder.addCase(FetchSingle.fulfilled, (state, action) => {
            state.Loading = false;
            state.product = action.payload;
            state.Error = false;
        });
        builder.addCase(FetchSingle.rejected, (state, action) => {
            state.Loading = false;
            state.Error = true;
        });
    }
});

export default SingleProductSlice.reducer;