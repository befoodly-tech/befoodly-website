import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, IconButton, Card, CardContent, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import leftQuotes from '../../assets/svgs/StyleLeft.svg';
import rightQuotes from '../../assets/svgs/StyleRight.svg';
import { testimonials } from '../../utils/Testimony';
import styles from './Testimonials.module.css';
import Separator from '../Common/Separator';
import { grey } from '@mui/material/colors';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper elevation={0} className={styles.testimony}>
      <Typography variant="h3" className={styles.testimonyHead}>
        Happy Customers
      </Typography>
      <Separator />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item className={styles.testimonyGrid}>
          <Card className={styles.testimonialCard}>
            <CardContent>
              <Box className={styles.testimonialMessage}>
                <img className={styles.quotesStyle} src={leftQuotes} />
                <Typography color={grey}>{testimonials[currentIndex].message}</Typography>
                <img
                  className={styles.quotesStyle}
                  src={rightQuotes}
                  style={{ alignContent: 'left' }}
                />
              </Box>
              <Typography variant="h6" textAlign={'center'} padding={'10px'}>
                - {testimonials[currentIndex].name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <IconButton onClick={prevTestimonial}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={nextTestimonial}>
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TestimonialSlider;
