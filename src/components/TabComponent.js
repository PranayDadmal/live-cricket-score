import React from 'react';
import {useState, useEffect} from 'react';
import Box  from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {getMatches} from '../service/crickApi';
import Score from './Score';




function TabComponent() {
   const [value, setValue] = useState(0);
   const [matches, setMatches] = useState([]);

   useEffect(() => {
     getMatches().then(data => {
          console.log(data);
          setMatches(data.matches);
          console.log(data.matches);
     }).catch(error => {
       console.log(error);
       alert("something went wrong!!! Please check your internet connection");
     });
   },[])
 
   const changeHandler = (e, value) => {
       setValue(value);
   }
 
   const getContent = (format) => {
     return (
       matches.map(match => {
         return (
           <>
             {match.type === format ? 
             <Box display="flex" justifyContent="center" alignItems="center">
               <Score key={match.unique_id} match={match}/> 
             </Box>
             : "" }
           </>
         )
       })
     )
   }
   const TabPanel = (props) => {
     return (
       <div>
       { (props.value===props.index) && (
          <Box>
              <Typography >{props.children}</Typography>
          </Box>
       )}
       </div>
     )
   }

    return (
        <>
            <Tabs value={value} onChange={changeHandler} indicatorColor="primary"  >
              <Tab label="First Class" />
              <Tab label="ODI" />
              <Tab label="TWENTY 20" />
              <Tab label="TEST" />
            </Tabs>

           <TabPanel index={0} value={value}  >
             {getContent('First-class')}
           </TabPanel>
           <TabPanel index={1} value={value} >
             {getContent('ODI')}
           </TabPanel>
           <TabPanel index={2} value={value} >
             {getContent('Twenty20')}
           </TabPanel>
           <TabPanel index={3} value={value} >
             {getContent('Tests')} 
           </TabPanel>
           <Typography style={{margin:'20px'}} color="initial">No more matches....</Typography>
        </>
    )
}

export default TabComponent;
