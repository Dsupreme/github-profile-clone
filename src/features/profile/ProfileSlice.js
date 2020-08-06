import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/api.js';

export const updateProfile = createAsyncThunk('profile/updateProfile', async () => {
  const response = await API.getJSON('/users/supreetsingh247');
  return response;
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    alias: '',
    avatarUrl: '',
    bio: '',
    email: '',
    organization: '',
    location: '',
    followersCount: 0,
    followingCount: 0,
    status: '',
  },
  extraReducers: {
    [updateProfile.pending]: (state, action) => {
      state.status = 'loading';
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.alias = action.payload.login;
      state.bio = action.payload.bio;
      state.avatarUrl = action.payload.avatar_url;
      state.email = action.payload.email;
      state.organization = action.payload.company;
      state.location = action.payload.location;
      state.followersCount = action.payload.followers;
      state.followingCount = action.payload.following;
      state.status = 'success';
    },
    [updateProfile.rejected]: (state, action) => {
      state.status = 'fail';
      state.error = action.error.message;
    },
  },
});

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer;
