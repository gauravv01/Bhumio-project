import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./datafetchSlice";

const store=configureStore({
    reducer:{dataFetchSlice:dataSlice.reducer}
});

export default store;