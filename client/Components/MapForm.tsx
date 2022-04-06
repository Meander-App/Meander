import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import PinTypeButton from './PinTypeButton';
import { useDispatch } from 'react-redux';
import { submitPin } from '../state/middleware/thunk';

const MapForm = () => {
	const dispatch = useDispatch();

	return (
		<Box
			component='form'
			sx={{
				display: 'inline-flex',
				justifyContent: 'center',
				alignItems: 'center',
				'& .MuiTextField-root': { m: 1, width: '30%' },
			}}
			noValidate
			autoComplete='off'
		>
			<PinTypeButton />
			<TextField
				required
				id='event-name'
				label='Event Name'
				placeholder='Enter the event name'
			/>
			<TextField
				id='event-details'
				label='Event Details'
				placeholder='Describe the event'
				multiline
			/>
			<Button
				sx={{ height: 50 }}
				variant='outlined'
				onClick={() => dispatch(submitPin)}
			>
				Submit
			</Button>
		</Box>
	);
};

export default MapForm;
