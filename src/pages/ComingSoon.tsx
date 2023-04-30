import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

const ComingSoon = () => {
  return (
    <Paper
      sx={{
        textAlign: 'center',
        fontSize: '20px',
        padding: '20px',
        margin: '20px',
        backgroundColor: 'rgb(212, 200, 56)'
      }}
    >
      <Typography variant="h2" sx={{ fontFamily: 'Roboto-Medium' }}>
        BeFoodly
      </Typography>
      <br />
      App Coming Soon...
      <Typography variant="subtitle1" sx={{ padding: '40px 0', color: 'red' }}>
        Drop a mail at <a href="mailto: admin@befoodly.com">admin@befoodly.com</a>
        <br /> if you want to be the part of our founding team.
      </Typography>
      <Button
        variant="contained"
        onClick={() => (window.location.href = '/')}
        sx={{ padding: '12px', color: 'white', backgroundColor: 'black' }}
      >
        Back to Home
      </Button>
    </Paper>
  );
};

export default ComingSoon;
