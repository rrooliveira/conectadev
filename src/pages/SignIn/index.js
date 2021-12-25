import React from "react";
import { makeStyles, Typography, Grid, Box, Avatar, TextField, Button, Link } from "@material-ui/core"
import { Lock } from "@material-ui/icons"
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2, 4)
    }
    //Exemplo usando div
    // root: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     height: '100vh'
    // },
    // left: {
    //     background: 'blue',
    //     flexGrow: 1,
    //     flexBasis: '58%',

    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center '

    // },
    // right: {
    //     background: 'yellow',
    //     flexGrow: 1,
    //     flexBasis: '42%'
    // },
    // form: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: '64px 32px',
    //     alignItems: 'center'
    // }
}))

function Copyright() {
    return (
        <Typography variant='body2' align='center'>
            {'Copyright © '}
            <a color='inherit' href='https://github.com/rrooliveira'>Rodrigo Ruy Oliveira</a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SignIn() {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Grid container className={classes.root}>
            <Grid item container direction='column' justifyContent='center' alignItems='center' md={7} className={classes.image}>
                <Typography style={{color: '#FFF', fontSize: 35, lineHeight: '45px'}}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant='body2' style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <Lock />
                    </Avatar>
                    <Typography variant='h5'>Acesso</Typography>
                    <form className={classes.form}>
                        <TextField variant='outlined' margin='normal' required fullWidth id='email' label='E-mail' name='email' autoComplete='email' autoFocus />
                        <TextField variant='outlined' margin='normal' required fullWidth id='password' label='Senha' name='password' autoComplete='current-password' />
                        <Button fullWidth variant='contained' color='primary' className={classes.button} onClick={() => navigate('/')}>Entrar</Button>
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se!</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>

        //Exemplo usando div
        /* Flex Container */
        // <div className={classes.root}>
            
        //     {/* Flex Item / Comtainer */}
        //     <div className={classes.left}>
        //         <Typography style={{color: '#FFF', fontSize: 35, lineHeight: '45px'}}>
        //             <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        //         </Typography>
        //         <Typography variant='body2' style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
        //             Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        //         </Typography>
        //     </div>

        //     {/* Flex Item */}
        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h4>Acesso</h4>
        //             <input type="text" />
        //             <input type="text" />
        //         </form>
        //     </div>

        // </div>
    )
}

export default SignIn