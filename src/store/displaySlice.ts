import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DisplayState {
	value: number;
}

const initialState: DisplayState = {
	value: 0,
};

export const displaySlice = createSlice({
	name: 'display',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setValue } = displaySlice.actions;

export default displaySlice.reducer;
