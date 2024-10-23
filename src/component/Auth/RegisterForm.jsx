import { Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { registerUser } from '../../store/userSlice'; // Import the register action

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
  role: "CUSTOMER"  // Default role
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required'),
  lastName: Yup.string()
    .required('Last name is required'),
  username: Yup.string()
    .min(4, 'Username must be at least 4 characters long')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  role: Yup.string()
    .required('Role is required')
});

const RegisterForm = () => {
  const dispatch = useDispatch(); // For dispatching the registration action
  const navigate = useNavigate(); // Use navigate for redirection

  // Access registration status and error from Redux store
  const { loading, error ,user } = useSelector((state) => state.auth);
  

  const handleLoginClick = () => {
    navigate('/account/login'); // Redirect to the login page
  };

  const onSubmit = (values, { resetForm }) => {
    // Dispatch the registerUser action
    dispatch(registerUser({
      firstName: values.firstName,
      lastName: values.lastName,
      fullName:values.firstName+values.lastName+"",
      email: values.username,
      password: values.password,
      role: values.role
    }));

    resetForm();
  };

  return (
    <div>
      <Typography variant='h5' className="text-center">
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div>
              <Field
                as={TextField}
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <Field
                as={TextField}
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
            </div>

            {/* Select for Role */}
            <Box sx={{ minWidth: 120, marginTop: '16px' }}>
              <FormControl fullWidth>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  value={values.role}
                  label="Role"
                  onChange={(event) => setFieldValue('role', event.target.value)}
                >
                  <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
                  <MenuItem value={"ADMIN"}>Admin</MenuItem>
                  <MenuItem value={"RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ErrorMessage name="role" component="div" style={{ color: 'red', marginTop: '8px' }} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
              style={{ marginTop: '16px' }}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>

            {/* Show error message if registration failed */}
            {error && <Typography color="error" style={{ marginTop: '8px' }}>{error}</Typography>}

            {/* Button to go to Login Page */}
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              style={{ marginTop: '16px' }}
              onClick={handleLoginClick}
            >
              Already have an account? Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
