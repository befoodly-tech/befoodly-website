import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from './Profile.module.css';
import Addresses from '../../components/Addresses/Addresses';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { editCustomerDataApi, fetchAllAddressesApi } from '../../actions/CustomerActions';
import { useEffect } from 'react';

interface ProfileData {
  name: string;
  email: string;
  phoneNumber: string;
}

const Profile = () => {
  const dispatch = useAppDispatch();
  const { customerData, addressData } = useAppSelector(state => state.user);

  const form = useForm<ProfileData>({
    defaultValues: {
      name: customerData?.data?.name,
      email: customerData?.data?.email,
      phoneNumber: customerData?.data?.phoneNumber
    }
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  useEffect(() => {
    if (customerData?.data) {
      dispatch(fetchAllAddressesApi(customerData?.data?.referenceId));
    }
  }, [customerData]);

  const onProfileSubmit = (data: ProfileData) => {
    dispatch(
      editCustomerDataApi({
        customerId: customerData?.data?.referenceId,
        body: { name: data?.name }
      })
    );
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
          <form onSubmit={handleSubmit(onProfileSubmit)}>
            <Box className={styles.formSection}>
              <Typography className={styles.Info}>Personal Information</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box className={styles.inputBoxes}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <TextField
                    id="name"
                    placeholder={customerData?.data?.name}
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                    type="text"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is required'
                      }
                    })}
                  ></TextField>
                </Box>
                <Box className={styles.inputBoxes}>
                  <InputLabel>Email</InputLabel>
                  <TextField
                    fullWidth
                    placeholder={customerData?.data?.email}
                    type="email"
                    disabled
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required'
                      }
                    })}
                  ></TextField>
                </Box>
                <Box className={styles.inputBoxes}>
                  <InputLabel>Phone Number</InputLabel>
                  <TextField
                    fullWidth
                    type="tel"
                    disabled
                    placeholder={customerData?.data?.phoneNumber}
                    {...register('phoneNumber', {
                      required: {
                        value: true,
                        message: 'Phone Number is required'
                      }
                    })}
                  ></TextField>
                </Box>
              </Box>
            </Box>
            <Button type="submit" className={styles.saveButton}>
              Save
            </Button>
          </form>
          <Box className={styles.formSection}>
            <Typography className={styles.Info}>Addresses</Typography>
            <Addresses addressData={addressData?.data} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
