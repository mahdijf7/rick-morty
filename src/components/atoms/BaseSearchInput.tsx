import React from 'react';
import { TextField } from '@mui/material';

interface BaseSearchInputProps {
	label: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export const BaseSearchInput: React.FC<BaseSearchInputProps> = ({ label, value, onChange }) => {
	return (
		<TextField
			label={label}
			variant="outlined"
			fullWidth
			value={value}
			onChange={onChange}
			sx={{ mb: 2 }}
		/>
	);
};
