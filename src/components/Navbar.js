import React from 'react';
import {useState} from 'react';
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core';
import Search from "@material-ui/icons/Search";
import {Notifications, Mail, Cancel} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    toolbar:{
        display:"flex",
        justifyContent:"space-between",

    },
    logoLg:{
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
          },
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none",
          },
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width:"50%",
        [theme.breakpoints.down('sm')]: {
            display: (props)=> (props.open ? "flex" : "none"),
            width:"80%",
          },
    
    },
    searchlogo:{
        marginLeft:"10px",

    },
    searchbutton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display:"none",
          },
    },
    input:{
        color:"white",
        marginLeft: theme.spacing(2),
    },
    icons:{
        display:"flex",
        alignItems:"center",
        display: (props)=> (props.open ? "none" : "flex"),
    },
    badgeicons:{
        marginRight: theme.spacing(2),
    },
    cancel:{
        marginRight:"4px",
        [theme.breakpoints.up('sm')]: {
            display: "none",
        },
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open});
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>
                    facebook
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    fb
                </Typography>
                <div className={classes.search}>
                    <Search className={classes.searchlogo}/>
                    <InputBase placeholder='Search...' className={classes.input} />
                    <Cancel className={classes.cancel} onClick = {() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchbutton} onClick={()=> setOpen(true)} />
                    <Badge badgeContent={5} color='secondary' className={classes.badgeicons}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={5} color='secondary' className={classes.badgeicons}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
