import Address from './Address/Address';
import { List, ListItem } from '@mui/material';
import styles from './Addresses.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchAllAddressesApi } from '../../actions/CustomerActions';
import { AddressData } from '../../types/CommonType';

interface AddressesProps {
  customerId: string;
}

const Addresses = (props: AddressesProps) => {
  const dispatch = useAppDispatch();
  const { addressData } = useAppSelector(state => state.user);

  useEffect(() => {
    if (!addressData?.data) {
      dispatch(fetchAllAddressesApi(props?.customerId));
    }
  }, []);

  return (
    <List disablePadding className={styles.addressList}>
      {addressData?.data?.map((address: AddressData) => (
        <ListItem key={address.id}>
          <Address address={address} />
        </ListItem>
      ))}
    </List>
  );
};

export default Addresses;
