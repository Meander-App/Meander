import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { connect } from 'react-redux';

const EventCards = (props: any) => {
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
					{props.votes} votes
				</Button>
				<Button size='small' color='primary'>
					<ThumbUpIcon />
				</Button>
				<Button size='small' color='primary'>
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
