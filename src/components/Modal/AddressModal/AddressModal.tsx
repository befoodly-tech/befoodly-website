import { Box, Button, InputLabel, Modal, TextField, Typography } from '@mui/material';
import styles from './AddressModal.module.css';
import { useForm } from 'react-hook-form';
import Cancle from '../../../ui/Icon/Cancle';
import { AddressData } from '../../../types/CommonType';
import { isValidPinCode } from '../../../utils/Validation';

interface AddressModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AddressData, customerId?: string) => void;
  address?: AddressData;
  heading?: string;
}

const AddressModal = (props: AddressModalProps) => {
  const form = useForm<AddressData>({
    defaultValues: {
      title: props?.address?.title,
      addressFirst: props?.address?.addressFirst,
      addressSecond: props?.address?.addressSecond,
      city: props?.address?.city,
      pinCode: props?.address?.pinCode,
      state: props?.address?.state
    }
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  function onFormSubmit(data: AddressData): void {
    props.onSubmit(data, props?.address?.customerReferenceId);
    props.onClose();
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
                {props?.heading} Address
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
                placeholder={props?.address?.title}
                fullWidth
                {...register('title', {
                  required: { value: true, message: 'Title is required' }
                })}
                error={!!errors?.title}
                helperText={errors?.title?.message}
              ></TextField>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel htmlFor="addressFirst" className={styles.inputLable}>
                First Line
              </InputLabel>
              <TextField
                fullWidth
                id="addressFirst"
                className={styles.inputTextField}
                placeholder={props?.address?.addressFirst}
                {...register('addressFirst', {
                  required: { value: true, message: 'Address is required' }
                })}
                error={!!errors?.addressFirst}
                helperText={errors?.addressFirst?.message}
              ></TextField>
            </Box>
            <Box className={styles.inputBoxes}>
              <InputLabel htmlFor="addressSecond" className={styles.inputLable}>
                Second Line (optional)
              </InputLabel>
              <TextField
                fullWidth
                id="addressSecond"
                className={styles.inputTextField}
                placeholder={props?.address?.addressSecond}
                {...register('addressSecond')}
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
                  placeholder={props?.address?.city}
                  {...register('city', {
                    value: 'Bangalore',
                    required: { value: true, message: 'City is required' }
                  })}
                  error={!!errors?.city}
                  helperText={errors?.city?.message}
                ></TextField>
              </Box>
              <Box className={styles.inputBoxes}>
                <InputLabel className={styles.inputLable} htmlFor="pinCode">
                  Pincode
                </InputLabel>
                <TextField
                  fullWidth
                  className={styles.inputTextField}
                  placeholder={props?.address?.pinCode}
                  {...register('pinCode', {
                    required: { value: true, message: 'Pincode is required' },
                    validate: v => isValidPinCode(v) || 'Pincode is Invalid'
                  })}
                  error={!!errors?.pinCode}
                  helperText={errors?.pinCode?.message}
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
                placeholder={props?.address?.state}
                {...register('state', {
                  value: 'Karnataka',
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
      </Box>
    </Modal>
  );
};

export default AddressModal;
