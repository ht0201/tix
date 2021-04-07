import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getSignUpAPI } from "../../redux/actions/user.action";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [userSignUp, setUserSignUp] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  function handleChangeText(event) {
    let name = event.target.name;
    let value = event.target.value;

    console.log(name, value);
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getSignUpAPI(userSignUp, history));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="taiKhoan"
                name="taiKhoan"
                autoComplete="taiKhoan"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="matKhau"
                type="password"
                id="matKhau"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="soDT"
                label="soDT"
                name="soDT"
                autoComplete="soDT"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="maNhom"
                label="maNhom"
                name="maNhom"
                autoComplete="maNhom"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="maLoaiNguoiDung"
                label="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                autoComplete="maLoaiNguoiDung"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeText}
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="hoTen"
                name="hoTen"
                autoComplete="hoTen"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="Login" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp;
