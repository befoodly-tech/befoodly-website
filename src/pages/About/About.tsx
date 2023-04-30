import { Container, Typography, Box, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import styles from './About.module.css';
import CustomCard from '../../components/CustomCard/CustomCard';
import IndianFood from '../../assets/images/indian-food.jpg';
import HomeKitchen from '../../assets/images/home-kitchen.jpg';
import HomeChef from '../../assets/images/home-chef2.jpg';
import PiyushImg from '../../assets/images/Piyush.jpg';
import DeepakImg from '../../assets/images/deepak.jpg';
import { CustomCardProps, TeamCardProps } from '../../types/AppConfig';
import Separator from '../../components/Common/Separator';
import TeamCard from '../../components/Common/TeamCard';

const allCards: CustomCardProps[] = [
  {
    title: 'Welcome to Our Kitchen',
    photoUrl: HomeKitchen,
    description:
      '"I approach cooking with an emphasis on family-style meals and the tastiest ways to eat homely food together! When not in my kitchen, I\'m often exploring the best homemade food locations in Bangalore. My favourite is an Indian Traditional Food!"',
    author: 'The Founder'
  },
  {
    title: 'Food as Community',
    photoUrl: IndianFood,
    description:
      '"Food has a special ability to bring people together. We often find this in our own life, and We hope that this online community feels just as welcoming as our own kitchen. For us, eating together builds the best communities. Let\'s get foody together!"',
    author: 'The Community'
  },
  {
    title: 'Step-by-Step Cooking',
    photoUrl: HomeChef,
    description:
      '"I have been cooking for a long time, but that doesn\'t mean that you need a ton of cooking experience to make any recipe. I work hard to make my recipes taste delicious and homely. I love to serve homemade food to people and make their day!"',
    author: 'The HomeChef'
  }
];

const allTeamMembers: TeamCardProps[] = [
  {
    name: 'Deepak Jangid',
    photoUrl: DeepakImg,
    description:
      'A Food and Tech Lover, trying to build a food tech. Through Befoodly, we want to make it easy for people to order homemade healthy food at very affordable prices.',
    title: 'The Creater',
    linkedinLink: 'https://www.linkedin.com/in/deepak8504/'
  },
  {
    name: 'Piyush Chouhan',
    photoUrl: PiyushImg,
    description:
      'A Passionate Foodie, trying to fill a gap in the F&B marketplace. To empower, small and medium food service providers to deliver homemade food to our customers.',
    title: 'The Creater',
    linkedinLink: 'https://www.linkedin.com/in/piyush-chouhan-041050130/'
  }
];

const About = () => {
  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', padding: '16px 0', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <Container className={styles.about}>
        <Typography variant="h3" className={styles.aboutHeading}>
          About Us
        </Typography>
        <Separator />
        <Box className={styles.cardList}>
          {allCards.map((card, index) => {
            return <CustomCard key={index} {...card} />;
          })}
        </Box>
      </Container>
      <Container className={styles.ourTeam}>
        <Typography variant="h4" className={styles.ourTeamHeading}>
          Our Team
        </Typography>
        <Separator />
        <Box className={styles.teamCards}>
          {allTeamMembers.map((data, index) => {
            return <TeamCard key={index} {...data} />;
          })}
        </Box>
      </Container>
    </>
  );
};

export default About;
