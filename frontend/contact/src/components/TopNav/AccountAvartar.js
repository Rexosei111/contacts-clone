import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function AccountAvartar() {
    const useStyles = makeStyles(theme => ({
        small: {
            width: theme.spacing(4),
            height: theme.spacing(4)
        }
    }))
    const classes = useStyles()
    return (
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small}/>
        </div>
    )
}

export default AccountAvartar
