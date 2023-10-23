import { Container, Typography } from '@mui/material';
import styles from './TrackOrder.module.css';
import EmptyDataCard from '../../components/Common/EmptyDataCard';
import { LocationDisabled } from '@mui/icons-material';
import HelpButton from '../../components/Common/HelpButton';
import Orders from '../../components/Orders/Orders';
import FAQs from '../../components/FAQs/FAQs';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchPendingDeliveryData } from '../../actions/DeliveryActions';
import LoadingCircle from '../../components/Common/LoadingCircle';
import { OrderDataType } from '../../types/CommonType';
import { postOrderFAQs } from '../../utils/GeneralFAQs';
import HeaderTabs from '../../components/Headers/HeaderTabs';

interface TrackOrderProps {
  customerId: string;
}

const TrackOrder = (props: TrackOrderProps) => {
  const { customerId } = props;
  const { deliveryDetails, isLoading, isError } = useAppSelector(state => state.delivery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPendingDeliveryData(customerId));
  }, [customerId]);

  return (
    <>
      <HeaderTabs customerId={customerId} />
      <Container className={styles.trackOrderContainer}>
        <Typography className={styles.title}>Track Order</Typography>
        <LoadingCircle isLoading={isLoading} />
        {deliveryDetails?.data?.length > 0 ? (
          <>
            {deliveryDetails?.data?.map((currentOrder: OrderDataType) => (
              <Orders key={currentOrder.orderId} orderData={currentOrder} />
            ))}
          </>
        ) : (
          <EmptyDataCard
            message={'No Ongoing Order Found!'}
            icon={<LocationDisabled sx={{ color: 'rgb(112, 112, 112)' }} />}
          />
        )}
        <FAQs faqs={postOrderFAQs} />
        {/* <HelpButton /> */}
      </Container>
    </>
  );
};

export default TrackOrder;
