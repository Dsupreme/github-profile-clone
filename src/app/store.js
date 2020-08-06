import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/ProfileSlice';
import contentReducer from '../features/content/ContentSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    content: contentReducer,
  },
});
