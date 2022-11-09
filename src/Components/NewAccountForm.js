import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { FormProvider, useForm } from 'react-hook-form';
// @mui
import { Stack, IconButton, InputAdornment, Typography, MenuItem, formControlClasses, TextField, InputLabel, Select, FormControl, Button, Switch, FormControlLabel, Box } from '@mui/material';
// components
import * as React from 'react';
// New form Kiet
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, accountsSelector, addAnAccount } from "../store/slices/accountSlice";

// ----------------------------------------------------------------------

export default function NewAccountForm({ onClose, reloadData }) {

  const navigate = useNavigate();

  const [useSwitchButton, setUseSwitchButton] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  const customeInput = {
    bgcolor: "#444",
    color: "#ffffff",
    boxShadow: "0px 13px 23px -13px rgba(0,0,0,0.5)",
    bgcolor: "transparent",
    input: { color: 'white' },
    "& .MuiInputLabel-root": { color: 'white', borderColor: "white" },//styles the label
    "& .MuiInputLabel-root:hover": { color: 'white', borderColor: "white" },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '10px' },
      '&:hover $notchedOutline': {
        borderColor: 'white',
        color: 'white'
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": { color: 'white', borderColor: "white" },
      '&:hover $notchedOutline': {
        borderColor: 'white',
        color: 'white'
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": { color: 'white', borderColor: "white" },
      '&:hover $notchedOutline': {
        borderColor: 'white',
        color: 'white'
      },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: 'white', borderColor: "white" },
  };

  const defaultValues = {
    title: 'Mùa thu',
    description: 'Mùa thu',
    email: 'Mùa thu',
    password: 'Mùa thu',
  };

  const styles = theme => ({
    multilineColor: {
      color: 'red'
    }
  });

  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/blog', { replace: true });
  };

  function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }

  function isValid(string) {
    var re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g // regex here
    return re.test(removeAscent(string))
  }

  const validate = values => {
    const errors = {};
    const formatedName = values.name;
    // console.log(isValid(formatedName.replaceAll(/\s/g, '')));
    // console.log(formik.errors.name);
    // console.log(formik.touched.name);

    if (formik.touched.name && formik.touched.email && formik.touched.phone 
      && formik.touched.program && formik.touched.message
      && formik.errors.name === undefined && formik.errors.email === undefined && formik.errors.phone === undefined 
      && formik.errors.program === undefined && formik.errors.message === undefined) {
      setUseSwitchButton(true);
      console.log('Dung switch đc rồi');
    }

    // Start date must be from today and before end_date at least 7 days ago
    if (!formatedName.replaceAll(/\s/g, '')) {
      errors.name = 'Fullname required';
    } else if (!isValid(formatedName.replaceAll(/\s/g, ''))) {
      errors.name = 'Please enter valid name';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      "name": '',
      "email": '',
      "phone": '',
      "birthday": moment().format('yyyy-MM-DD'),
      "program": '0',
      "message": "",
      "agree": false,
      "cover": "",
    },
    // validate,
    validationSchema: Yup.object().shape({
      name: Yup
        .string()
        .max(40, () => 'Max length of person name is 40 characters')
        .required('Full name required'),
      email: Yup
        .string()
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter valid email')
        .max(300, () => 'Max length of person email is 300 characters')
        .required('Email required'),
      phone: Yup
        .string()
        .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, 'Please enter valid phone number')
        .max(10, () => 'Max length of phone number is 10 numbers')
        .required('Phone number required'),
      message: Yup
        .string()
        .min(10, () => 'Min length of message is 10 characters')
        .max(512, () => 'Max length of message is 512 characters')
        .required('Message required'),
      program: Yup
        .number()
        .min(1, () => 'Must choose your major')
    }),
    validate,
    onSubmit: values => {
      dispatch(addAnAccount(values));
      reloadData();
      onClose();
      console.log('Add account successfully');
    },
  });

  return (

    <form onSubmit={formik.handleSubmit}>
      <Stack sx={{
        color: "#ffffff",
        bgcolor: "transparent",
      }} spacing={3}>
        <Typography variant="h3"> Create Account </Typography>
        <Box display={'flex'}>
          <TextField
            sx={{
              ...customeInput,
              mr: '10px',
              width: '50%',
            }}
            variant="outlined"
            name="name"
            label="Full name"
            id="name"
            type="name"
            color=''
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            sx={{
              ...customeInput,
              width: '50%',
            }}
            variant="outlined"
            name="email"
            label="Email"
            id="email"
            type="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>

        <Box display={'flex'}>
          <TextField
            sx={{
              ...customeInput,
              mr: '10px',
              width: '50%',
            }}
            name="phone"
            label="Phone"
            id="phone"
            type="phone"
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />

          <TextField
            sx={{
              ...customeInput,
              width: '50%',
            }}
            label="Birthday"
            variant="outlined"
            fullWidth
            title="birthday"
            id='birthday'
            type="date"
            value={formik.values.birthday}
            name="birthday"
            validate
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.birthday && Boolean(formik.errors.birthday)}
            helperText={formik.touched.birthday && formik.errors.birthday}
          />
        </Box>

        <Box display={'flex'}>
          <FormControl
            sx={{
              ...customeInput,
              mr: '10px',
              width: '50%',
            }}
            variant="outlined">
            <InputLabel
              id="program">Major</InputLabel>
            <Select
              labelId="program"
              id="program"
              name='program'
              value={formik.values.program}
              label="Major"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.program && Boolean(formik.errors.program)}
              helperText={formik.touched.program && formik.errors.program}
            >
              <MenuItem value={0}>
                <em>Please select</em>
              </MenuItem>
              <MenuItem value={1}>Software Engineering</MenuItem>
              <MenuItem value={2}>Information System</MenuItem>
              <MenuItem value={3}>Information Assurance</MenuItem>
              <MenuItem value={4}>Internet of Things</MenuItem>
              <MenuItem value={5}>Artificial Intelligence</MenuItem>
              <MenuItem value={6}>Digital Art & Design</MenuItem>

            </Select>
          </FormControl>

          <TextField
            sx={{
              ...customeInput,
              width: '50%',
            }}
            variant="outlined"
            name="cover"
            label="Cover"
            id="cover"
            type="cover"
            value={formik.values.cover}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.cover && Boolean(formik.errors.cover)}
            helperText={formik.touched.cover && formik.errors.cover}
          />
        </Box>

        <TextField
          sx={customeInput}
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          title="message"
          id='message'
          // type="text"
          onBlur={formik.handleBlur}
          value={formik.values.message}
          name="message"
          validate
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        {useSwitchButton && (<FormControlLabel
          control={<Switch />}
          label="Agree to terms and conditions."
          name='agree'
          id='agree'
          value={formik.values.agree}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          validate
          error={formik.touched.agree && Boolean(formik.errors.agree)}
          helperText={formik.touched.agree && formik.errors.agree}
        />)}
        {useSwitchButton && formik.values.agree === true && (<Button
          // sx={{ '-webkit-filter': 'blur(8px)', }}
          // disabled
          fullWidth size="large" type="submit" variant="contained">
          Create
        </Button>)}
      </Stack>
    </form>
  );
}
