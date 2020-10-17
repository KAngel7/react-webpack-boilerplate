import React, {useState} from "react";

import {
  makeStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
}))

const AdminSetting = props => {
  const [minMovingCoinToColdWallet, setMinMovingCoinToColdWallet] = useState(30);
  const [bidAsk, setBidAsk] = useState(30);
  const [minWithDraw, setMinWithDraw] = useState(200);
  const [timeCancel, setTimeCancel] = useState(200);

  const classes = useStyles();

  return (
      <>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Admin Settings
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <React.Fragment>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="minMoving"
                    name="minMoving"
                    label="Min Moving Coin To Cold Wallet"
                    fullWidth
                    autoComplete=""
                    value={minMovingCoinToColdWallet}
                    onChange={e => {
                      setMinMovingCoinToColdWallet(e.target.value);
                    }}
                  />
                </Grid>
                
                
               
               

                <Grid item xs={4} sm={4}>
                  <TextField
                    required
                    id="rivhitUserId"
                    name="rivhitUserId"
                    label="Rivhit default user Id"
                    fullWidth
                    autoComplete="rivhitUserId"
                    value={ ""}
                  />
                </Grid>

                <Grid item xs={4} sm={4}>
                  <TextField
                    required
                    id="rivhitToken"
                    name="rivhitToken"
                    label="Rivhit Token"
                    fullWidth
                    autoComplete="rivhitToken"
                    value={ ""}
                  />
                </Grid>

                
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="totalDonation"
                    name="totalDonation"
                    label="Total Donation"
                    fullWidth
                    autoComplete="totalDonation"
                    
                    value={ ""}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="totalFoodSave"
                    name="totalFoodSave"
                    label="Total Food Save"
                    fullWidth
                    autoComplete="totalFoodSave"
                    
                    value={""}
                  />
                </Grid>
                
              </Grid>
              <hr style={{ marginTop: 24 }} />
              <Button style={{ marginTop: 24 }} color="primary" variant="contained">
                Save Setting
              </Button>
            </React.Fragment>
          </Paper>
        </main>
      </>
  );
}

export default AdminSetting;