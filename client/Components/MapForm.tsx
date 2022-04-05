import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MapForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
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
          // rows={2}
      />
    </Box>
  )
}


export default MapForm;