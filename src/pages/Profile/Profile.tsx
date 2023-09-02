import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from './Profile.module.css';
import Footer from '../../components/Footer/Footer';
import Addresses from '../../components/Addresses/Addresses';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { editCustomerDataApi } from '../../actions/CustomerActions';

interface ProfileData {
  name: string;
  email: string;
  phoneNumber: string;
}

const Profile = () => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const form = useForm<ProfileData>({
    defaultValues: {
      name: state?.name,
      email: state?.email,
      phoneNumber: state?.phoneNumber
    }
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const onProfileSubmit = (data: ProfileData) => {
    dispatch(editCustomerDataApi({ customerId: state?.referenceId, body: data }));
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
                    placeholder={state?.name}
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
                  <InputLabel htmlFor="lastName">Email</InputLabel>
                  <TextField
                    fullWidth
                    placeholder={state?.email}
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
                  <InputLabel htmlFor="lastName">Phone Number</InputLabel>
                  <TextField fullWidth disabled placeholder={state?.phoneNumber}></TextField>
                </Box>
              </Box>
            </Box>
            <Button type="submit" className={styles.saveButton}>
              Save
            </Button>
          </form>
          <Box className={styles.formSection}>
            <Typography className={styles.Info}>Addresses</Typography>
            <Addresses customerId={state?.referenceId} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
