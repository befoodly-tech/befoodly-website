import React from 'react';
import { Container, Box, Paper } from '@mui/material';

const ComingSoon = () => {
  return (
    <Container>
      <Paper
        sx={{
          height: '80%',
          width: '150px',
          textAlign: 'center',
          fontSize: '20px',
          padding: '100px',
          margin: 'auto',
          transform: 'translate(0,100%)'
        }}
      >
        Coming Soon...
      </Paper>
    </Container>
  );
};

export default ComingSoon;
