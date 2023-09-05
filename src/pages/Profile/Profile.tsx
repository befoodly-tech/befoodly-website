import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import styles from './Profile.module.css';
import Addresses from '../../components/Addresses/Addresses';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { editCustomerDataApi, fetchAllAddressesApi } from '../../actions/CustomerActions';
import { useEffect, useState } from 'react';
import { isValidEmail, isValueNotChanged } from '../../utils/Validation';
import { CustomerFieldValues } from '../../types/ApiActions';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { customerData, addressData } = useAppSelector(state => state.user);
  const [profileData, setProfileData] = useState<CustomerFieldValues>({ name: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (customerData?.data) {
      dispatch(fetchAllAddressesApi(customerData?.data?.referenceId));
      setProfileData({ name: customerData?.data?.name, email: customerData?.data?.email });
    }
    if (customerData?.errorMessage) {
      setErrorMessage(customerData?.errorMessage);
    }
  }, [customerData]);

  const handleOnChangeForEmail = (data: string) => {
    setProfileData({ ...profileData, email: data });
    if (!data) {
      setErrorMessage('Email is mandatory for login!');
    } else {
      setErrorMessage('');
    }
  };

  const onProfileDataEdit = () => {
    if (isValidEmail(profileData?.email)) {
      const newName = !isValueNotChanged(customerData?.data?.name, profileData?.name)
        ? profileData?.name
        : undefined;
      const newEmail = !isValueNotChanged(customerData?.data?.email, profileData?.email)
        ? profileData?.email
        : undefined;

      dispatch(
        editCustomerDataApi({
          customerId: customerData?.data?.referenceId,
          body: { name: newName, email: newEmail }
        })
      );
    } else {
      setErrorMessage('Invalid Email entered!');
    }
  };

  return (
    <>
      <Box className={styles.profile}>
        <Box className={styles.myProfile}>
          <Typography className={styles.myText}>My</Typography>
          <Typography>&nbsp;</Typography>
          <Typography className={styles.profileText}>Profile</Typography>
        </Box>
        <Box className={styles.profileForm}>
          <Box className={styles.formSection}>
            <Typography className={styles.Info}>Personal Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box className={styles.inputBoxes}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextField
                  fullWidth
                  required
                  type="text"
                  placeholder="Enter Name"
                  value={profileData?.name}
                  error={!profileData?.name}
                  helperText={!profileData?.name ? 'Name is Required' : ''}
                  onChange={e => setProfileData({ ...profileData, name: e.target.value })}
                />
              </Box>
              <Box className={styles.inputBoxes}>
                <InputLabel>Email (Required for login)</InputLabel>
                <TextField
                  fullWidth
                  required
                  placeholder="Enter Email"
                  value={profileData?.email}
                  type="email"
                  disabled={!!customerData?.data?.email}
                  error={!!errorMessage}
                  helperText={errorMessage}
                  onChange={e => handleOnChangeForEmail(e.target.value)}
                />
              </Box>
              <Box className={styles.inputBoxes}>
                <InputLabel>Phone Number</InputLabel>
                <TextField fullWidth type="tel" disabled value={customerData?.data?.phoneNumber} />
              </Box>
            </Box>
          </Box>
          <Button className={styles.saveButton} onClick={onProfileDataEdit}>
            Update
          </Button>
          <Box className={styles.formSection}>
            <Typography className={styles.Info}>Addresses</Typography>
            <Addresses
              addressData={addressData?.data}
              customerRefId={customerData?.data?.referenceId ?? ''}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
