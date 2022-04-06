import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
	CssBaseline,
	Box,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	Badge,
	Container,
	Grid,
	Paper,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import MapContainer from './MapContainer';
import CardContainer from './CardContainer';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const mdTheme = createTheme();

function DashboardContent() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex', width: '100%' }}>
				<CssBaseline />
				<AppBar position='absolute'>
					<Toolbar
						sx={{
							pr: '24px', // keep right padding when drawer closed
						}}
					>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='open drawer'
							onClick={toggleDrawer}
							sx={{
								marginRight: '36px',
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component='h1'
							variant='h6'
							color='inherit'
							noWrap
							sx={{ flexGrow: 1 }}
						>
							Meander
						</Typography>
						<IconButton color='inherit'>
							<Badge badgeContent={0} color='secondary'>
								<SettingsBrightnessIcon sx={{ m: 0.5 }} onClick={colorMode.toggleColorMode} />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box
					component='main'
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						width: '100%',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Container
						id='ContainerHolder'
						maxWidth={false}
						sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'row' }}
					>
						<Grid
							container
							spacing={3}
							sx={{ display: 'flex', flexDirection: 'row' }}
						>
							<Grid item xs={8}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 800,
									}}
								>
									<MapContainer />
								</Paper>
							</Grid>
							<Grid item xs={4}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										width: 550,
										height: 800,
									}}
								>
									<CardContainer />
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
