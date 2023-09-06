import { Box, Typography, Container } from '@mui/material';
import styles from './Chefs.module.css';
import ChefsList from './ChefsList/ChefsList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchPopularCookDataApi } from '../../actions/ChefActions';
import LoadingCircle from '../Common/LoadingCircle';

interface ChefsProps {
  bucketUrl: string;
}

const Chefs = (props: ChefsProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, chefData } = useAppSelector(state => state.chef);

  useEffect(() => {
    dispatch(fetchPopularCookDataApi());
  }, [dispatch]);

  return (
    <Box className={styles.mainSection}>
      {isLoading && <LoadingCircle />}
      {chefData?.data && (
        <Container className={styles.chefsBox}>
          <Typography className={styles.popular}>Meet Our Popular Chefs!</Typography>
          <Box>
            <ChefsList chefs={chefData?.data} bucketUrl={props.bucketUrl} />
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default Chefs;
