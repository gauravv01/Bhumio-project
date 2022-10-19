import { createSlice } from "@reduxjs/toolkit";

const notification=createSlice({
    name:'notificationSlice',
    initialState: {Notification: null},
reducers:{
    handleNotification(state, action) {
    state.Notification = {...state.Notification,
      message: action.payload.message,
      status: action.payload.status,
    }
  },
}
});

export const NotificationActions=notification.actions;

export default notification;