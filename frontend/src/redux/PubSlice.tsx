import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PubVisit {
  pubName: string;
  visitDate: Date;
  review: number;
  comment: string;
}

interface PubVisitState {
  pubVisits: PubVisit[];
}

const initialState: PubVisitState = {
  pubVisits: [],
};

const pubVisitSlice = createSlice({
  name: "pubVisit",
  initialState,
  reducers: {
    addPubVisit: (state, action: PayloadAction<PubVisit>) => {
      state.pubVisits.push(action.payload);
    },
    deletePubVisit: (
      state,
      action: PayloadAction<{ pubName: string; visitDate: Date }>
    ) => {
      state.pubVisits = state.pubVisits.filter(
        (visit) =>
          visit.pubName !== action.payload.pubName ||
          visit.visitDate !== action.payload.visitDate
      );
    },
  },
  extraReducers: {},
});

export const { addPubVisit, deletePubVisit } = pubVisitSlice.actions;

export default pubVisitSlice.reducer;
