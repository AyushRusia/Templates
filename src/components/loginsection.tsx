import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  makeStyles,
  createStyles,
  Typography,
  Button,
  Grid,
  Link,
  CssBaseline,
} from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";

import axios from "axios";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      //
      height: "100%",
    },
    heading: {
      color: "#7a1139",
      marginTop: "25px",
      marginBottom: "35px",
      fontFamily: "Brush Script MT",
      fontSize: "250%",
    },
    form: {
      //
    },
    textField: {
      //
      marginTop: "10px",
      marginBottom: "10px",
      Width: "350px",
      height: "45px",
    },
    btn: {
      marginTop: "10px",
      width: "150px",
      height: "35px",
      borderRadius: "10px",
    },
    icons: {
      margin: "5px",
      cursor: "pointer",
    },
  })
);
export default function LoginForm(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [inititalValues, setInitialValues] = React.useState({
    email: "",
    password: "",
  });

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email can't be Empty"),

    password: yup.string().required("Password is Required"),
  });

  const submitHandler = async (values) => {};

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <h1 className={classes.heading}>Application</h1>
        <h2 style={{ fontFamily: "cursive" }}>Welcome To Apllication</h2>
        <Formik
          initialValues={inititalValues}
          validationSchema={validationSchema}
          onSubmit={(values) => submitHandler(values)}
        >
          <Form aria-label="login" id="login">
            <Grid item spacing={10}>
              <Field name="email">
                {({ field, meta }) => (
                  <TextField
                    id="email"
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Email"
                    {...field}
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched ? meta.error : ""}
                    className={classes.textField}
                  />
                )}
              </Field>
            </Grid>
            <Grid item spacing={0}>
              <Field name="password">
                {({ field, meta }) => (
                  <OutlinedInput
                    variant="outlined"
                    size="normal"
                    fullWidth
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...field}
                    className={classes.textField}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              </Field>
            </Grid>
            <Grid container item justify="flex-end">
              <p style={{ margin: 0, cursor: "pointer" }}>Forget Password ?</p>
            </Grid>
            <Grid container item justify="center">
              <Button variant="outlined" type="submit" className={classes.btn}>
                Submit
              </Button>
            </Grid>
          </Form>
        </Formik>
        <p style={{ marginTop: "40px" }}>Or Sign with using....</p>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <Image
              src="/google.svg"
              alt="Icons"
              width={40}
              height={40}
              className={classes.icons}
            />
          </Grid>
          <Grid item>
            {" "}
            <Image
              src="/fb.svg"
              alt="Icons"
              width={40}
              height={40}
              className={classes.icons}
            />
          </Grid>
        </Grid>
        <p style={{ marginTop: "20px" }}>
          New to Apllication? <Link href="/">Link</Link>
        </p>
      </Grid>
    </>
  );
}
