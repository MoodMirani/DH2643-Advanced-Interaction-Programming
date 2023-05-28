import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UserState {
  FirstName: string;
  LastName: string;
  Email: string;
  pubVisits: object[];
  registered: boolean;
  biography: string;
  isLoading: boolean;
}

const initialState: UserState = {
  FirstName: "first name",
  LastName: "last name",
  Email: "email@test.se",
  pubVisits: [],
  registered: false,
  biography: "a short biography",
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.FirstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.LastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload;
    },
    addPubVisit: (state, action: PayloadAction<object>) => {
      state.pubVisits.push(action.payload);
    },
    setRegistered: (state, action: PayloadAction<boolean>) => {
      state.registered = action.payload;
    },
    setBiography: (state, action: PayloadAction<string>) => {
      state.biography = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  addPubVisit,
  setRegistered,
  setBiography,
  setIsLoading,
} = userSlice.actions;

export default userSlice.reducer;
