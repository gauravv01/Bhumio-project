import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataFetchSlice",
  initialState: { dataArray: [], changed: false, Notification: null },
  reducers: {
    ReplaceItems(state, action) {
      state.dataArray = action.payload;
    },

    NewRequest(state, action) {
      let data = action.payload;
      if (state.dataArray && state.dataArray.length !== 0) {
        const id = state.dataArray[state.dataArray.length - 1].id;
        data = { ...data, id: id + 1 };
        state.dataArray.push(data);
        state.changed = true;
      } else if (!state.dataArray || state.dataArray.length === 0) {
        data = { ...data, id: 101 };
        state.dataArray.push(data);
        state.changed = true;
      }
    },
    handleNotification(state, action) {
      state.Notification = {...state.Notification,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
