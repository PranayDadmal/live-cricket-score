import React from 'react';
import {useState} from 'react';
import Box  from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabComponent() {
   const [value, setValue] = useState(0);
 
   const changeHandler = (e, value) => {
       setValue(value);
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
              <Tab label="ONE DAY" />
              <Tab label="TWENTY 20" />
              <Tab label="TEST" />
            </Tabs>

           <TabPanel index={0} value={value}  >
             one day matches
           </TabPanel>
           <TabPanel index={1} value={value} >
             twenty 20 matches
           </TabPanel>
           <TabPanel index={2} value={value} >
              test matches
           </TabPanel>
        </>
    )
}

export default TabComponent;
