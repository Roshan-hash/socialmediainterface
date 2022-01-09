import { Container, makeStyles, Typography } from '@material-ui/core'
import { Bookmark, Camera, CameraAltSharp, ExitToApp, Home, List, MobileFriendly, MobileOffOutlined, MobileScreenShareOutlined, Person, PersonAddSharp, PersonTwoTone, PhoneAndroid, PlayCircleFilledOutlined, Settings, Storefront } from '@material-ui/icons';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    container:{
        height:"100vh",
        color: "white",
        marginLeft: "-8px",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"white",
            color : "#555",
            border:"1px solid #ece7e7",
            
        },
    },
    item:{
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",

        },
    },
    text:{
        [theme.breakpoints.down("sm")]: {
            display:"none",
    },
    fontWeight: '500',
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            fontSize: "18px",
        },
 
    },
}));
const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}></Person>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}></List>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <CameraAltSharp className={classes.icon}></CameraAltSharp>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleFilledOutlined className={classes.icon}></PlayCircleFilledOutlined>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <PhoneAndroid className={classes.icon}></PhoneAndroid>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}></Bookmark>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}></Storefront>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}></Settings>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}></ExitToApp>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
