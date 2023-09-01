import Address, { AddressProp } from './Address/Address';
import { Box, List, ListItem } from '@mui/material';
import styles from './Addresses.module.css';

interface AddressesProps {
  addresses: AddressProp[];
}

const Addresses = (props: AddressesProps) => {
  return (
    <List disablePadding className={styles.addressList}>
      {props.addresses.map(address => (
        <ListItem key={address.title}>
          <Address {...address} />
        </ListItem>
      ))}
    </List>
  );
};

export default Addresses;
