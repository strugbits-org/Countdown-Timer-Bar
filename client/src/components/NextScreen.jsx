import '../App.css'
import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        width:'150px',
        background: '#f1f1f1',
        border: '0px solid transparent',
        outline: 'none',
        color: "#000",
        fontSize: '13px',
        fontFamily:'Arial, Helvetica, sans-serif !important',
        padding: '7px 6px',
        textTransform: 'none',
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

                

const NextScreen = ({next, errorTxt, count}) => {

    const style = useStyles()
    let isCount = count === 4 ? 0 : count+1

    return (
        <div className="mt12 nextButton">
            <p className='errorMesg'>{errorTxt}</p>
            <Button classes={{ root: style.root }} onClick={() => next(isCount)}>Next</Button>
        </div>
    )
}

export default NextScreen