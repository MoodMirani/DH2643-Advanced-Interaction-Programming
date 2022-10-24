import React from "react";
import { useEffect, useState } from "react";
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
import Container from "@mui/material/Container";
import axios from "axios";
import './SignUp.scss';
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setFirstName, setLastName, setEmail, setPassword } from "../../redux/UserSlice";

export default function SignUp() {
  const [inputfirstname, setInputfirstname] = useState('');
  const [inputlastname, setInputlastname] = useState('');
  const [inputemail, setInputemail] = useState('');
  const [inputpassword, setInputpassword] = useState('');
  const dispatch = useAppDispatch();

  


  const addUser = () => axios.post("https://localhost:8080/api/auth/register", {
    first_name: inputfirstname, 
    last_name: inputlastname, 
    password: inputemail, 
    email: inputpassword})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

  const print = () => {
    console.log(inputfirstname)
    console.log(inputlastname)
    console.log(inputemail)
    console.log(inputpassword)
  }

  const storeUser = () => {
    dispatch(setFirstName(inputfirstname))
    dispatch(setLastName(inputlastname))
    dispatch(setEmail(inputemail))
    dispatch(setPassword(inputpassword))
  }
  
  
  

  return (
    <div className="signInContainer">
    <Container component="main" maxWidth="xs" style={{marginTop: "100px"}}>
      <CssBaseline />
      <div className="paper" style={{backgroundColor: "#ffffff", borderRadius: "15px", padding: "15px"}}>
        <Typography component="h1" variant="h2" style={{marginBottom: "10px", textAlign: "center"}}>
          Sign up
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} >
              <TextField
                onChange={(e) => setInputfirstname(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setInputlastname(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
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
          <Link to="/profile">

          </Link>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={storeUser}
            style={{marginTop: "15px", marginBottom: "15px"}}
            component={Link}
            to={'/profile'}
            >
            
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/SignUp">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
    </div>
  );
}
