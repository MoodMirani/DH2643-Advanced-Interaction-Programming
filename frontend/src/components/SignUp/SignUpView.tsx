import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignUpView({
  setFirstNameCB,
  setLastNameCB,
  setInputemailCB,
  setInputpasswordCB,
  addUserCB,
}) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Typography
          component="h1"
          variant="h2"
          style={{ marginBottom: "10px", textAlign: "center" }}
        >
          Sign up
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setFirstNameCB(e.target.value)}
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
                onChange={(e) => setLastNameCB(e.target.value)}
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
                onChange={(e) => setInputemailCB(e.target.value)}
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
                onChange={(e) => setInputpasswordCB(e.target.value)}
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
            onClick={addUserCB}
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/SignUp">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUpView;
