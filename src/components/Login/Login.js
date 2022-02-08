import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import { GoogleLogin } from 'react-google-login'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const theme = createTheme();
export default function UserLogin() {
  const [alert, setAlert] = useState('')


  const Navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // let email=data.get('password')
    if (data.get('email') === '' || data.get('password') === '') {
      setAlert('Both fields are required')
    } else {

      let Data = {
        email: data.get('email'),
        password: data.get('password'),
      }
      axios.post('http://localhost:3001/api/login', Data).then((res) => {

        Navigate('/')
        console.log(res);
      }).catch((err) => {

        console.log(err.response.data.error);
        setAlert(err.response.data.error)
      })
    }


  };
  const onSuccess = (response) => {
    console.log(response);
  }
  const onFailure = (response) => {
    console.log(response);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={() => {
                setAlert('')
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={() => {
                setAlert('')
              }}
            />
            {alert && <Alert variant="outlined" severity="error">
              {alert}
            </Alert>}
            <Button
              type="submit"
              fullWidth
              color='info'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/signup' variant="body2">
                  Don't have a account --Signup
                </Link>
              </Grid>
            </Grid>
          </Box>
         
          <GoogleLogin
            clientId="950267631889-tashqh6igf51v8u7me8ipi50cf8mg46i.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

