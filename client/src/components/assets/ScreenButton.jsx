import '../../App.css'
import React from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// import { RootContext } from '../../store/GlobalState';






const ScreenButton = ({ btnText, setVal, disable, val, count }) => {
    const useStyles = makeStyles({
        root: {
            background: count === val ? '#7866d1' : '#f1f1f1',
            color: count === val ? "#f1f1f1" : "#000",
            border: '0px solid transparent',
            outline: 'none',
            fontSize: '13px',
            fontFamily:'Arial, Helvetica, sans-serif !important',
            padding: '7px 6px',
            textTransform: 'none',
            margin: 'auto !important',
            '&:hover': {
                background: '#7866d1',
                color:'#f1f1f1'
            }
    
        },
        active:{
            background: '#7866d1',
            color:'#f1f1f1'
        }
    
    })
    
    const style = useStyles()

    let active = {
        background: '#7866d1 !important',
        color:'#f1f1f1 !important'
    }

    
   


    return (
        <Button classes={{ root: style.root }} style={active} disabled={disable ? true : false} onClick={() => setVal(val) }>{btnText}</Button>
    )
}

export default ScreenButton