import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./datafetchSlice";
import notification from "./notificationSlice";

const store=configureStore({
    reducer:{dataFetchSlice:dataSlice.reducer ,notificationSlice:notification.reducer }
});

export default store;