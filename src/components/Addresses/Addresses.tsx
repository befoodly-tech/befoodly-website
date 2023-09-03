import Address from './Address/Address';
import { Button, List, ListItem } from '@mui/material';
import styles from './Addresses.module.css';
import { useAppDispatch } from '../../store/hooks';
import { useState } from 'react';
import { addAddressApi } from '../../actions/CustomerActions';
import { AddressData } from '../../types/CommonType';
import EmptyDataCard from '../Common/EmptyDataCard';
import { LocationOff } from '@mui/icons-material';
import AddressModal from '../Modal/AddressModal/AddressModal';

interface AddressesProps {
  addressData: AddressData[];
}

const Addresses = ({ addressData }: AddressesProps) => {
  const dispatch = useAppDispatch();
  const [openAddAddressModal, setOpenAddAddressModal] = useState(false);

  const handleAddAddress = () => {
    setOpenAddAddressModal(true);
  };

  const onSubmitAddAddress = (data: AddressData, customerId?: string) => {
    dispatch(addAddressApi({ customerId: customerId ?? '', body: data }));
  };

  return (
    <List disablePadding className={styles.addressList}>
      {addressData?.map((address: AddressData) => (
        <ListItem key={address.id}>
          <Address address={address} />
        </ListItem>
      ))}
      {!addressData && (
        <EmptyDataCard
          message="No Address Added Yet!"
          icon={<LocationOff sx={{ color: 'rgb(112, 112, 112)' }} />}
        />
      )}
      <Button type="button" className={styles.addAddressBtn} onClick={handleAddAddress}>
        Add Address
      </Button>
      <AddressModal
        open={openAddAddressModal}
        onClose={() => setOpenAddAddressModal(false)}
        onSubmit={onSubmitAddAddress}
      />
    </List>
  );
};

export default Addresses;
