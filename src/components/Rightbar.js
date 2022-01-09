import { Avatar, Badge, Chip, Container, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {AvatarGroup } from '@material-ui/lab';

const usestyles = makeStyles((theme) => ({
   container: {
     paddingTop: theme.spacing(10),
     position: "sticky",
     top: 0,
   },

   Title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#555",
    marginTop: theme.spacing(1),
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
    marginTop: theme.spacing(1),

  },
}));


const Rightbar = () => {
  const classes = usestyles();
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
     <Container className={classes.container}>
       <Typography variant='h6' className={classes.Title}>Online Friends</Typography>
       <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
       </AvatarGroup>
       <Typography variant='h6' className={classes.Title}>Gallery</Typography>
       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.Title} variant='h6'>Catgory</Typography>
      <Chip label="Sport" onClick={handleClick} className={classes.link} />
      <Chip label="Music" onClick={handleClick} className={classes.link} />
      <Chip label="Food" onClick={handleClick} className={classes.link} />
      <Chip label="Movie" onClick={handleClick} className={classes.link} />
      <Chip label="Science" onClick={handleClick} className={classes.link} />
      <Chip label="Life" onClick={handleClick} className={classes.link} />
     </Container>
  )
}

export default Rightbar
