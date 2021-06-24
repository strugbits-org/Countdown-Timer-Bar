import '../App.css'
import React, { useRef, clsx, useContext } from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { RootContext } from '../store/GlobalState';

const useStyles = makeStyles({
    root: {
        '& .MuiButton-root': {
        },
        background: '#ffbe32',
        border: '0px solid transparent',
        outline: 'none',
        color: "#000",
        fontFamily:'Arial, Helvetica, sans-serif !important',
        fontSize: '13px',
        padding: '3px 7px',
        textTransform: 'none',
        // margin: '0px auto 0px auto !important',
        '&:hover': {
            background: '#ffd477'
        }

    }

})


const Preview = () => {
    const { barStyle } = useContext(RootContext)
    const { mesgBeforeTimer, mesgAfterTimer, clickable, buttonText, linkURL, newTab } = barStyle.content

    useEffect(() => {
        myRef.current.scrollIntoView()
    }, [])

    const style = useStyles()

    const myRef = useRef()

    const { backgroundColor,
        buttonBackgroundColor,
        timerBackgroundColor,
        textColor,
        buttonTextColor,
        timerDigitColor,
        backgroundColorOpacity,
        backgroundImage,
        buttonAnimation,
        fonts,
        language,
        fontSize,
        barPadding } = barStyle.style


    const templateStyle = {
        previewTimer: {
            backgroundColor: backgroundColor+backgroundColorOpacity,
            padding: barPadding + 'px',
            fontFamily: fonts,

        },
        para: {
            color: textColor,
            fontSize: fontSize + 'px'
        },
        small: {
            color: timerBackgroundColor
        },
        time: {
            color: timerDigitColor,
            backgroundColor: timerBackgroundColor
        },
        button: {
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor
        },
        sep: {
            color: timerBackgroundColor
        }

    }

    // Goto Link when user click on button.
    function gotoLinkWithButton(link) {
        const isNew = newTab ? '_blank' : '_self'
        window.open(link, isNew)
    }

    // Goto Link when user click on button.
    function gotoLinkWithBar() {
        const isNew = newTab ? '_blank' : '_self'
        clickable === 'barClickable' && window.open(linkURL, isNew)
    }




    const { previewTimer, para, small, time, button, sep } = templateStyle

    return (
        <div className="contentBox" ref={myRef}>
            <h3>Preview</h3>
            <div className='previewTimer flexRow' style={previewTimer} onClick={() => gotoLinkWithBar()}>
                <span className="para" style={para}>{mesgBeforeTimer !== '' ? mesgBeforeTimer : 'Our anniversary sale will end in'}</span>
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
                        <p className="sep" style={sep}>:</p>
                        <p className="time" style={time}>1</p>
                        <p className="time" style={time}>2</p>
                        <p className="sep" style={sep}>:</p>
                        <p className="time" style={time}>0</p>
                        <p className="time" style={time}>6</p>
                        <p className="sep" style={sep}>:</p>
                        <p className="time" style={time}>4</p>
                        <p className="time" style={time}>6</p>
                    </div>
                </span>
                <span className="para" style={para}>{mesgAfterTimer !== '' ? mesgAfterTimer : '30% off for all orders'}</span>
                {clickable === 'buttonClickable' && (
                    <span className='buttonPlace flexRow'>
                        <Button
                            classes={{ root: style.root }}
                            style={button}
                            className="element"
                            onClick={() => gotoLinkWithButton(linkURL)}>{buttonText}</Button>
                    </span>
                )}
                {/* <span className> X </span> */}

            </div>
        </div>
    )
}

export default Preview