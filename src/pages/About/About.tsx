import { Container, Typography, Box, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import styles from './About.module.css';
import CustomCard from '../../components/CustomCard/CustomCard';
import IndianFood from '../../assets/images/delicious-indian-food-tray.jpg';
import GroupEatingFood from '../../assets/images/GroupEatingFood.jpg';
import Chef from '../../assets/images/Chef.jpg';
import { CustomCardProps } from '../../types/AppConfig';

const allCards: CustomCardProps[] = [
  {
    title: 'Welcome to Our Kitchen!',
    photoUrl: IndianFood,
    description:
      '"I approach cooking with an emphasis on family-style meals and the tastiest ways to eat healthy together! When not in my kitchen, I\'m often exploring the best food locations in Bangalore. My favourite food is an Indian Desi Food!"',
    author: 'The Founder'
  },
  {
    title: 'Food as Community',
    photoUrl: GroupEatingFood,
    description:
      '"Food has a special ability to bring people together. I often find this in my own life, and I hope you will find that this online community feels just as welcoming as a real kitchen. For me, cooking together builds the best communities! Let\'s get cooking together!"',
    author: 'The Consumer'
  },
  {
    title: 'Step-by-Step Cooking',
    photoUrl: Chef,
    description:
      '"I have been cooking for a long time, but that doesn\'t mean that you need a ton of cooking experience to follow any recipe. I work hard to make my recipes interesting for my advanced skills. I love to serve delicious food to people and make their day!"',
    author: 'The Founder'
  }
];

const About = () => {
  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <Container className={styles.about}>
        <Box>
          <Typography variant="h3" className={styles.aboutHeading}>
            About Us
          </Typography>
        </Box>
        <Box className={styles.seprator}>
          <hr></hr>
        </Box>
        <Box className={styles.cardList}>
          {allCards.map((card, index) => {
            return <CustomCard key={index} {...card} />;
          })}
        </Box>
      </Container>
    </>
  );
};

export default About;
