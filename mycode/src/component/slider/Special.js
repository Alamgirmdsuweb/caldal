import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { flexbox, fontFamily, padding } from "@mui/system";
import { special } from "../Data";
import BoltIcon from "@mui/icons-material/Bolt";
import Button from "@mui/material/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Special.css";
import styled from "@emotion/styled";
import Slider from "react-slick";


const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,

  cssEase: "linear",
};

const Special = () => {
  return (
    <Box >
      <Box
        sx={{
          width: "50%",
          height: "",

          paddingLeft: "30%",
        }}
      >
        <Slider {...settings}>
          {special?.map((item) => (
            <Box>
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
                  sx={{ height: "360px", marginLeft: "22px", width: "270px" }}
                  
                />
                <Box
                  sx={{
                    // height: "300px",
                    width: "40%",

                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.cardProduct}
                    sx={{ height: "150px", marginLeft: "30px", width: "140px"}}
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
                      broder:'2px solid black',
                      boxSizing:'border-box',
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
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Special;
