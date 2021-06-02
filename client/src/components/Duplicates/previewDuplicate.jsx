import '../App.css'
import React, {useRef, clsx} from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        background: '#ffbe32',
        border: '0px solid transparent',
        outline: 'none',
        color: "#000",
        fontSize: '13px',
        padding: '3px 10px',
        textTransform: 'none',
        margin: '0px auto 0px auto !important',
        '&:hover': {
            background: '#ffd477'
        }

    }

})


const Preview = ({selectedTemplate}) => {
    useEffect(()=>{
        myRef.current.scrollIntoView()
    })

    const style = useStyles()

    const myRef = useRef()
    
    const {color, backgroundColor} = selectedTemplate
    const templateStyle = {
        previewTimer:{
            backgroundColor
        },
        para:{
            color
        },
        small:{
            color
        },
        time:{
            color:backgroundColor,
            backgroundColor:color
        },
        button:{
            backgroundColor:color,
            color:backgroundColor
        }

    } 
    
    
    
    const {previewTimer, para, small, time, button } = templateStyle
    
    return (
        <div className="contentBox" ref={myRef}>
            <h3>Preview</h3>
            <div className='previewTimer flexRow' style={previewTimer}>
                <span className="para" style={para}>Our anniversary sale will end in</span>
                <span className='timer flexColumn'>
                    <div className="heading flexRow">
                        <small className="small" style={small}>Days</small>
                        <small className="small" style={small}>Hours</small>
                        <small className="small" style={small}>Minutes</small>
                        <small className="small" style={small}>Seconds</small>
                    </div>
                    <div className="counter flexRow">
                        <p className="time" style={time}>0</p>
                        <p className="time" style={time}>2</p>
                        <p className="sep">:</p>
                        <p className="time" style={time}>1</p>
                        <p className="time" style={time}>2</p>
                        <p className="sep">:</p>
                        <p className="time" style={time}>0</p>
                        <p className="time" style={time}>6</p>
                        <p className="sep">:</p>
                        <p className="time" style={time}>4</p>
                        <p className="time" style={time}>6</p>
                    </div>  
                </span>
                <span className="para" style={para}>30% off for all orders</span>
                <span><Button classes={{root:style.root}} style={button} onClick={() => myRef.current.scrollIntoView()}>Shop Now</Button></span>

            </div>
        </div>
    )
}

export default Preview