import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'



const initialState = {
  FirstName: "first name",
  LastName: "last name",
  Email: "email@test.se",
  Password: "password",
  pubVisits: [],
  loggedIn: false,
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
        state.FirstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
        state.LastName = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
        state.Email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
        state.Password = action.payload
    },
  },
  extraReducers: {},
})

export const { setFirstName, setLastName, setEmail, setPassword } = userSlice.actions

export default userSlice.reducer