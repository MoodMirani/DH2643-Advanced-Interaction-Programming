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
        <div>
        <div className="navBar">
            <div className="navBarHeader">
                <Typography variant="h4" align="center" style={{paddingTop:30}}>
                    Hello, Mahmoud!
                </Typography>
            </div>

            <div className="avatar">
            <Avatar
                alt="My Profile"
                src="https://i.postimg.cc/LsYtbkpj/Appa-flying.webp"
                sx={{ width: 150, height: 150 }}
                />
            </div>
            <div className="nameHeader">
            <Typography variant="h5" align="center" style={{marginTop: 10}}>Mahmoud</Typography>
            </div>
            
            <div className="profileButtons">
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid xs={6}>
                    <Box textAlign='center'>
                        <Button variant="contained"  component={Link} to={'/profile'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10}} >Profile</Button>
                    </Box>
                    </Grid>
                    <Grid xs={6}>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/AddVisit'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Add Visit</Button>
                    </Box>
                    </Grid>
                    <Grid xs={6}>
                    <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyPatches'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Patches</Button>
                    </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyDrinks'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Drinks</Button>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/MyVisitedPubs'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Visited Pubs</Button>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/Map'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Pub Map</Button>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/LoginScreen'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Login</Button>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box textAlign='center'>
                        <Button variant="contained" component={Link} to={'/SignUp'} style={{backgroundColor: "#EF6767", width:"150px", marginTop:10, marginBottom:10}}>Sign Up</Button>
                        </Box>
                    </Grid> 
                </Grid>
            </div>
            <div className="mapButton">
               
            </div>
        </div>
        </div>
    )    
}