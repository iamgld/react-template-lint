// React Imports
import React, { FC, ReactElement } from 'react'
import classes from './Blog.module.scss'
// App Imports
import { UiDrawerState } from '@gld/models'
// Blog Components
import { Sidenav, Navbar } from '@gld/blog/components'
// Redux Imports
import { useStoreSelector } from '@gld/store'

interface BlogProps {}

export const Blog: FC<BlogProps> = (props: BlogProps): ReactElement => {
	const { drawerState } = useStoreSelector((state) => state.ui)

	return (
		<article className={classes.blog}>
			{UiDrawerState.opened === drawerState && <Sidenav />}

			<section className={classes.blog__layout}>
				<Navbar />
				<section className={classes.blog__content}>
					<div>Blog</div>
				</section>
			</section>
		</article>
	)
}
