import React from "react";
import { makeStyles, Paper, Button, ListSubheader, ListItem, ListItemText }  from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}))

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javascript'},
    { id: 3, name: '.golang'},
    { id: 4, name: 'php'},
    { id: 5, name: 'java'},
    { id: 6, name: 'python'}
]

function NavBar(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>
            <ListSubheader>{`Tags em alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags
            </ListItem>
        </Paper>
    )
}

export default NavBar