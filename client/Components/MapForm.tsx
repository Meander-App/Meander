import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import PinTypeButton from './PinTypeButton';

const MapForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '30%' },
      }}
      noValidate
      autoComplete="off"
    >
      <PinTypeButton />
      <TextField
          required
          id="event-name"
          label="Event Name"
          placeholder="Enter the event name"
      />
      <TextField
          id="event-details"
          label="Event Details"
          placeholder="Describe the event"
          multiline
      />
      <Button sx={{height: 50}} variant="outlined">Submit</Button>
    </Box>
  )
}


export default MapForm;