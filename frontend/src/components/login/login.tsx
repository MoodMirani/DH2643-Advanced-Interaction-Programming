import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Icon from '@mui/material/Icon';
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";
import './login.scss';



const LoginScreen = () => {
  
  return (
    <Grid container component="main" className='signInGrid'>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className='paper'>
          <Typography component="h1" variant="h2">
            Sign in
          </Typography >
          <form className='form' noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
        
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className='submit'
            >
              Sign In
            </Button>
            <Grid container>
                <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
