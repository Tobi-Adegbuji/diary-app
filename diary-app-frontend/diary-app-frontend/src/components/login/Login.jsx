import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';





import './Login.css'


export default function Login() {


  return (
    <div className="bg">
    <Box boxShadow={4} className="center-screen login-box">
    <Grid container spacing={0}>
    <Grid item xs={4}>
                <form className noValidate autoComplete="off" mx>
                <Grid 
                container 
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item xs={12} >
                <Typography variant="h3">
                    Journalize
                </Typography>
                </Grid>
                <Grid item xs={12} >
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                <TextField id="outlined-basic" label="Password" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary">
                Sign In
                </Button>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained"  color="primary">
                Sign Up
                </Button>
                </Grid>
                </Grid>
                </form>
    </Grid>
    <Grid item xs={8} className='login-banner'>
        
    </Grid>
    </Grid>
    </Box>
    </div>    
    
    
  );
}