import React from 'react'
import SideBar from '../SideNav/SideBar'
import { makeStyles } from '@material-ui/core/styles'
import Content from './Content'

function Main() {
    const useStyles = makeStyles(theme => ({
        main: {
            display: "flex",
            gap: 5,
            // backgroundColor: "#000000"
        }
    }))

    const classes = useStyles()
    return (
        <main className={classes.main}>
            <SideBar />
            <Content />
        </main>
    )
}

export default Main
