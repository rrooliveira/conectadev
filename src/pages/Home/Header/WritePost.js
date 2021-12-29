import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function WritePost() {
    const navigate = useNavigate()
    const account = useSelector((state) => state.account)
    const isAuthenticated = !!account.user
    
    const showFormPost = () => {
        if (isAuthenticated) {
            navigate('/post/new')
        } else {
            navigate('/sign-in')
        }
    }

    return (
        <Button color="primary" variant="contained" onClick={showFormPost}>Novo Post</Button>
    )
}

export default WritePost