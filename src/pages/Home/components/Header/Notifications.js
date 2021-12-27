import React, { useEffect, useRef, useState } from 'react'
import { SvgIcon, IconButton, Popover, Typography, Box, Avatar, List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { getNotifications } from "../../../../actions/notificationActions"
import { makeStyles } from '@material-ui/styles';
import { 
    Bell as BellIcon, 
    Star as StartIcon, 
    MessageCircle as MessageIcon, 
    Heart as HeartIcon, 
    Users as ConnectionIcon } from 'react-feather'

const iconsMap = {
    reviews: StartIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon
}

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}))

function Notifications() {
    const account = useSelector((state) => state.account)
    const isAuthenticated = !!account.user
    const notifications = useSelector((state) => state.notifications.notifications)
    const classes = useStyles()

    const ref = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch])

    return (
        isAuthenticated && (
        <>
            <IconButton ref={ref} onClick={handleOpen}> 
                <SvgIcon>
                    <BellIcon />
                </SvgIcon>
            </IconButton>
            <Popover
                open={isOpen}
                onClose={handleClose}
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <Box p={2}>
                   <Typography variant='h6' color='textPrimary'>
                        Notificações   
                    </Typography> 
                </Box>
                <List>
                {notifications.map((notification) => {
                    const Icon = iconsMap[notification.type]
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.icon} >
                                    <SvgIcon>
                                        <Icon/>
                                    </SvgIcon>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary={notification.title}
                            primaryTypographyProps={{
                                variant: 'subtitle2', 
                                color: 'textPrimary'
                            }} 
                            secondary={notification.description} />
                        </ListItem>
                    )
                    })}
                </List>
            </Popover>
        </>
        )
    )
}

export default Notifications