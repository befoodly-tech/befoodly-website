import { Grid } from '@mui/material';
import styles from './ChefsList.module.css';
import ChefCard from '../ChefCard/ChefCard';
import { ChefData } from '../../../types/CommonType';

interface ChefsListProps {
  chefs: ChefData[];
  bucketUrl: string;
}

const ChefsList = ({ chefs, bucketUrl }: ChefsListProps) => {
  return (
    <Grid container spacing={'1.5rem'} className={styles.chefsList}>
      {chefs.map((chef, index) => (
        <Grid key={index} item>
          <ChefCard chefData={chef} bucketUrl={bucketUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChefsList;
