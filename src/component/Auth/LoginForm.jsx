import { Typography, TextField, Button, Link } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/userSlice'; // Import your login action
import { selectUser } from '../../store/userSlice'; // Import your user selector

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
});

const LoginForm = () => {
  
  const test = useSelector((state)=>state);

    
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleRegisterClick = () => {
    navigate('/account/register');
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      const {jwt} = await dispatch(loginUser(values)).unwrap(); // Dispatch the login action
      
      // Check if user data contains the JWT token
      if (jwt) {

        // Store JWT in localStorage
        localStorage.setItem('token', jwt);
      }
  
      resetForm();
      navigate('/'); // Navigate after successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, set an error state or display an error message to the user
    }
  };

  
  

  return (
    <div>
      <Typography variant='h5' className="text-center">
        Log In
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
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

            {/* Forgot Password Link */}
            <div style={{ textAlign: 'right', marginTop: '8px' }}>
              <Link
                component="button"
                variant="body2"
                onClick={handleForgotPasswordClick}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              style={{ marginTop: '16px' }}
            >
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </Button>

            {/* Register Button */}
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              style={{ marginTop: '8px' }}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      {/* Conditional rendering for Forgot Password */}
      {showForgotPassword && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Please enter your email address, and we will send you instructions to reset your password.
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Send Reset Instructions
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
