import React from "react";
import Button from '@mui/material/Button'
import './navBar.scss'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';

export default function NavBar() {

    return (
        <div className="navBar">
            <div className="navBarHeader">
                <Typography variant="h4" align="center">
                    My Profile
                </Typography>
            </div>

            <div className="avatar">
            <Avatar
                alt="My Profile"
                src="https://i.postimg.cc/LsYtbkpj/Appa-flying.webp"
                sx={{ width: 150, height: 150 }}
                />
            </div>
            <div className="profileButtons">
                <Grid container spacing={3} direction="column">
                    <Box textAlign='center'>
                        <Button variant="contained"  component={Link} to={'/profile'} style={{backgroundColor: "#EF6767", width:"150px", marginBottom:10}} >My Profile</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/AddVisit'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Add Visit</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyPatches'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>My Patches</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyDrinks'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>My Drinks</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyVisitedPubs'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>My Visited Pubs</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/Map'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Pub Map</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/LoginScreen'} style={{backgroundColor: "#EF6767"}}>Login Screen</Button>
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/SignUp'} style={{backgroundColor: "#EF6767"}}>Sign Up</Button>
                    </Box>
                    
                </Grid>
            </div>
            <div className="mapButton">
               
            </div>
        </div>
    )    
}