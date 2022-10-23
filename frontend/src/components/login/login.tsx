import React, { useEffect, useState } from "react";
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
import {useSelector, useDispatch} from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { setFirstName, setEmail, setPassword } from '../../redux/UserSlice';


const LoginScreen = () => {
  const userObject = useAppSelector((state) => state.user.FirstName);
  const dispatch = useAppDispatch();

  const [inputemail, setInputemail] = useState('');
  const [inputpassword, setInputpassword] = useState('');


  dispatch(setEmail(inputemail))
  dispatch(setPassword(inputpassword))

  console.log(useAppSelector((state) => state.user.Email))
  console.log(useAppSelector((state) => state.user.Password))


  
  return (
    <Grid container className='signInGrid'>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className='paper'>
          <Typography component="h1" variant="h2">
            Sign in
          </Typography >
          <form className='form' noValidate autoComplete="off">
            <TextField
              onChange={(e) => setInputemail(e.target.value)}
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
              onChange={(e) => setInputpassword(e.target.value)}
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
