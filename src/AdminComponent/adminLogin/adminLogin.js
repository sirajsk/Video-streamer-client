import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const theme = createTheme();
export default function AdminLogin() {
  const [alert, setAlert] = useState(false)
  
  
  const Navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let Data = {
      email: data.get('email'),
      password: data.get('password'),
    }
    axios.post('http://localhost:3001/api/admin/login', Data).then((res) => {

      Navigate('/admin')
      console.log(res);
    }).catch((err) => {
      setAlert(true)
      console.log(err);
    })
  };

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
          <Typography component="h1" variant="h5">
            Admin Login
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
            />
            {alert && <Alert variant="outlined" severity="error">
              Somthing Went Wrong 
            </Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}