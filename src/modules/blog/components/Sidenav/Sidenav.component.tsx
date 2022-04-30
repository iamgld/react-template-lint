// React Imports
import React, { FC, ReactElement, useState, useEffect } from 'react'
import classes from './Sidenav.module.scss'
// App Imports
import { UiDrawerState } from '@gld/models'
import { IconArrowLeft, IconMenu } from '@gld/utils/icons'
// Redux Imports
import { useStoreSelector, useStoreDispatch, closeDrawer } from '@gld/store'
// Material UI Imports
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'

enum Variant {
	temporary = 'temporary',
	persistent = 'persistent',
	permanent = 'permanent'
}

interface SidenavProps {}

export const Sidenav: FC<SidenavProps> = (props: SidenavProps): ReactElement => {
	const dispatch = useStoreDispatch()
	const { drawerState } = useStoreSelector((state) => state.ui)
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(UiDrawerState.opened === drawerState)
	const [variant] = useState<keyof typeof Variant>(Variant.persistent)

	function onCloseDrawer (): void {
		dispatch(closeDrawer())
		setIsDrawerOpen(false)
	}

	useEffect(() => {
		UiDrawerState.opened === drawerState ? setIsDrawerOpen(true) : setIsDrawerOpen(false)
	}, [drawerState])

	return (
		<Drawer
			anchor='left'
			open={isDrawerOpen}
			variant={variant}
			onClose={closeDrawer}
			classes={{
				paper: classes.drawer__paper
			}}
			className={classes.drawer}
		>
			<section className={classes.drawer__header}>
				<IconButton onClick={onCloseDrawer}>
					<IconArrowLeft />
				</IconButton>
			</section>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <IconMenu /> : <IconMenu />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <IconMenu /> : <IconMenu />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}
