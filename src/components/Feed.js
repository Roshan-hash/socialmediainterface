import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Post from './Post';


const useStyles = makeStyles((theme) => ({
  container:{
    paddingTop: theme.spacing(10),  
  },
}));
const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Post img ="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25" title="My First Post" ></Post>
            <Post img ="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" title="My Second Post" ></Post>
            <Post img ="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" title="My Thrid Post" ></Post>
            <Post img ="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" title="My Fourth Post" ></Post>
        </Container>
       
    );
}

export default Feed
