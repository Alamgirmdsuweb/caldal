import React from "react";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
// import MedicationIcon from '@mui/icons-material/Medication';


const  Data =()=>{

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);

  };
  const [on, setOff] = React.useState(true);

  const click = () => {
    setOff(!on);

  };
  
return(
    <Box>
        <List>
          {["Offers", "Food Aid", "Recipes"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{height:'20px'}}>
                
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Populer", "Flash sales","Personal Care"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{height:'20px'}}>
                
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider />

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>

        </ListItemIcon>
        
        <ListItemText primary=" Food"/>
        {open?<ExpandLess/> :<ExpandMore/>}


      </ListItemButton>
      <Collapse in ={open} timeout='auto' unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={click} sx={{ pl:3}}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary=" Food & Vegetables"/>
            {open?<ExpandLess/> :<ExpandMore/>}
            </ListItemButton>
            
        </List>
      </Collapse>

    
        <List component="div" disablepadding>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <Collapse in ={on} timeout='auto' unmountOnExit>
            <ListItemText primary=" Fresh vegetables" />
            </Collapse>
          </ListItemButton>

          <ListItemButton  sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
             <Collapse in ={on} timeout='auto' unmountOnExit>
            <ListItemText primary="Fresh Fruits" />
            </Collapse>
          </ListItemButton>
          
        </List>
     

    </Box>
)
}

export default Data;