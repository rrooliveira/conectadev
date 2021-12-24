import React from "react";
import { makeStyles, Card, CardHeader, CardContent, CardActions, CardActionArea, Typography, Avatar, IconButton } from "@material-ui/core"
import { Favorite, Bookmark, Message } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto'
    }
}))

function PostCard({ post }) {
    const classes = useStyles()

    return (
       <Card className={classes.root}>
           <CardHeader 
                avatar={<Avatar src={post.author.avatar} />} 
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                    <Typography variant="caption" className={classes.caption}>{`Avaliado por`}</Typography>
                    <Typography variant="subtitle2" className={classes.caption}>{post.author.name}</Typography>
                    <Typography variant="caption" className={classes.caption}>{post.date}</Typography>
                    </div>
                }
           />
           
           <CardContent className={classes.content}>
                <Typography variant="body1" className={classes.message}>{post.hashtags}</Typography>
                <CardActionArea><img src={post.image} className={classes.image} alt={post.title} /></CardActionArea>
           </CardContent>
           
           <CardActions disableSpacing>
               <IconButton aria-label="like">
                   <Favorite />
                   <Typography style={{cursos: 'pointer'}}
                    color="textSecondary"
                    variant="body2"
                   >
                    {'10'}
                   </Typography>
               </IconButton>
               <IconButton aria-label="comment">
                   <Message />
                   <Typography className={classes.reactions} 
                    color="textSecondary"
                    variant="body2"
                   >
                    {'30'}
                   </Typography>
               </IconButton>
               <IconButton aria-label="favorite" className={classes.favorite}>
                   <Bookmark />
               </IconButton>
           </CardActions>
       </Card>
    )
}

export default PostCard