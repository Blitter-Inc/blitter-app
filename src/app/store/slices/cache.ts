import { createSlice } from "@reduxjs/toolkit";
import { BillStatus, BillType } from "$types/modules/bill";
import { CacheState } from "$types/store";


const name = "cache";

const initialState: CacheState = {
  bills: [
    {
      id: 0,
      name: "Grocery",
      amount: "1500",
      settledAmt: "500",
      type: BillType.FOOD,
      eventName: "",
      description: "This is a sample description",
      status: BillStatus.UNSETTLED,
      createdBy: "Khushi",
      createdAt: new Date().toDateString(),
      lastUpdatedAt: new Date().toDateString(),
      subscribers: [
        {
          id: 0,
          splitAmt: "500",
          paidAmt: "500",
          name: "Khushi",
          avatar: "https://blitter-api.herokuapp.com/media/user/avatar/14.jpg",
        },
        {
          id: 1,
          name: "Kaira",
          splitAmt: "500",
          paidAmt: "0",
          avatar: "https://blitter-api.herokuapp.com/media/user/avatar/6.jpg",
        },
        {
          id: 2,
          name: "Pranav",
          splitAmt: "500",
          paidAmt: "0",
          avatar: "https://blitter-api.herokuapp.com/media/user/avatar/6.jpg",
        },
      ],
      attachments: [],
    },
  ],
};

const CacheSlice = createSlice({
  name,
  initialState,
  reducers: {},
});


export const { } = CacheSlice.actions;

export default CacheSlice;
