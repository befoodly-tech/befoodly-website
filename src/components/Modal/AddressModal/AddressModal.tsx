import { Box, Button, InputLabel, Modal, TextField, Typography } from '@mui/material';
import styles from './AddressModal.module.css';
import { useForm } from 'react-hook-form';
import { AddressProp } from '../../Addresses/Address/Address';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import Cancle from '../../../ui/Icon/Cancle';

interface AddressModalProps {
  open: boolean;
  onClose: () => void;
  address: AddressProp;
}

const AddressModal = (props: AddressModalProps) => {
  const form = useForm<AddressProp>({
    defaultValues: {
      title: props.address.title,
      firstLine: props.address.firstLine,
      secondLine: props.address.secondLine,
      city: props.address.city,
      pincode: props.address.pincode,
      state: props.address.state
    }
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  function onFormSubmit(data: AddressProp): void {
    //console.log(data);
  }

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="address-modal-title"
      aria-describedby="address-modal-description"
    >
      <Box id="address-modal-title" className={styles.addressModal}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box className={styles.formSection}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" className={styles.addressLabel}>
                Address
              </Typography>
              <Box>
                <Button startIcon={<Cancle />} onClick={props.onClose} />
              </Box>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel className={styles.inputLable} htmlFor="title">
                Title
              </InputLabel>
              <TextField
                id="title"
                className={styles.inputTextField}
                placeholder={props.address?.title}
                fullWidth
                {...register('title', {
                  required: { value: true, message: 'Title is required' }
                })}
                error={!!errors?.firstLine}
                helperText={errors?.firstLine?.message}
              ></TextField>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel htmlFor="firstLine" className={styles.inputLable}>
                First Line
              </InputLabel>
              <TextField
                fullWidth
                id="firstLine"
                className={styles.inputTextField}
                placeholder={props.address?.firstLine}
                {...register('firstLine', {
                  required: { value: true, message: 'Address is required' }
                })}
                error={!!errors?.firstLine}
                helperText={errors?.firstLine?.message}
              ></TextField>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel htmlFor="secondLine" className={styles.inputLable}>
                Second Line
              </InputLabel>
              <TextField
                fullWidth
                id="secondLine"
                className={styles.inputTextField}
                placeholder={props.address?.secondLine}
                {...register('secondLine')}
              ></TextField>
            </Box>
            <Box className={styles.flexInput} sx={{ gap: 2 }}>
              <Box className={styles.inputBoxes}>
                <InputLabel htmlFor="city" className={styles.inputLable}>
                  City
                </InputLabel>
                <TextField
                  fullWidth
                  disabled
                  className={styles.inputTextField}
                  placeholder={props.address?.city}
                  {...register('city', {
                    required: { value: true, message: 'City is required' }
                  })}
                  error={!!errors?.pincode}
                  helperText={errors?.pincode?.message}
                ></TextField>
              </Box>
              <Box className={styles.inputBoxes}>
                <InputLabel className={styles.inputLable} htmlFor="pincode">
                  Pincode
                </InputLabel>
                <TextField
                  fullWidth
                  disabled
                  className={styles.inputTextField}
                  placeholder={props.address?.pincode}
                  {...register('pincode', {
                    required: { value: true, message: 'Pincode is required' }
                  })}
                  error={!!errors?.pincode}
                  helperText={errors?.pincode?.message}
                ></TextField>
              </Box>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel className={styles.inputLable} htmlFor="state">
                State
              </InputLabel>
              <TextField
                fullWidth
                disabled
                className={styles.inputTextField}
                placeholder={props.address.state}
                {...register('state', {
                  required: { value: true, message: 'State is required' }
                })}
                error={!!errors?.state}
                helperText={errors?.state?.message}
              ></TextField>
            </Box>
          </Box>
          <Button type="submit" className={styles.saveAddressBtn}>
            Save Address
          </Button>
        </form>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default AddressModal;
