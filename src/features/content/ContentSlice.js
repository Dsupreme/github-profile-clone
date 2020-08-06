import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/api.js';

export const fetchRepositories = createAsyncThunk('content/fetchRepositories', async () => {
  const response = await API.getJSON('/users/supreetsingh247/repos');
  return response;
});

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    tabs: ['Overview', 'Repositories', 'Projects'],
    repositories: [],
    filters: {
      type: ['All', 'Sources', 'Forks'],
      languages: ['All', 'JavaScript', 'HTML', 'CSS'],
      languageColor: {
        JavaScript: '#f1e05a',
        HTML: '#e34c26',
        CSS: '#563d7c'
      }
    },
    status: '',
  },
  extraReducers: {
    [fetchRepositories.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchRepositories.fulfilled]: (state, action) => {
      state.repositories = action.payload;
      state.status = 'success';
    },
    [fetchRepositories.rejected]: (state, action) => {
      state.status = 'fail';
    },
  },
});

export const selectContent = (state) => state.content;

export default contentSlice.reducer;
