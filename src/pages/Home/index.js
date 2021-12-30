import React from "react";
import { makeStyles } from '@material-ui/styles'
import { Routes, Route } from 'react-router-dom';
import Header from "./Header"
import NewPost from "../Post/New"
import Feed from "../Feed"
import Post from "../Post";
import Profile from "../Profle"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark
    },
    main: {
        height: 'calc(100vh - 64px)',
        padding: 24
    },
    toolbar: {
       minHeight: 64 
    }
}))

function Home() {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path="/post/:slug" element={<Post />} />
                    <Route path="*" element={<h1>Not found 404</h1>} />
                </Routes>
            </main>      
        </div>
    )
}

export default Home