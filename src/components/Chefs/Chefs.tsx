import { Box, Typography, Container, CircularProgress } from '@mui/material';
import styles from './Chefs.module.css';
import ChefsList from './ChefsList/ChefsList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchPopularCookDataApi } from '../../actions/ChefActions';
import EmptyDataCard from '../Common/EmptyDataCard';
import { PersonOff } from '@mui/icons-material';
import DataLoadingCircle from '../Common/DataLoadingCircle';

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
      <Container className={styles.chefsBox}>
        <Typography className={styles.popular}>Meet Our Chefs!</Typography>
        <DataLoadingCircle isLoading={isLoading} />
        {chefData?.data ? (
          <Box>
            <ChefsList chefs={chefData?.data} bucketUrl={props.bucketUrl} />
          </Box>
        ) : (
          <>
            {!isLoading && (
              <EmptyDataCard
                message={'No Popular Chef Profile For Now!'}
                icon={<PersonOff sx={{ color: 'rgb(112, 112, 112)' }} />}
              />
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Chefs;
