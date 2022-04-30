export enum UiTheme {
	light = 'light',
	dark = 'dark'
}

export enum UiDrawerState {
	opened = 'opened',
	closed = 'closed'
}

export interface Ui {
	theme: keyof typeof UiTheme
	drawerState: keyof typeof UiDrawerState
}
