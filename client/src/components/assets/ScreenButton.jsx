import '../../App.css'
import React from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
// import { RootContext } from '../../store/GlobalState';

const useStyles = makeStyles({
    root: {
        background: '#f1f1f1',
        border: '0px solid transparent',
        outline: 'none',
        color: "#000",
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




const ScreenButton = ({ btnText, setVal, disable }) => {
    
    const style = useStyles()

   


    return (
        <Button classes={{ root: style.root }} disabled={disable ? true : false} onClick={() => setVal()}>{btnText}</Button>
    )
}

export default ScreenButton