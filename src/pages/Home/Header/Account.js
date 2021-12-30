import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, MenuItem } from '@material-ui/core'
import { signOut } from '../../../actions/accountActions'

function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    const isAuthenticated = !!account.user
    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSignOut = () => {
        handleClose()
        dispatch(signOut())
    }

    const signIn = () => {
        navigate('/sign-in')
    }

    const signUp = () => {
        navigate('/sign-up')
    }

    const handlePerfil = () => {
        navigate('/profile/' + account.user.username)
    }

    return (
        <>
            <Avatar ref={ref} onClick={handleOpen} alt="Rodrigo Oliveira" src={account.user && account.user.avatar} />
            {
                isAuthenticated ?
                <Menu 
                    anchorEl={ref.current}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={isOpen}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={handlePerfil}>Perfil</MenuItem>
                    <MenuItem>Meus Favoritos</MenuItem>
                    <MenuItem>Meus Posts</MenuItem>
                    <MenuItem>Minhas Conexões</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                </Menu>
                :
                <Menu 
                    anchorEl={ref.current}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={isOpen}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={signUp}>Registrar Grátis</MenuItem>
                    <MenuItem onClick={signIn}>Entrar</MenuItem>
                </Menu>
            }
            
        </>
    )
}

export default Account