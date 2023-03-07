import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SwitcherState {
	value: string;
}

const initialState: SwitcherState = {
	value: 'Constructor',
};

export const switcherSlice = createSlice({
	name: 'switcher',
	initialState,
	reducers: {
		toggleSwitcher: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { toggleSwitcher } = switcherSlice.actions;

export default switcherSlice.reducer;
