import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataFetchSlice",
  initialState: { dataArray: [], changed: false },
  reducers: {
    ReplaceItems(state, action) {
      state.dataArray = action.payload;
    },

    NewRequest(state, action) {
      let data = action.payload;
      state.changed = true;
      if (state.dataArray && state.dataArray.length !== 0) {
        const id = state.dataArray[state.dataArray.length - 1].id;
        data = { ...data, id: id + 1 };
        state.dataArray.push(data);
      } else if (!state.dataArray || state.dataArray.length === 0) {
        data = { ...data, id: 101 };
        state.dataArray.push(data);
      }
    }, 
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
