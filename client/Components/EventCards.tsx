import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { connect } from 'react-redux';
import axios from 'axios';

const EventCards = (props: any) => {
	const [votes, setVotes] = useState(props.votes);

	const upvote = () => {
		axios
			.patch(`http://localhost:3000/pins/upVote/${props.id}`)
			.then((response) => {
				// console.log(response.data)
				setVotes(response.data);
			})
			.catch((e) => console.log(e));
	}

	const downvote = () => {
		axios
			.patch(`http://localhost:3000/pins/downVote/${props.id}`)
			.then((response) => {
				setVotes(response.data)
			})
			.catch((e) => console.log(e));
	}

	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Notes should go here: {props.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					Comments
				</Button>
				<Button size='small' color='primary'>
					{votes} votes
				</Button>
				<Button size='small' color='primary' onClick={upvote}>
					<ThumbUpIcon />
				</Button>
				<Button size='small' color='primary' onClick={downvote}>
					<ThumbDownIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

// function mapDispatchToProps(dispatch) {
// 	return {removePin: ()}
// }

// export default connect(mapDispatchToProps)(EventCards);

export default EventCards;
