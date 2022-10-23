import React from 'react';
import "./addVisit.scss"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { Container, InputLabel,  CssBaseline, Input} from '@mui/material';


export default function AddVisit() {
    return (
        <div>
            <div className="addVisitHeader">
                <Typography variant="h2" align="left" style={{marginTop: '25px', marginBottom: '25px'}}>
                    Add Pub Visit
                </Typography>
            </div>

            <div>
            <Card>
                <CardContent>
                <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center"
            component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
                <Grid xs={4}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Pub Visited"
                    multiline
                    maxRows={4}
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Drink"
                    multiline
                    maxRows={4}
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Patch"
                    multiline
                    maxRows={4}
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Review"
                    multiline
                    maxRows={10}
                    />
                </Grid>

                <div className="addVisitButton">
                    <Button variant="contained" style={{backgroundColor: "#EF6767"}}>Add</Button>
                </div>
                
        </Grid>
                </CardContent>
            </Card>
            
        </div>
        </div>
    )
}