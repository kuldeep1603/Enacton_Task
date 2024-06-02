import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from "./Slice/DataSlice";
import FilterDataReducer from "./Slice/FilterSlice";
import SingleProductSliceReducer from "./Slice/SingleProductSlice";

const store = configureStore({
    reducer: {
        ProductsData: DataSliceReducer,
        FilterData: FilterDataReducer,
        SingleProduct: SingleProductSliceReducer,
    }
});

export default store;
