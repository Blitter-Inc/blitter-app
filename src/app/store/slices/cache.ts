import { createSlice } from "@reduxjs/toolkit";
import { BillStatus, BillType } from "$types/modules/bill";
import { CacheState } from "$types/store";


const name = "cache";

const initialState: CacheState = {
  bills: [
    {
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
        // {
        //   id: 0,
        //   phoneNumber: "",
        //   name: "",
        //   email: "",
        //   avatar: "https://blitter-api.herokuapp.com/media/user/avatar/14.jpg",
        //   bio: "",
        //   dateJoined: "",
        // },
        // {
        //   id: 0,
        //   phoneNumber: "",
        //   name: "",
        //   email: "",
        //   avatar: "https://blitter-api.herokuapp.com/media/user/avatar/6.jpg",
        //   bio: "",
        //   dateJoined: "",
        // },
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
