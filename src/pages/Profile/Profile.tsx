import { Box, Button, Container, TextField, Typography, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from './Profile.module.css';
import Footer from '../../components/Footer/Footer';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Addresses from '../../components/Addresses/Addresses';
import { AddressProp } from '../../components/Addresses/Address/Address';
import { getCookie } from '../../utils/CookieHelper';
// https://pictures-befoodly.s3.ap-south-1.amazonaws.com/profile-pictures/Panda.png

const addresses: AddressProp[] = [
  {
    title: 'Home',
    firstLine: 'B4 009',
    secondLine: 'Genesis Apartment Bellandur',
    city: 'Banglore',
    pincode: '122002',
    state: 'Karnatak'
  },
  {
    title: 'Office',
    firstLine: 'B4 008',
    secondLine: 'Genesis Apartment Bellandur',
    city: 'Banglore',
    pincode: '122002',
    state: 'Karnatak'
  },
  {
    title: `Dad's Home`,
    firstLine: 'B4 010',
    secondLine: 'Genesis Apartment Bellandur',
    city: 'Banglore',
    pincode: '122002',
    state: 'Karnatak'
  }
];

export interface ProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  phoneNumber: string;
  address?: {
    firstLine: string;
    secondLine: string;
    pincode: string;
    state: string;
  };
}

const Profile = (props: ProfileProps) => {
  const form = useForm<ProfileProps>({
    defaultValues: {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phoneNumber: props.phoneNumber,
      profilePicture: props.profilePicture
    }
  });
  const { register, control, formState, handleSubmit } = form;
  const { errors } = formState;
  const sessionToken = getCookie('session');
  const customerId = getCookie('customerId');

  const onProfileSubmit = (data: ProfileProps) => {
    //console.log(data);
  };
  return (
    <>
      <NavbarApp customerId={customerId} session={sessionToken} />
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
              <Box className={styles.flexInput} sx={{ gap: 2 }}>
                <Box className={styles.inputBoxes}>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <TextField
                    id="firstName"
                    placeholder={props.firstName}
                    error={!!errors.firstName?.message}
                    helperText={errors.firstName?.message}
                    type="text"
                    {...register('firstName', {
                      required: {
                        value: true,
                        message: 'First Name is required'
                      }
                    })}
                  ></TextField>
                </Box>
                <Box className={styles.inputBoxes}>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <TextField
                    id="lastName"
                    type="text"
                    placeholder={props.lastName}
                    {...register('lastName')}
                  ></TextField>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box className={styles.inputBoxes}>
                  <InputLabel htmlFor="lastName">Email</InputLabel>
                  <TextField
                    fullWidth
                    placeholder={props.email}
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
                  <TextField fullWidth disabled placeholder={props.phoneNumber}></TextField>
                </Box>
              </Box>
            </Box>
            <Button type="submit" className={styles.saveButton}>
              Save
            </Button>
          </form>
          <Box className={styles.formSection}>
            <Typography className={styles.Info}>Addresses</Typography>
            <Addresses addresses={addresses} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
