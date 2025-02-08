import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CharacterCardProps {
	name: string;
	image: string;
	status: string;
	species: string;
	onClick: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
	name,
	image,
	status,
	species,
	onClick,
}) => {
	return (
		<Card sx={{ maxWidth: 200, height: 300, cursor: 'pointer' }} onClick={onClick}>
			<CardMedia component="img" height="200" image={image} alt={name} />
			<CardContent>
				<Typography variant="h6">{name}</Typography>
				<Typography color="text.secondary">
					{status} - {species}
				</Typography>
			</CardContent>
		</Card>
	);
};
