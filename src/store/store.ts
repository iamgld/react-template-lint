// Redux Imports
import { configureStore } from '@reduxjs/toolkit'
// Slices Imports
import { uiReducer } from './slices/ui.slice'

export const store = configureStore({
	reducer: {
		ui: uiReducer
	}
})

export type StoreDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof store.getState>
