import React from 'react';
import "./profile.scss"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';

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
                        <Grid>
                        <Card sx={{width: 100, height: 50}}>
                            <div className="pubName">
                                <Typography style={{color:"#EF6767"}}>Media</Typography>
                            </div>
                        </Card>
                        <Card sx={{width: 100, height: 50}}>
                            <div className="pubName">
                                <Typography style={{color:"#EF6767"}}>Data</Typography>
                            </div>
                        </Card>
                        </Grid>
                        </CardContent>
                        </Card>
                        </Button>     
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className="addButton">
            <Box textAlign='right'>
                 <Button variant="contained" style={{backgroundColor: "#EF6767"}}>Add Pub Visit</Button>
            </Box>    
        </div>
        </div>
    )
}