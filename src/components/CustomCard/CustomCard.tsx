import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './CustomCard.module.css';
import { CustomCardProps } from '../../types/AppConfig';

const CustomCard = (props: CustomCardProps) => {
  return (
    <Card elevation={0} className={styles.cardBlock}>
      <CardMedia className={styles.cardImg} image={props.photoUrl} title={props.title} />
      <CardContent>
        <Typography gutterBottom className={styles.title} variant="h6">
          {props.title}
        </Typography>
        <Typography gutterBottom className={styles.description}>
          {props.description}
        </Typography>
        <Typography className={styles.author}>-{props.author}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
