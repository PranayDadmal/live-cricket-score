import {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import logo from '../images/vsimage.jpg';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import '../App.css'; 
import { getMatchDetails} from '../service/crickApi';




const Score = (props) => {
    const match = props.match;
    

    return (
        <Card style={{marginTop:20, width:700}}>
            <Box className="box-style" >
             <Typography >
                 {match["team-1"]} vs {match["team-2"]}
             </Typography>
             <Button  className="button-view-score" variant="contained" color="primary" >
               view score
             </Button>
           </Box>

           <CardContent >
              <Box className="date-update" >
                <Typography >{new Date(match.dateTimeGMT).toLocaleString()}</Typography>
                <Typography >{match.matchStarted ? "Match is started" : "Match isn't started yet"}</Typography>
              </Box>
              <Grid container justify="center" alignItems="center" >
                 <Typography variant="h5">{match["team-1"]}</Typography>
                 <img src={logo} alt="vs" style={{height:70,width:70}} />
                 <Typography variant="h5" >{match["team-2"]}</Typography>
              </Grid>
           </CardContent>
        </Card>
    )
}

export default Score;