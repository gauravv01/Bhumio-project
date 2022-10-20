import { createSlice } from "@reduxjs/toolkit";

const notification=createSlice({
    name:'notificationSlice',
    initialState: {Notification: null},
reducers:{
    handleNotification(state, action) {
    state.Notification = action.payload
  },
}
});

export const NotificationActions=notification.actions;

export default notification;