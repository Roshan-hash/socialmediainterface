import { Button, Container, Fab, FormControl, FormControlLabel, FormLabel, Input, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, Typography } from '@material-ui/core'
import { Add, Delete, Send } from '@material-ui/icons';
import React from 'react';
import {useState} from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
   addicon:{
       position:'fixed',
       bottom:20,
       right: 20,
   },
   container:{
       width: 500,
       height: 550,
       backgroundColor:"white",
       position:"absolute",
       top:0,
       bottom:0,
       left: 0,
       right: 0,
       margin: "auto",
       [theme.breakpoints.down("sm")]:{
           width:"100vw",
           height:"100vh",
       },

   },
   item:{
       marginBottom: "10px",
   },
   form:{
       padding: theme.spacing(),
   }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Adds = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

    return ( 

        <div>
            <Tooltip title="Add" aria-label='add' onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.addicon}>
                    <Add></Add>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                        <TextField id="standard-basic" label="Title"  size="small"
                                   style={{ width: "100%" }}
                                   variant="standard" />
                        </div>
                        <div className={classes.item}>
                        <TextField id="standard-multiline-static"
                                   label="Description"
                                   multiline
                                   rows={4}
                                   style={{ width: "100%" }}
                                   size="small"
                                   variant="standard" />
                        </div>
                        <div className={classes.item} style={{size:'sm'}}>
                            <TextField select label='Visbility' value="Public">
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup>
                              <FormControlLabel value="Everyone" control={<Radio size='sm'/>} label="Everyone" />
                              <FormControlLabel value="My Friends " control={<Radio size='sm'/>} label="My Friends" />
                              <FormControlLabel value="No One" control={<Radio  size='sm'/>} label="No one" />
                           </RadioGroup>
                        </FormControl> 
                        </div>
                        <div className={classes.item}>
                           
                             <Typography variant='h6'>Upload The Image</Typography>
                             <label htmlFor="contained-button-file">
                               <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                 <Button variant="contained" component="span" style={{marginLeft:"10px"}}>
                                   Upload
                                 </Button>
                             </label>
                           
                        </div>
                        <div className={classes.item} style={{marginTop:"8px"}}>
                           <Button variant="contained" color="primary" 
                           style={{marginRight:"20px"}} 
                           onClick={() => setOpenAlert(true)}
                           startIcon={<Send/>}>Create</Button>
                           <Button variant="outlined" color="primary" 
                           onClick={() => setOpen(false)} 
                           endIcon = {<Delete/>}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                   Your Post is add successfully!
                 </Alert>
            </Snackbar>
        </div>
    )
}

export default Adds
