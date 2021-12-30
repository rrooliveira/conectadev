import React from 'react'
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
//import {usePost} from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
}))

function BottomBar() {
    const classes = useStyles()
    // TODO
    /*
    const context = usePost()

    const handleSaveDraft = () => {
        //Access backend and save draft
    }
    const handleSavePublish = () => {
        //Access backend and save publish
    }
    */

    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <Button>Salvar Rascunho</Button>
                <Button color='secondary' variant='outlined'>Salvar Publicar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default BottomBar