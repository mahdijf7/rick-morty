import React from 'react';
import { Modal, Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CharacterDetailsModalProps {
	open: boolean;
	onClose: () => void;
	character: {
		name: string;
		image: string;
		status: string;
		species: string;
		gender: string;
		origin: { name: string };
		location: { name: string };
	} | null;
}
const boxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 2,
	width: 400,
	p: 2,
};

export const CharacterDetailsModal: React.FC<CharacterDetailsModalProps> = ({
	open,
	onClose,
	character,
}) => {
	if (!character) return null;

	return (
		<Modal open={open} onClose={onClose} aria-labelledby="character-modal-title">
			<Box sx={boxStyle}>
				<IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={onClose}>
					<CloseIcon />
				</IconButton>
				<Card>
					<CardMedia component="img" height="200" image={character.image} alt={character.name} />
					<CardContent>
						<Typography variant="h5">{character.name}</Typography>
						<Typography color="text.secondary">
							{character.status} - {character.species}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Modal>
	);
};
