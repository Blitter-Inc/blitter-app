import { BillStatus, BillTypes } from "@d/store/entity.d";
import { createSlice } from "@reduxjs/toolkit";

const name = "bill";

const initialState = {
  bills: [
    {
      name: "Grocery",
      amount: 1500,
      settledAmt: 500,
      type: BillTypes.Food,
      eventName: "",
      description: "",
      status: BillStatus.PENDING,
      createdBy: "Khushi",
      created: new Date().toDateString(),
      lastUpdated: new Date().toDateString(),
      subscribers: [
        {
          id: 0,
          phoneNumber: "",
          name: "",
          email: "",
          avatar: "https://blitter-api.herokuapp.com/media/user/avatar/14.jpg",
          bio: "",
          dateJoined: "",
        },
        {
          id: 0,
          phoneNumber: "",
          name: "",
          email: "",
          avatar: "https://blitter-api.herokuapp.com/media/user/avatar/6.jpg",
          bio: "",
          dateJoined: "",
        },
      ],
      attachments: [],
    },
  ],
};

const BillSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export const {} = BillSlice.actions;

export default BillSlice;
