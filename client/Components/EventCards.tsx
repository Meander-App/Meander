import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const EventCards = () => {
  
  return(
    <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            YoYo's Hot Dogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            There's just some guy with his wife and they serve hot dogs
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comments
        </Button>
        <Button size="small" color="primary">
          <ThumbUpIcon />
        </Button>
        <Button size="small" color="primary">
          <ThumbDownIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCards;