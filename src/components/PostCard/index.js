import React from "react";
import { makeStyles, Card, CardHeader, CardContent, CardActions, CardActionArea, Typography, Avatar, IconButton } from "@material-ui/core"
import { Favorite, Message } from "@material-ui/icons";
import {useNavigate} from "react-router";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto',
    },
}));

function PostCard({ post }) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handlePostClick = () => {
        navigate(`/post/${post.slug}`);
    };

    return (
        <Card className={classes.root} onClick={handlePostClick}>
            <CardHeader
                avatar={<Avatar src={post.author?.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" className={classes.caption}>
                            Escrito por
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" className={classes.caption}>
                            {moment(post.date).fromNow()}
                        </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography className={classes.message} variant="body1">
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image} alt="img" />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <Favorite />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2"
                    >
                        {post.likes}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <Message />
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2"
                    >
                        {post.comments}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PostCard;