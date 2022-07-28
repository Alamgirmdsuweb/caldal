import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { catagory } from "../Data";
import Paper from "@mui/material/Paper";

import { Box } from "@mui/material";
import React from "react";

export const TitleHeaderImg = () => {
  return (
    <Box
      sx={{
    
        height: "470px",

        display: "flex",
        paddingTop: "10px",
        paddingBottom: "20px",
        
        paddingLeft:'9%'
      }}
    >
      {catagory?.map((items) => (
        <ImageListItem key={""}>
          <img src={`${items?.Img}`} alt={""} />,
          {/* <Box sx={{boxSizing:"border-box",broder:"3px solid red",backgroundColor:"Azure"}}> */}
         
          <Typography
            sx={{
              position: "absolute",
              top: "70%",
              fontSize: "23px",
              marginLeft: "250px",
            }}
          >
            
            {items.Name}
           

          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "85%",
              fontSize: "18px",
              marginLeft: "90px",
            }}
          >
            {items.Title}
          </Typography>
          
          {/* </Box> */}
        </ImageListItem>
      ))}
    </Box>
  );
};

export default TitleHeaderImg;
