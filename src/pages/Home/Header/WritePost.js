import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom"

function WritePost() {
    const navigate = useNavigate()
    
    const showFormPost = () => {
        navigate('/post/new')
    }

    return (
        <Button color="primary" variant="contained" onClick={showFormPost}>Novo Post</Button>
    )
}

export default WritePost