import React from "react";
import { makeStyles } from '@material-ui/styles'
import { Button, AppBar, Toolbar, SvgIcon, Avatar } from "@material-ui/core";
import { Bell } from "react-feather";

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
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})


function Header() {
    const classes = useStyles()
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="Logo Conecta Dev" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button color="primary" variant="contained" className={classes.button}>Novo Post</Button>
                </div>
                <SvgIcon className={classes.bell}><Bell></Bell></SvgIcon>
                <Avatar alt="Rodrigo Oliveira" src="/" />
                {/* <div className="">
                    <a href="/">Conecta Dev</a>
                    <input type="text"></input>
                </div>
                <div className="">
                    <Button color="primary" variant="contained">Novo Post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div>*/}
            </Toolbar> 
        </AppBar>
    )
}

export default Header