import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Products } from "./Data";
import { item } from "./Data";
import BoltIcon from "@mui/icons-material/Bolt";
import { useState } from "react";

export default function Help() {
  const [show, setShow] = useState({});

  console.log("show", show);
  return (
    <Box
      sx={{
        width: "100%",
        height: "",

        paddingLeft: "0%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Grid container spacing={2}>
            {Products?.map((item) => (
              <Grid item sm={6} md={4} lg={3} xs={12}>
                <Box
                  sx={{
                    border: "2px solid black",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: " 23px",
                    // height: "35vh",
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.Product}
                    sx={{ height: "360px", marginLeft: "22px", width: "270px" ,}}
                  />

                  <Box
                    onMouseOver={() => setShow(v=> ({...v, id: item.id}))}
                    onMouseLeave={() => setShow(v=> ({...v, id:undefined}))}
                    sx={{
                      // height: "300px",
                      width: "40%",
                      // border: "2px solid black",
                      // boxSizing: "border-box",

                      marginRight: "10px",
                      marginTop: "10px",
                  
                      ":hover": {
                        opacity: 0.1,
                      },
                    }}
                  >
                    {show.id === item.id && (
                      <Box
                        sx={{
                          fontSize: "19px",
                          marginTop:"200px",
                          color: "Blue",
                          position:"absolute",
                          marginLeft:'19px',
                          ":hover": {
                            
                          },
                          
                       
                        }}
                      >
                        {" "}
                        {item.hover} {""}
                      </Box>
                    )}

                    <Box
                      component={"img"}
                      src={item.cardProduct}
                      sx={{
                        height: "150px",
                        marginLeft: "30px",
                        width: "140px",
                      }}
                    />
                    <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
                      {item.Title}
                    </Typography>
                    <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
                      {item.Text}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "19px",
                        textAlign: "center",
                        fontStyle: "bold",
                      }}
                    >
                      {item.Price}
                    </Typography>
                    
                    <Box>
                      <Button
                        startIcon={<BoltIcon />}
                        sx={{
                          marginRight: "23px",
                          color: "red",
                          backgroundColor: "#FFFACD",
                          marginTop: "25px",
                          textAlign: "center",
                          marginLeft: "43px",
                          broder: "2px solid black",
                          boxSizing: "border-box",
                          "&:hover": {
                            backgroundColor: "#FFFACD",
                          },
                        }}
                      >
                        <Typography>Add to bag</Typography>
                      </Button>
                      
                    </Box>
                    </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
