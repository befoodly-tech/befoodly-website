import { Grid } from '@mui/material';
import styles from './ChefsList.module.css';
import ChefCard, { ChefProps } from '../ChefCard/ChefCard';

export interface AllChefs {
  chefs: ChefProps[];
}

const ChefsList = ({ chefs }: AllChefs) => {
  return (
    <Grid container spacing={'1.5rem'} className={styles.chefsList}>
      {chefs.map((chef, index) => (
        <Grid key={index} item>
          <ChefCard {...chef} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChefsList;
