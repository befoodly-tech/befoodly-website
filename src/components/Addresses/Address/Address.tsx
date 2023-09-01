import { Box, Button, Divider, Typography } from '@mui/material';
import styles from './Address.module.css';
import AddressModal from '../../Modal/AddressModal/AddressModal';
import { useState } from 'react';

export interface AddressProp {
  title: string;
  firstLine: string;
  secondLine?: string;
  city: string;
  pincode: string;
  state: string;
}

const Address = (props: AddressProp) => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);

  function handleOnClose(): void {
    setAddressModalOpen(false);
  }

  return (
    <Box className={styles.addressBox}>
      <Box className={styles.address}>
        <Box>
          <Typography variant="h5" gutterBottom>
            {props.title}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>
            {props.firstLine}, {props.secondLine}
          </Typography>
          <Typography>
            {props.city}, {props.pincode}
          </Typography>
          <Typography>{props.state}</Typography>
        </Box>
      </Box>
      <Box className={styles.addressBtnBox}>
        <Button className={styles.addressBtn} onClick={() => setAddressModalOpen(true)}>
          Edit Address
        </Button>
      </Box>
      <AddressModal open={addressModalOpen} onClose={handleOnClose} address={props} />
    </Box>
  );
};

export default Address;
