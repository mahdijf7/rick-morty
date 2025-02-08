import { Box, Grid2, Skeleton } from '@mui/material';

export function BaseSkeleton() {
	return (
		<Grid2 container spacing={2}>
			{Array.from(new Array(8)).map((_) => (
				<Grid2>
					<Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<Skeleton variant="rectangular" width={250} height={350} />
						<Skeleton variant="text" width={160} height={20} sx={{ mt: 1 }} />
						<Skeleton variant="text" width={100} height={15} />
					</Box>
				</Grid2>
			))}
		</Grid2>
	);
}
