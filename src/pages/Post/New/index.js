import React from "react";
import {makeStyles} from "@material-ui/styles"
import {Box, AppBar, Toolbar, Button} from "@material-ui/core"
import PostEditor from "./Editor";
import PostPreview from "./Preview";
import {PostProvider} from "../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    root: {},
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
}))

function NewPost() {
    const classes = useStyles()
    // const [image, setImage] = useState(null)
    // const [title, setTitle] = useState('')
    // const [tags, setTags] = useState([])
    // const [markdown, setMarkdown] = useState('')
    //
    // const handleTitle = (event) => {
    //     setTitle(event.currentTarget.value)
    // }
    //
    // const handleTags = (event, values) => {
    //     setTags(values)
    // }
    //
    // const handleMarkdown = (event) => {
    //     setMarkdown(event.currentTarget.value)
    // }

    return (
        <PostProvider>
            <Box display='flex' className={classes.root}>
                <Box width='50%' height='100%' padding={2} borderRight='1px solid #DDD'>
                    <PostEditor />
                </Box>
                <Box width='50%' height='100%' padding={2}>
                    <PostPreview />
                </Box>
            </Box>
            <AppBar position='fixed' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <Button>Salvar Rascunho</Button>
                    <Button color='secondary' variant='outlined'>Salvar Publicar</Button>
                </Toolbar>
            </AppBar>
        </PostProvider>
    )
}

export default NewPost