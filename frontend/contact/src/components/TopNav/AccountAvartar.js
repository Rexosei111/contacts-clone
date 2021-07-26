import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function AccountAvartar({email, link}) {
    const useStyles = makeStyles(theme => ({
        small: {
            width: theme.spacing(4),
            height: theme.spacing(4)
        }
    }))

    console.log(email);
    const classes = useStyles()
    return (
        <div>
            <Avatar alt={email} src={link} className={classes.small}/>
        </div>
    )
}

export default AccountAvartar
