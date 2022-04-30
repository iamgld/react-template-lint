// Redux Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// App Imports
import { Ui, UiTheme, UiDrawerState } from '@gld/models'

const uiInitialState: Ui = {
	theme: UiTheme.light,
	drawerState: UiDrawerState.opened
}

const uiSlice = createSlice({
	name: 'ui',
	initialState: uiInitialState,
	reducers: {
		openDrawer: (state) => ({ ...state, drawerState: UiDrawerState.opened }),
		closeDrawer: (state) => ({ ...state, drawerState: UiDrawerState.closed }),
		receivingData: (state, action: PayloadAction<any>) => ({
			...state
			// property: action.payload,
		})
	}
})

export const { openDrawer, closeDrawer } = uiSlice.actions
export const uiReducer = uiSlice.reducer
