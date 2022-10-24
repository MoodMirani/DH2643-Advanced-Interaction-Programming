import React from "react";
import { useEffect, useState } from "react";
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
import Container from "@mui/material/Container";
import axios from "axios";
import './login.scss';


export default function SignUp() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [inputemail, setInputemail] = useState('');
  const [inputpassword, setInputpassword] = useState('');
  


  const addUser = () => axios.post("https://localhost:8080/api/auth/register", {
    first_name: firstname, 
    last_name: lastname, 
    password: inputemail, 
    email: inputpassword})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

  const print = () => {
    console.log(firstname)
    console.log(lastname)
    console.log(inputemail)
    console.log(inputpassword)
  }

  const storeUser = () => {

  }
  
  
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Typography component="h1" variant="h2" style={{marginBottom: "10px", textAlign: "center"}}>
          Sign up
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} >
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={storeUser}
            style={{marginTop: "15px", marginBottom: "15px"}}
            >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/SignUp">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
