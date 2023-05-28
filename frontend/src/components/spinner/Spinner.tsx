import * as React from 'react';
// Using the material UI library to create loading spinner
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ef6767' }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}
