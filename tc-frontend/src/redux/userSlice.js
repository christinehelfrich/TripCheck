import  {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      user: {},
      isAuthenticated: false
    }
  },
  reducers: {
    logout: (state) => {
      state.user = {
        name: '',
        isAuthenticated: false
      }
    },
    updateUser: (state, action) => {
      state.user = action.payload
    }
  }  
});

export const {
      logout, updateUser,
    } = userSlice.actions;


export default userSlice.reducer;