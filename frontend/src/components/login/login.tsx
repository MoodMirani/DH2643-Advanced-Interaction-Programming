import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Icon from '@mui/material/Icon';
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";
import './login.scss';
import {useSelector, useDispatch} from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { setFirstName, setEmail, setPassword } from '../../redux/UserSlice';
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";



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
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="paper">
      <Typography component="h1" variant="h2" style={{marginBottom: "10px", textAlign: "center"}}>
        Log in
      </Typography>
      <form className="form" noValidate>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setInputemail(e.target.value)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setInputpassword(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
          style={{marginTop: "15px", marginBottom: "15px"}}
          >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/SignUp">
                      {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
};

export default LoginScreen;