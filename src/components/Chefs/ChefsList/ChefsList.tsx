import { Box, Grid, Pagination, useMediaQuery } from '@mui/material';
import styles from './ChefsList.module.css';
import ChefCard from '../ChefCard/ChefCard';
import { ChefData } from '../../../types/CommonType';
import { theme } from '../../../ui/theme';
import { useState } from 'react';

interface ChefsListProps {
  chefs: ChefData[];
  bucketUrl: string;
}

const ChefsList = ({ chefs, bucketUrl }: ChefsListProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(0);
  const handleOnChange = (event: React.ChangeEvent<unknown>, value: number) => {
    value = value - 1;
    setPage(value);
  };

  return isMobile ? (
    <Box className={styles.chefItem}>
      <ChefCard chefData={chefs[page]} bucketUrl={bucketUrl} />
      <Pagination count={chefs.length} page={page + 1} onChange={handleOnChange} />
    </Box>
  ) : (
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
