import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Stack,
  Button,
  InputBase,
  Paper,
  Grid,
  ImageList,
  ImageListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Divider,
  Link,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled, alpha } from "@mui/material/styles";
import "./Home.css";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SearchIcon from "@mui/icons-material/Search";

import FolderImage from "./component/img/cover.jpg";
import { Users, itemData, slider, special, catagory } from "./component/Data";
import SimpleImageSlider from "react-simple-image-slider";

import FavoriteIcon from "@mui/icons-material/Favorite";
import TitleHeaderImg from "./component/titleImg/TitleHeaderImg";
import ServiveBox from "./component/serviceBox/ServiveBox";
import { Map } from "./component/map/Map";
import Special from "./component/slider/Special";
import Social from "./component/social/Social";
import Data from "./component/list/List";
import { useHistory } from "react-router-dom";
// import{ Help} from "./component/Help";

// menu code

import Drawer from "@mui/material/Drawer";
import { spacing } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@emotion/react";
import MuiAppBar from "@mui/material/AppBar";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "2px",
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1.15),

  marginRight: theme.spacing(3),
  marginLeft: 0,

  // width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(12),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.25, 130, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1rem + ${theme.spacing(12)})`,
    // transition: theme.transitions.create('width'),
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${FolderImage})`,
    height: "350px",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    marginTop: "-20px",
    marginRight: "-7px",
    position: "relative",
    marginLeft: "33px",
    width: "100%",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #d4d4d4",
}));
//menu code

const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const appBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// slider image

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push("/help");
  };

  return (
    <Box >
      <AppBar position="fixed" open={open} sx={{paddingTop:'6px'}} >
        <Toolbar sx={{ backgroundColor: "#fDD670" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label=" open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon
              size="large"
              edge="start"
              sx={{ color: "red" }}
            ></MenuIcon>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: -1 }}>
            Suweb
          </Typography>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products(e.g. eggs,milk,potato.."
                sx={{ color: "black" }}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <Button
              style={{
                padding: "15.5px 12px",
                fontSize: "18px",
                width: "100%",
                color: "#FF4500",
              }}
              variant="outlined"
              startIcon={<HomeIcon />}
            >
              {" "}
              <Link to="/ " underline="hover" color="inherit" href="#">
                Menu
              </Link>
            </Button>
            <Button
              type="button"
              onClick={() => history.push("/Help")}
              style={{
                broderRadius: "12",
                padding: "3.6px 10px",
                fontSize: "18px",
                width: "100%",
                color: "#808080",
              }}
              //   sx={{"&.Muibutton-text":{ color:"#808080"},
              // broder:"2px black solid"}}

              variant="outlined"
              startIcon={<QuestionMarkIcon />}
            >
              {" "}
              HELP
            </Button>

     

            <Button style={{ color: "#808080" }} variant="outlined">
              {" "}
              <Link underline="hover" color="inherit" href="#">
                EN|BN
              </Link>
            </Button>
            <Button
              type="button"
              onClick={() => history.push("/SignIn")}
              style={{
                broderRadius: 12,
                backgroundColor: "#ff686e",
                padding: "3.6px 10px",
                fontSize: "13px",
                width: "100%",
                color: "white",
              }}
              // variant="outlined"
            >
              {" "}
              SignIn
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* menu  */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Data />
      </Drawer>

      <Main open={open}>
        <Paper style={styles.paperContainer}>
          <Typography
            variant="h6"
            component="div"
            style={{
              color: "#3CB371 ",
              fontSize: "34px",
              textAlign: "center",
              paddingTop: "100px",
              marginTop: "5px",
              position: "relative",
            }}
          >
            Groceries delivered in 30 minutes
          </Typography>
          <Box>
            <Search
              style={{
                width: "45%",
                marginLeft: "28%",
                backgroundColor: "#CF4A4A",
                borderRadius: "3px",
                marginTop: "23px",
                paddingTop: "3px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products(e.g. eggs,milk,potato.."
                sx={{ color: "white" }}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Paper>

        <Box
          sx={{
            width: "50%",
            height: "150px",
            paddingLeft: "550px",
            paddingTop: "12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {itemData?.map((item) => (
            <ImageListItem key={item.img} sx={{ marginLeft: "15px" }}>
              <img src={`${item?.img}`} />
            </ImageListItem>
          ))}
        </Box>

        <Typography
          style={{ textAlign: "center", fontSize: "34px", padding: "15px" }}
        >
          Our Product Categories
        </Typography>

        <Box
          sx={{
            width: "60%",
            paddingLeft: " 24%",
            paddingTop: "33px",
            cursor: "pointer",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Grid container spacing={2} columns={12}>
            {Users?.map((user) => (
              <Grid item xs={4}>
                <Box>
                  <Item>
                    {`${user?.name}`}
                    <img
                      src={user?.img}
                      style={{
                        height: "14px",
                        width: "23px",
                        alignItems: "center",
                        paddingLeft: "45px",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    />
                  </Item>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography
          style={{ textAlign: "center", fontSize: "34px", padding: "25px" }}
        >
          How to order from Chaldal ?
        </Typography>

        <Box style={{ paddingLeft: "646px" }}>
          <SimpleImageSlider
            width={900}
            height={"345px"}
            images={slider}
            showBullets={true}
            showNavs={false}
            autoPlay={true}
          />
        </Box>

        <Typography
          style={{ textAlign: "center", fontSize: "34px", padding: "25px" }}
        >
          Special Offers
        </Typography>

        <Box>
          {/* <Grid style={{ display: "flex" }}>
          <Special />
        </Grid> */}
          {/* <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7].map((data) => (
              <Special />
            ))}
          </Slider> */}
          <Special />
        </Box>
        <Typography
          sx={{ color: "Brown", textAlign: "center", fontSize: "22px" }}
        >
          Why Popole {<FavoriteIcon />} Chaldal
        </Typography>

        <Box>
          <TitleHeaderImg />
        </Box>

        <Box>
          <ServiveBox />
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            color: "Coral",
            paddingTop: "30px",
            fontfamily: "verdana,arial,sans-serif",
          }}
        >
          Be a part of our family
        </Typography>
        <Box>
          <Social />
        </Box>

        <Box>
          <Map />
        </Box>
      </Main>
    </Box>
  );
};
