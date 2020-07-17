import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormModal from '../../molecules/form-modal';
import validations from '../../../utils/form-validation';
import Form from '../../molecules/form';
import Box from '@material-ui/core/Box';
import SelectCountries from '../../fields/select-countries';

const RegionForm = ({
  mode = 'add',
  name = 'Dialog',
  handleAdd,
  handleUpdate,
}) => {
  const { handleSubmit, control, errors, register } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <FormModal mode={mode} name={name} open={true}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box p={1}>
            <Controller
              as={TextField}
              name="name"
              label="name"
              variant="outlined"
              fullWidth
              control={control}
              error={errors.name}
              helperText={errors.name && errors.name.message}
              rules={{
                required: 'Required'
              }}
            />
          </Box>
          <Box p={1}>
            <Controller
              as={TextField}
              name="nativeName"
              label="nativeName"
              variant="outlined"
              fullWidth
              control={control}
              error={errors.nativeName}
              helperText={errors.nativeName && errors.nativeName.message}
              rules={{
                required: 'Required'
              }}
            />
          </Box>
          <Box p={1}>
            <Controller
              as={TextField}
              name="code"
              label="code"
              variant="outlined"
              fullWidth
              control={control}
              error={errors.code}
              helperText={errors.code && errors.code.message}
              rules={{
                required: 'Required'
              }}
            />
          </Box>
          <Box p={1}>
            <Controller
              as={SelectCountries}
              name="country"
              label="country"
              variant="outlined"
              fullWidth
              control={control}
              error={errors.country}
              helperText={errors.country && errors.country.message}
              rules={{
                required: 'Required',
              }}
            />
          </Box>
          <Box p={1}>
            <Controller
              as={TextField}
              name="coords"
              label="coords"
              variant="outlined"
              fullWidth
              control={control}
              error={errors.coords}
              helperText={errors.coords && errors.coords.message}
              rules={{
                required: 'Required',
                pattern: {
                  value: new RegExp(validations.coords),
                  message: 'Not a valid coords',
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </Form>
    </FormModal>
  );
};

export default RegionForm;
