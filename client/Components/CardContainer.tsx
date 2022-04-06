import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import EventCards from './EventCards';
import axios from 'axios';

const CardContainer = () => {
	// const cardList: any[] = [];
	const [cards, setCards] = useState([]);
	// const [open, setOpen] = useState(false);
  // const handleOpen = () => {
	// 	console.log('Clicked Comment')
	// 	console.log(open);
	// 	setOpen(!open);
	// 	console.log(open);
	// }
  // const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get('http://localhost:3000/pins/NYC')
			.then((response) => {
				const cardsFromDatabase: any = [];
				response.data.forEach((pin: any) => {
					cardsFromDatabase.push(
						<Grid item>
							<EventCards 
								key={pin._id} 
								name={pin.name} 
								votes={pin.votes} 
								id={pin._id} 
								pin={pin} 
								// open={open} 
								// handleOpen={handleOpen}
								// handleClose={handleClose}
								/>
						</Grid>
					);
				});
				setCards(cardsFromDatabase);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<Box sx={{ 
			display: 'flex',
			flexDirection: 'column',
			height: '750px', 
			width: '500', 
			overflow: 'scroll',
			overflowX: 'hidden', 
			padding: '30px',
			alignContent: 'space-between' }}>
			{cards}
		</Box>
	);
};

export default CardContainer;
