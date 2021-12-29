import React from "react";
import { makeStyles } from "@material-ui/core"
import { Container, Box } from "@material-ui/core";

import PostCard from "../../components/PostCard";
import NavBar from "./NavBar"

const useStyles = makeStyles(() => ({
}))

const posts = [
    { 
        id: 1, 
        author: {
            id: 1,
            name: 'Rodrigo Ruy Oliveira',
            username: 'rodrigoruyoliveira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um App do zero utilizando o React.js',
        date: 'Dezembro 24, 2021',
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: '#reactjs, #javascript, #developer, #frontend',
        image: '/images/posts/post9.jpeg'
    },
    { 
        id: 2, 
        author: {
            id: 1,
            name: 'Rodrigo Ruy Oliveira',
            username: 'rodrigoruyoliveira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Comparativo entre React.js e Vue.js - Performance',
        date: 'Dezembro 24, 2021',
        description: 'Vou criar um bootcamp gratuito para passar um pouco da minha experiência. Quem topa?',
        hashtags: '#reactjs, #vuejs, #framework, #frontend',
        image: '/images/posts/post8.png'
    },
]

function Feed(){
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <NavBar />
                <div className={classes.root}>
                    { 
                        posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    }
                </div>
            </Box>
        </Container> 
    )
}

export default Feed