import { Box, createTheme } from "@mui/system";


import React, { useState } from "react";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { dataBase } from "../Data";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Container from "@mui/material/Container";
import Help from "../Help";

export default function Login() {
  // const [open, setOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const errors = {
    name: "invalid username",
    pass: "invalid password",
  };

  const handleClick = () => {
    
    var { name, pass } = document.forms[0];
    const userData = dataBase.find((user) => user.Email === name.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages(errors.pass.name);
      } else if (userData.password === pass.value) {
        setIsSubmitted(true);
        isSubmitted(false);

        history.push("/Home");
      }
    } else {
      console.log("no data found");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            height: "56px",
            width: "45px",
          }}
        >
          <LockOutlinedIcon sx={{ height: "43px", width: "34px" }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography>
            {errorMessages}
            
          </Typography>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={() =>handleClick({Help}) }
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
            {/* {isSubmitted ? <Box>  fdxgdhgsdgh</Box> : Login} */}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
