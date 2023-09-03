import { Box, Button, Divider, Typography } from '@mui/material';
import styles from './Address.module.css';
import AddressModal from '../../Modal/AddressModal/AddressModal';
import { useState } from 'react';
import { AddressData } from '../../../types/CommonType';
import { useAppDispatch } from '../../../store/hooks';
import { editAddressApi } from '../../../actions/CustomerActions';

interface AddressProp {
  address: AddressData;
}

const Address = (props: AddressProp) => {
  const { address } = props;
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  function handleOnClose(): void {
    setAddressModalOpen(false);
  }

  const onSubmitEditAddress = (data: AddressData) => {
    dispatch(
      editAddressApi({ customerId: address.customerReferenceId, body: data, title: address.title })
    );
  };

  return (
    <Box className={styles.addressBox}>
      <Box className={styles.address}>
        <Box>
          <Typography variant="h5" gutterBottom>
            {address?.title}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>
            {address?.addressFirst}, {address?.addressSecond}
          </Typography>
          <Typography>
            {address?.city}, {address?.pinCode}
          </Typography>
          <Typography>{address?.state}</Typography>
        </Box>
      </Box>
      <Box className={styles.addressBtnBox}>
        <Button className={styles.addressBtn} onClick={() => setAddressModalOpen(true)}>
          Edit Address
        </Button>
      </Box>
      <AddressModal
        open={addressModalOpen}
        onClose={handleOnClose}
        address={props?.address}
        onSubmit={onSubmitEditAddress}
      />
    </Box>
  );
};

export default Address;
