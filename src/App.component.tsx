// React Imports
import React, { FC, ReactElement } from 'react'
// App Imports
import { Blog } from '@gld/modules/blog/index.module'
// React Router Dom Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Redux Imports
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@gld/store'

interface Props {}

export const App: FC<Props> = (): ReactElement => {
	return (
		<ReduxProvider store={store}>
			<BrowserRouter>
				<Routes>
					{/* <Route path='/' element={<Home />}></Route> */}
					{/* <Route path='/login' element={<Auth />}></Route> */}
					{/* <Route path='/register' element={<Auth />}></Route> */}
					<Route path='/' element={<Blog />}></Route>
				</Routes>
			</BrowserRouter>
		</ReduxProvider>
	)
}
