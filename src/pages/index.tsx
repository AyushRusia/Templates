import { Grid } from "@material-ui/core";
import LoginForm from "../components/loginsection";
import Image from "next/image";

import { makeStyles, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      height: "100vh",
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#99bbff",
    },
  })
);
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={false} lg={6} className={classes.left}>
          <Grid item>
            <Image src="/login.svg" height={500} width={400} />
          </Grid>
          <Grid item>
            <Typography component="p">
              Loreum ipsium Loreum ipsium Loreum Loreum ipsium Loreum ipsium
              Loreum ipsium Loreum ipsium Loreum ipsium Loreum ipsium Loreum
              ipsium
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}
