import React from 'react';
import { Container, Typography } from '@mui/material';
import { CharacterList } from '../components/organisms/CharacterList';

export const HomePage: React.FC = () => {
	return (
		<Container>
			<Typography textAlign="center" margin="1rem" variant="h4" gutterBottom>
				Rick and Morty Characters
			</Typography>
			<CharacterList />
		</Container>
	);
};
