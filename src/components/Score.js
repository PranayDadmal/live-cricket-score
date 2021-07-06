import {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography'
import logo from '../images/vsimage.jpg';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import '../App.css'; 
import { getMatchDetails } from '../service/crickApi';



const Score = (props) => {
    const match = props.match;
    const [details,setDetails] = useState({});
    
    const displayScore = (e) => {
      e.preventDefault();
      getMatchDetails(match.unique_id).then(data => {
       setDetails(data);
       console.log(data);
      }).catch(error => console.log(error)); 
    }
  

    return (
        <Card className="card">
            <Box className="box-style" >
             <Typography >
                 {match["team-1"]} vs {match["team-2"]} 
             </Typography>
             <Button onClick={displayScore} className="button-view-score" variant="contained" color="primary" disabled={match.matchStarted ? false : true} style={{border:'1px solid #fff'}} >
               view score
             </Button>
           </Box>

           <CardContent className="card-area" >
              <Box className="date-update" >
                <Typography >{new Date(match.dateTimeGMT).toLocaleString()}</Typography>
                <Typography >{match.matchStarted ? "Match is started" : "Match isn't started yet"}</Typography>
              </Box>
              <Grid container justify="center" alignItems="center" >
                 <Typography className="team-color">{match["team-1"]} </Typography>
                 <img src={logo} alt="vs" style={{height:70,width:70}} />
                 <Typography className="team-color" >{match["team-2"]}</Typography>
              </Grid>
           </CardContent>
           <CardActions className="card-area">
             <Grid container justify="center" style={{display:'block'}}>
               {/* <Typography>{details.score}</Typography> */}
               <Typography style={{color:'green'}}>{match.matchStarted ? 'Live' : ''}</Typography>
               <Typography color="secondary">No in person attendence</Typography>
             </Grid>
           </CardActions> 
                 
        </Card>
    )
}

export default Score;