import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import EventCards from './EventCards';
import axios from 'axios';

const CardContainer = () => {
	// const cardList: any[] = [];
	const [cards, setCards] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3000/pins/NYC')
			.then((response) => {
				const cardsFromDatabase: any = [];
				response.data.forEach((pin: any) => {
					cardsFromDatabase.push(
						<Grid item>
							<EventCards key={pin._id} name={pin.name} votes={pin.votes} id={pin._id} pin={pin} />
						</Grid>
					);
				});
				setCards(cardsFromDatabase);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<Grid
			container
			direction='row'
			spacing={4}
			sx={{ marginTop: '30px', padding: '30px' }}
		>
			{cards}
		</Grid>
	);
};

export default CardContainer;
