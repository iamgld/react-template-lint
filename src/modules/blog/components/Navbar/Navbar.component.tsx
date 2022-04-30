// React Imports
import React, { FC, ReactElement } from 'react'
import classes from './Navbar.module.scss'
// App Imports
import { UiDrawerState } from '@gld/models'
import { IconMenu, IconSearch } from '@gld/utils/icons'
// Redux Imports
import { useStoreSelector, useStoreDispatch, openDrawer, closeDrawer } from '@gld/store'
// Material UI Imports
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto'
	}
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch'
			}
		}
	}
}))

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = (props: NavbarProps): ReactElement => {
	const dispatch = useStoreDispatch()
	const { drawerState } = useStoreSelector((state) => state.ui)

	function toggleDrawer (): void {
		UiDrawerState.opened === drawerState ? dispatch(closeDrawer()) : dispatch(openDrawer())
	}

	return (
		<AppBar className={classes.navbar} position='static'>
			<Toolbar className={classes.navbar__toolbar} variant='dense'>
				<IconButton
					onClick={toggleDrawer}
					edge='start'
					color='inherit'
					aria-label='open drawer'
					sx={{ mr: 2 }}
				>
					<IconMenu />
				</IconButton>
				<Typography
					variant='h6'
					noWrap
					component='p'
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					Iamgld
				</Typography>
				<Search>
					<SearchIconWrapper>
						<IconSearch />
					</SearchIconWrapper>
					<StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
				</Search>
			</Toolbar>
		</AppBar>
	)
}
