import React from "react";
import Button from '@mui/material/Button'
import './navBar.scss'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';


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
                <Button variant="contained" style={{backgroundColor: "#EF6767"}}>My Profile</Button>
            </Box>
            </div>
            <div className="mapButton">
                <Box textAlign='center'>
                    <Button variant="contained" style={{backgroundColor: "#EF6767"}}>Pub Map</Button>
                </Box>
            </div>
        </div>
    )    
}