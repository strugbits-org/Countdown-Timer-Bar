import '../App.css'
import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { RootContext } from '../store/GlobalState';



const useStyles = makeStyles({
    root: {
        width: '150px',
        background: '#f1f1f1',
        border: '0px solid transparent',
        outline: 'none',
        color: "#000",
        fontSize: '13px',
        fontFamily: 'Arial, Helvetica, sans-serif !important',
        padding: '7px 6px',
        textTransform: 'none',
        '&:hover': {
            background: '#7866d1',
            color: '#f1f1f1'
        }

    },
    active: {
        background: '#7866d1',
        color: '#f1f1f1'
    }

})



const NextScreen = ({ next, errorTxt, count }) => {
    // Get barstyle from Global State
    const { contentValidation, barStyle } = useContext(RootContext)

    // Get values from barStyle.content
    const { barName, mesgBeforeTimer, mesgAfterTimer, clickable, buttonText, linkURL } = barStyle.content
    
    // Get values from barStyle.timer
    const { startTime, endTime } = barStyle.timer

    const [errorMesg, setErrorMesg] = useState(errorTxt)


    const style = useStyles()
    let isCount = count === 4 ? 0 : count + 1

    function setMesg() {
        setErrorMesg('Please fill all fileds correctly')
        setTimeout(() => { setErrorMesg('') }, 3000)
    }

    function toggleScr() {
        // console.log()
        if (count === 1) {
            if (barName.length > 3 && mesgBeforeTimer.length > 3 && mesgAfterTimer.length > 3) {
                if (clickable === 'buttonClickable') {
                    buttonText.length > 3 && linkURL.includes('http') ? next(isCount) : setMesg();
                }
                else if (clickable === 'barClickable') {
                    console.log(' - - -  - --  - ->')
                    linkURL.includes('http') ? next(isCount) : setMesg();
                }
                else if (clickable === 'none') {
                    next(isCount);
                }
                else {
                    setMesg()
                }
            }
            else {
                setMesg()
            }
        }
        if(count === 2){
            if(startTime !== '' && endTime !== ''){
                next(isCount);
            }
            else{
                setMesg()
            }
        }
    }




    return (
        <div className="mt12 nextButton">
            <p className='errorMesg'>{errorMesg}</p>
            <Button type="submit" classes={{ root: style.root }} onClick={() => toggleScr()}>Next</Button>
        </div>
    )
}

export default NextScreen


// if(barName && mesgBeforeTimer && mesgAfterTimer){
//     if(clickable === 'buttonClickable') buttonText && linkURL && setValidation(true, 'contentValidation');
//     if(clickable === 'barClickable') linkURL && setValidation(true, 'contentValidation');
//     clickable === 'none' && setValidation(true, 'contentValidation');
// }


