import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Stack, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { ServiceImg } from "../Data";
import { Posotion } from "../Data";


const styles = {
  paperContainer: {
    backgroundImage: `url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-31/Default/stores/chaldal/components/landingPage2/LandingPage/images/banner-corporate-page.jpg?v=2)`,
    height: "400px",
    width: "100%",
    paddingLeft:'22px',

    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    opacity: "0.8",
    background: " linear-gradient(to right,#025C76, #00566b 100%)",

    marginTop: "80px",
    // position: "relative",
  },
};

export default function ServiveBox() {
  return (
    <Box>
      <Paper style={styles.paperContainer}>
        <Box>
          {ServiceImg?.map((user) => (
            <Box
              component={"img"}
              src={user.img}
              sx={{
                height: "50px",
                width: "70px",
                paddingLeft: "48%",
                paddingTop: "14px",
                position:'relative'
              }}
            ></Box>
          ))}

          <Typography
            sx={{
              fontSize: "24px",
              color: " white",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            Do you own a business?
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: " white",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            Become a Corporate Customer
          </Typography>

          <Grid
            sx={{
              display: "flex",
              position: "relative",

              justifyContent: "center",
              marginLeft: "3%",
              paddingTop: "23px",
              gap: "40px",
              height: "150px",
              width: "95%",
              fontFamily: "sans-serif",
            }}
          >
            {Posotion?.map((item) => (
              <Box
                sx={{
                  height: "140px",
                  width: "180px",
                  border: "2px solid white",
                  position: "relative",
                }}
              >
                <Box
                  component={"img"}
                  src={item.img}
                  sx={{
                    height: "50px",
                    width: "60px",
                    paddingLeft: "50px",

                    paddingTop: "30px",
                    background: "transparent",
                  }}
                ></Box>
                <Typography
                  sx={{ color: "white", marginTop: "5px", marginLeft: "25px" }}
                >
                  {item.Title}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Box>
        <Button
          sx={{
            height: "45px",
            width: "150px",
            background: "#FF686E",
            color: "white",
            alignItems: "center",
            marginLeft:'47%',
            marginTop:'40px',
             "&:hover":{
                  backgroundColor:'#FF686E'

             }
                  
          }}
        >
          FIND OUT MORE
        </Button>


      
      </Paper>
      
      
      
    </Box>
    
  );
  
  
}

