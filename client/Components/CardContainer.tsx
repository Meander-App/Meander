import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import EventCards from './EventCards';
import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getLocalPins } from '../state/middleware/thunk';

const CardContainer = (props: any) => {
	const dispatch = useDispatch();
	// const [cards, setCards] = useState([]);
	// const pins = useSelector((state: any) => state.map.resultsList);
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3000/pins/NYC')
	// 		.then((response) => {
	// 			const cardsFromDatabase: any = [];
	// 			response.data.forEach((pin: any) => {
	// 				cardsFromDatabase.push(
	// 					<Grid item>
	// 						<EventCards key={pin._id} name={pin.name} votes={pin.votes} />
	// 					</Grid>
	// 				);
	// 			});
	// 			setCards(cardsFromDatabase);
	// 		})
	// 		.catch((e) => console.log(e));
	// }, []);

	useEffect(() => {
		dispatch(getLocalPins);
	}, []);

	return (
		<Grid
			container
			direction='row'
			spacing={4}
			sx={{ marginTop: '30px', padding: '30px' }}
		>
			{/* {cards} */}
			{props.pins.map((pin: any) => {
				return <EventCards key={pin._id} name={pin.name} votes={pin.votes} />;
			})}
			{/* {pins.map((pin: any) => {
				return <EventCards key={pin._id} name={pin.name} votes={pin.votes} />;
			})} */}
		</Grid>
	);
};

function mapStateToProps(state: any) {
	return { pins: state.map.resultsList };
}

export default connect(mapStateToProps)(CardContainer);
