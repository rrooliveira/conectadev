import React from 'react'
import {Avatar, Box, Divider, Typography} from "@material-ui/core";
import Markdown from "react-markdown";
import {makeStyles} from "@material-ui/styles"
import {useSelector} from "react-redux";
import {usePost} from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    imagePreview: {
        height: 300,
        width: '100%',
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}))

function PostPreview() {
    const classes = useStyles()
    const account = useSelector(state => state.account)
    const context = usePost()

    const {
        image,
        title,
        tags,
        markdown,
    } = context

    return (
        <>
            {image && (
                <Box mb={2}>
                    <img src={image} alt='Imagem carregada para o Post' className={classes.imagePreview}/>
                </Box>
            )}
            <Box mb={2}>
                <Typography variant={'h2'}>{title}</Typography>
            </Box>
            <Box display='flex' alignItems='center' mb={2}>
                <Box>
                    <Avatar className={classes.avatar} src={account.user?.avatar} />
                </Box>
                <Box>
                    <Typography variant='body1'>{account.user?.name}</Typography>
                    <Typography variant='body1' color='secondary'>10 meses atrás</Typography>
                </Box>
            </Box>
            <Box mb={2}>
                <Typography variant={'body1'}>
                    {tags?.map(tag => tag.title).join(', ')}
                </Typography>
            </Box>
            <Divider />
            <Box mb={2}>
                <Markdown children={markdown} renders />
            </Box>
        </>
    )
}

export default PostPreview