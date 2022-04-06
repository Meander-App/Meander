import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import CommentModal from './CommentModal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const EventCards = (props: any) => {
	const [votes, setVotes] = useState(props.votes);
	// console.log(props.pin)
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		console.log('Clicked Comment')
		console.log(open);
		setOpen(!open);
	}
  const handleClose = () => setOpen(false);

	const upvote = () => {
		axios
			.patch(`http://localhost:3000/pins/upVote/${props.id}`)
			.then((response) => {
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
		<Card sx={{ maxWidth: 450, marginBottom: '20px' }}>
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
			<CardActions sx={{ alignContent: 'space-around', justifyContent: 'center' }}>
				<Button size='small' color='primary' onClick={handleOpen}>
					Comments
				</Button>
				{/* {props.open && <CommentModal />} */}
				
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

export default EventCards;
