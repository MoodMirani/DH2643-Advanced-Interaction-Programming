import React from "react";
import './navBar.scss'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Button from "../button/Button";



export default function NavBar() {
    const firstName = useAppSelector((state) => state.user.FirstName)
    const lastName = useAppSelector((state) => state.user.LastName)




    return (
        <div>
        <div className="navBar">
            <div className="navBarHeader">
                <Typography variant="h4" align="center" style={{paddingTop:30}}>
                    {"Hello, " + firstName + "!"}
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
            <Typography variant="h5" align="center" style={{marginTop: 10}}>{firstName + " " + lastName}</Typography>
            </div>
            
            <div className="profileButtons">

                        <Button buttonName="Profile"/>
                        <Button buttonName="Add Visit"/>
                        <Button buttonName="Patches"/>
                        <Button buttonName="Drinks"/>
                        <Button buttonName="Pub Map"/>
                        <Button buttonName="Login"/>
                        <Button buttonName="Sign Up"/>
             
                
            </div>
        </div>
        </div>
    )    
}