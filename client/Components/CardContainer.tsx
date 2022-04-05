import React from 'react';
import { Grid } from '@mui/material';
import EventCards from './EventCards';

const CardContainer = () => {
  const cardList = [];
  // for (const events of events) {
  //   cardList.push(
  //     <Grid key={i} item>
  //       <EventCards  id={i} />
  //     </Grid>
  //   );
  // }
  for (let i = 0; i < 6; i++) {
    cardList.push(
      <Grid key={i} item>
        <EventCards />
      </Grid>
    );
  }
  
  
  return (
    <Grid container direction='row' spacing={4} sx={{marginTop: '30px', padding: '30px'}}>
      {cardList}
    </Grid>
  )
}

export default CardContainer;