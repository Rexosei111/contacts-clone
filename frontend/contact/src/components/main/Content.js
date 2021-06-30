import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

function Content() {
    const useStyles = makeStyles(theme => ({
        content: {
            // backgroundColor: "#000000"
        }
    }))

    const classes = useStyles()
    return (
        <Container className={classes.content}>
            <Typography>lfsdkf;akdjf;kja;dkf</Typography>
        </Container>
    )
}

export default Content
