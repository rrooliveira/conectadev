import React from "react";
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Box } from "@material-ui/core";
import Account from './Account'
import Notifications from './Notifications'
import WritePost from "./WritePost";
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    }
})
function Header() {
    const classes = useStyles()

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Link to='/'>
                    <img src="/images/logo.png" alt="Logo Conecta Dev" className={classes.img} />
                </Link>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <WritePost />
                </div>
                <Box ml={2}>
                    <Notifications />
                </Box>
                <Box ml={2}>
                    <Account />
                </Box>
            </Toolbar> 
        </AppBar>
    )
}

export default Header