import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface PubVisit {
  pubName: string;
  visitDate: string;
  review: number;
  comment: string;
}

interface PubVisitState {
  pubVisits: PubVisit[];
}

export const initialState: PubVisitState = {
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
      action: PayloadAction<{ pubName: string; visitDate: string }>
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
