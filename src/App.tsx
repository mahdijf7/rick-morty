import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HomePage } from './pages/HomePage';
import theme from './theme';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HomePage />
		</ThemeProvider>
	);
};

export default App;
