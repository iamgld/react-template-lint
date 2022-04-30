// React Imports
import { createContext, useState } from 'react'
// App Imports
import { Ui, UiThemeOptions, UiMainDrawerOptions } from '@gld/models'

export const UiContextInitialValue: Ui = {
	theme: UiThemeOptions.light,
	mainDrawer: UiMainDrawerOptions.closed
}

export const UiContext = createContext<Ui>(UiContextInitialValue)
