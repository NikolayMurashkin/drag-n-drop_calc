import { configureStore } from '@reduxjs/toolkit';

import switcherReducer from './switcherSlice';
import displayReducer from './displaySlice';

export const store = configureStore({
	reducer: {
		switcher: switcherReducer,
		display: displayReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
