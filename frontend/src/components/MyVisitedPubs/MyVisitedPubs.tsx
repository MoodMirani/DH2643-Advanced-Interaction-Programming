import { Typography } from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function MyVisitedPubs() {
    return (
        <div>
        <div className="visitedPubHeader">
            <Typography variant="h2" align="left" style={{marginTop: '25px', marginBottom: '25px'}}>My Visited Pubs</Typography>
        </div>
            <Grid spacing={4}>
                <Grid xs={4}>
                    <Card sx={{width: "auto", height: 50}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>Media</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{width: "auto", height: 50}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>Data</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{width: "auto", height: 50}} style={{backgroundColor: "#EF6767"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>OPEN</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
       
    )
}