import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as constant from '../config/constant';
import { useNavigate } from 'react-router-dom';

// Login User Thunk
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    const response = await fetch(constant.LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed!');
    }

    const data = await response.json();
    return data; // Assuming the response has user data
  }
);

// Get User Thunk
export const getUser = createAsyncThunk(
  'user/getUser', // Change from constant.GET_USER for consistency
  async ( jwt ) => {
    console.log("jwt provide for request")
    console.log(jwt)
    const response = await fetch(constant.GET_USER, { // Updated URL for clarity
      method: 'POST', // Assuming GET to fetch user details
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });

    if (!response.ok) {
      throw new Error('Fetching user details failed!');
    }
    
    const data = await response.json();
    return data; // Assuming the response has user data
  }
);

// Register User Thunk
export const registerUser = createAsyncThunk(
  'user/register', // Updated for consistency

  async ({ firstName, lastName, fullName, email, password, role }) => {
    console.log({ firstName, email, fullName, lastName, password, role })
    const response = await fetch(constant.REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, fullName, lastName, email, password, role }),
    });

    if (!response.ok) {
      throw new Error('Registration failed!');
    }

    const data = await response.json();
    return data; // Assuming the response has user data
  }
);

// Create User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    jwt:null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Logout reducer to reset user state
    logout(state) {
      state.user = null;
      state.error = null;
      localStorage.removeItem('token');
      state.jwt=null;
      // Additional cleanup if needed
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        console.log(state.user)
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message || "Unable to fetch the user details!";
      });
  },
});

// Export actions
export const { logout } = userSlice.actions;

// Selector to select user data
export const selectUser = (state) => state.user.user;

// Export user slice reducer
export default userSlice.reducer;
