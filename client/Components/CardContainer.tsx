import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import EventCards from './EventCards';
import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getLocalPins } from '../state/middleware/thunk';

const CardContainer = (props: any) => {
	const dispatch = useDispatch();
	// const [cards, setCards] = useState([]);
	// const pins = useSelector((state: any) => state.map.resultsList);
	// const [open, setOpen] = useState(false);
  // const handleOpen = () => {
	// 	console.log('Clicked Comment')
	// 	console.log(open);
	// 	setOpen(!open);
	// 	console.log(open);
	// }
  // const handleClose = () => setOpen(false);
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
		<Box sx={{ 
			// display: 'flex',
			// flexDirection: 'column',
			height: '750px', 
			width: '500', 
			overflow: 'scroll',
			overflowX: 'hidden', 
			padding: '30px',
			alignContent: 'space-between' 
		}}
		>
			{props.pins.map((pin: any) => {
				return <EventCards key={pin._id} name={pin.name} votes={pin.votes} id={pin.id} pin={pin}/>;
			})}
		</Box>
	);
};

function mapStateToProps(state: any) {
	return { pins: state.map.resultsList };
}

export default connect(mapStateToProps)(CardContainer);
