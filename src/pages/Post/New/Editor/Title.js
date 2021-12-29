import React  from 'react'
import {TextField} from "@material-ui/core";
import {usePost} from "../../../../context/PostContext";

function Title() {
    const context = usePost()

    const {
        title,
        setTitle,
    } = context

    return (
        <TextField
            id='title'
            value={title}
            placeholder='Título'
            fullWidth
            onChange={setTitle}
        />
    )
}

export default Title