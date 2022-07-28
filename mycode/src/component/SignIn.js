import { Box } from '@mui/system';
// import React from 'react';
import React ,{useState} from 'react'
import Login from './login/Login';
import Signup from './login/Signup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function SignIn() {
// const SignInOutContainer =()=>{
//   const [value,setvalue]=useState(0)
//   const handleChange = (event,newvalue)=>{
//     setvalue(newvalue);
//   }
//   function tabPanel(props){
//     const {children,value,index,...other}=props;


//   }
// }

  return (
    
      // <Box sx={{border: "2px solid black",
      // boxSizing: "border-box", height:'45vh',width:'20%',marginLeft:'40%',marginTop:'10%'}}>
      //     <Box >
              

      //     </Box>

      // </Box>
      <Box>
        <Login/>
      </Box>
      // <Box>
      //   <Signup/>
      // </Box>
    
  );
}
