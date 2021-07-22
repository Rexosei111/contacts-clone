import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import pic from '../../rex.jpg'

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
            <Avatar alt="Remy Sharp" src={pic} className={classes.small}/>
        </div>
    )
}

export default AccountAvartar
