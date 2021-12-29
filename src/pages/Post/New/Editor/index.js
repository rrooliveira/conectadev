import React, {useCallback} from 'react'
import {Box, Button, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {makeStyles} from "@material-ui/styles"
import {useDropzone} from 'react-dropzone'
import Title from "./Title"
import {usePost} from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    image: {
        height: 100
    },
    imagePreview: {
        width: '100%',
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    },
    button: {
        marginRight: theme.spacing(2)
    },
}))

const tagsOptions = [
    { title: 'React.js' },
    { title: 'Node.js' },
    { title: 'Php' },
    { title: 'Python' },
    { title: 'Java' },
    { title: 'GoLang' },
    { title: '.Net' },
]

function PostEditor() {
    const classes = useStyles()
    const context = usePost()

    const {
        image,
        setImage,
        tags,
        setTags,
        markdown,
        setMarkdown
    } = context

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const base64data = reader.result
            setImage(base64data)
        }
    }, [setImage])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    return (
        <>
            <div {...getRootProps()} mb={2}>
                <input {...getInputProps()} />
                <Button variant='outlined'>Carregar Imagens</Button>
            </div>
            {
                image && (
                    <Box mb={2}>
                        <img src={image} alt='Imagem carregada para o Post' className={classes.image}/>
                    </Box>
                )
            }
            <Box mb={2}>
                <Title />
            </Box>
            <Box mb={2}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={tagsOptions}
                    getOptionLabel={(option) => option.title}
                    value={tags}
                    onChange={setTags}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            placeholder="tags"
                        />
                    )}
                />
            </Box>
            <textarea className={classes.textArea} value={markdown} onChange={setMarkdown} />
        </>
    )
}

export default PostEditor