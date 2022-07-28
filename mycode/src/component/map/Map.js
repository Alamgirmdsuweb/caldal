import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Pic } from "../Data";

export const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#3A3A3A",

        display: "fixed",
        marginTop: "2px",
      }}
    >
      <Box>
        {Pic?.map((item) => (
          <Box
            component={"img"}
            src={item.img}
            sx={{ height: "44vh", marginLeft: "110%" }}
          ></Box>
        ))}
      </Box>

      <Box sx={{ width: "20%", marginLeft: "40%", fontWeight: "blod" }}>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "#fdd66f",
            fontWeight: "blod",
          }}
        >
          Dhaka
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Total Orders Placed
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "#fdd66f",
          }}
        >
          2757700
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Total Savings
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "#fdd66f",
          }}
        >
          ৳234,404,500
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Time Saved
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "23px",
            fontSize: "24px",
            color: "#fdd66f",
          }}
        >
          2,068,275 hrs
        </Typography>
      </Box>
    </Box>
  );
};
