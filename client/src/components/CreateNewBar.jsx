import '../App.css'
import React, {useContext} from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { RootContext } from '../store/GlobalState'
import TimerList from './TimerList';


const useStyles = makeStyles({
    root: {
        background: '#6a58c4',
        border: '0px solid transparent',
        outline: 'none',
        color: "#fff",
        fontSize: '13px',
        padding: '7px 15px',
        textTransform: 'none',
        margin: '0px auto 0px auto !important',
        '&:hover': {
            background: '#7866d1'
        }

    }
})


                

const CreateNewBar = ({setVal}) => {
    const style = useStyles()

    const {creatingBar, cancelTimer} = useContext(RootContext)

    function createNew(){
        cancelTimer(false)
        setVal(true)
    }

    return (
        <div className="contentBox">
            <h3>Countdown Timer Bar (CTB)  Dashboard</h3>
            <div className="flexColumn">
                <p>You can create a bar by clicking the "Create New Bar" button below</p>
                <Button classes={{ root: style.root }} onClick={() => createNew()}>Create New Bar</Button>
            </div>
            <div>
                <TimerList />
            </div>
        </div>
    )
}

export default CreateNewBar