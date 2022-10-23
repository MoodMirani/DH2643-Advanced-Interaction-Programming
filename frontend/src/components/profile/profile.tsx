import React from 'react';
import "./Profile.scss"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Profile(){
    return (
        <div>
            <div>
            <Typography variant="h2" align="center" style={{marginTop: '25px', marginBottom: '25px'}}>My Profile</Typography>
            </div> 
            
        <div>
            <Grid container spacing={4} direction="column">
                <Grid xs={4}>
                    <div>
                        <Button>
                        <Card sx={{width: 600, height: 190}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 24 }} gutterBottom style={{color:"white"}}>
                        My Patches
                        </Typography>
                        <CardMedia style={{width: "auto", maxHeight: "200px"}}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/JhkkWzBD/patch.png"
                        alt="Patch"
                      />
                        </CardContent>
                        </Card>
                        </Button>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <div>
                        <Button>
                        <Card sx={{width: 600, height: 190}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 24 }} gutterBottom style={{color:"white"}}>
                            My Drinks
                        </Typography>
                        <CardMedia style={{width: "auto", maxHeight: "200px"}}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/FFwWZRXf/drink.png"
                        alt="Drink"
                        />
                        </CardContent>
                        </Card>
                        </Button>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <div>
                        <Button>
                        <Card sx={{width: 600, height: 190}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 24 }} gutterBottom style={{color:"white"}}>
                            My Visited Pubs
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={8}>
                            <Item style={{color:"#EF6767"}}>Media</Item>
                            </Grid>
                            <Grid xs={4}>
                            <Item style={{color:"#EF6767"}}>Data</Item>
                            </Grid>
                            <Grid xs={4}>
                            <Item style={{color:"#EF6767"}}>Open</Item>
                            </Grid>
                        </Grid>
                        </Box>
                        </CardContent>
                        </Card>
                        </Button>     
                    </div>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}