import React, { useState } from 'react';
import { Pagination, Box } from '@mui/material';
import { Grid2 } from '@mui/material';

import { useCharacters } from '../../hooks/useCharacters';
import { CharacterCard } from '../molecules/CharacterCard';
import { CharacterDetailsModal } from '../molecules/CharacterDetailsModal';
import { BaseSkeleton } from '../atoms/BaseSkeleton';
import { BaseSearchInput } from '../atoms/BaseSearchInput';

export const CharacterList: React.FC = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const { data, loading, error } = useCharacters(page, search);
	const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
	const [open, setOpen] = useState(false);

	const handleOpen = (character: any) => {
		setSelectedCharacter(character);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedCharacter(null);
	};

	return (
		<Box
			sx={{
				p: 2,
			}}>
			<BaseSearchInput
				label="Search Character"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{loading ? (
				<BaseSkeleton />
			) : error ? (
				<p>Error: {error.message}</p>
			) : (
				<>
					<Grid2 container spacing={2} display="flex" justifyContent="center">
						{data?.characters?.results?.map((char: any) => (
							<Grid2>
								<CharacterCard {...char} onClick={() => handleOpen(char)} />
							</Grid2>
						))}
					</Grid2>
					<Box sx={paginationStyle}>
						<Pagination count={5} page={page} onChange={(_, value) => setPage(value)} />
					</Box>

					<CharacterDetailsModal open={open} onClose={handleClose} character={selectedCharacter} />
				</>
			)}
		</Box>
	);
};
const paginationStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '2rem',
};
