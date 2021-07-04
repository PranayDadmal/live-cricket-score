 import React from 'react';
 import AppBar from "@material-ui/core/AppBar";
 import ToolBar from "@material-ui/core/ToolBar"
 import Typography from "@material-ui/core/Typography";
 import SportsCricketIcon from '@material-ui/icons/SportsCricket';
 import green from "@material-ui/core/colors/green";
 import amber from "@material-ui/core/colors/amber";
import IconButton from '@material-ui/core/IconButton'


 export const Navbar = () => {
    return (
        <AppBar position="static">
           <ToolBar >
                <IconButton >
                  <SportsCricketIcon style={{color:amber[500]}}></SportsCricketIcon>
                </IconButton>
               <Typography variant="h6" style={{color:green[500]}}>
                   Live Cricket
               </Typography>
           </ToolBar>
        </AppBar>
    )
};

