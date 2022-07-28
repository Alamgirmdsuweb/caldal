/* eslint-disable jsx-a11y/alt-text */
import SearchFrom from "@mui/icons-material/Search";
import { Button, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { social,Logo } from "../Data";
import TextField from "@mui/material/TextField";

 const Social = () => {
  return (
    <Box >
      
      <Box sx={{ height: "86px", display: "flex", justifyContent:'center' ,paddingTop:'32px'}}>
        <TextField
          id=" "
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    height="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/125px-Flag_of_Bangladesh.svg.png"
                  />{" "}
                  <Typography sx={{ fontSize: "15px", color: "black" ,marginLeft:'3px'}}>
                    +880
                  </Typography>
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{
            height: "56px",
            width: "100px",
            background: "#FF686E",
            color: "white",
            alignItems: "center",

            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Get app
        </Button>


      </Box>
      <Box>
        <Box sx={{display:'flex',justifyContent:'center',paddingLeft:'20px'}}>
          {Logo?.map((Item)=>(

            <Box
             component={"img"}
             src={Item.img}
             sx={{height:'8vh',cursor:'pointer',paddingTop:'4px',paddingLeft:'1px'}}


             >
</Box>
          ))}

        </Box>
      </Box>

      <Box
        sx={{
          
          height: "400px",
          width: "30%",
          paddingLeft: "60%",
          display:'flex',
          justifyContent:'center',
         
        }}
      >
        {social?.map((item) => (
          <Box
            component={"img"}
            src={item.img}
            sx={{
              paddingTop: " ",
              
              marginRight:'5px',
              marginBottom:'23px'
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default Social
