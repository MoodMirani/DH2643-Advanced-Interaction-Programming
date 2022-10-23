import React from "react";
import Button from '@mui/material/Button'
import './navBar.scss'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


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
            <div className="profileButton">
            <Box textAlign='center'>
                <Button variant="contained" component={Link} to={'/profile'} style={{backgroundColor: "#EF6767"}}>My Profile</Button>
            </Box>
            <Box textAlign='center'>
                <Button variant="contained" component={Link} to={'/AddVisit'} style={{backgroundColor: "#EF6767"}}>Add Visit</Button>
            </Box>
            <Box textAlign='center'>
                <Button variant="contained" component={Link} to={'/MyPatches'} style={{backgroundColor: "#EF6767"}}>My Patches</Button>
            </Box>
            <Box textAlign='center'>
                <Button variant="contained" component={Link} to={'/MyDrinks'} style={{backgroundColor: "#EF6767"}}>My Drinks</Button>
            </Box>
            <Box textAlign='center'>
                <Button variant="contained" component={Link} to={'/MyVisitedPubs'} style={{backgroundColor: "#EF6767"}}>My Visited Pubs</Button>
            </Box>
            <Box textAlign='center'>
                    <Button variant="contained" style={{backgroundColor: "#EF6767"}}>Pub Map</Button>
                </Box>
            </div>

            <div className="mapButton">
               
            </div>
        </div>
    )    
}