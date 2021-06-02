import '../../App.css'
import React, { useState, useRef, useContext } from 'react'
import { TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { RootContext } from '../../store/GlobalState';

const useStyles = makeStyles({
    root: {
        width: '49%',
        color: 'grey',
        '& .MuiOutlinedInput-root': {
            fontFamily:'Arial, Helvetica, sans-serif !important',
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
                color: 'black',
            },
        },
        '& .MuiFormLabel-root': {
            fontFamily:'Arial, Helvetica, sans-serif !important',
            color: 'grey'
        },
        '& .MuiFormHelperText-root':{
            fontFamily:'Arial, Helvetica, sans-serif !important',
        }
    },
})

const TimerForm = () => {
    const style = useStyles()

    // Global State
    const {setTimerField, barStyle} = useContext(RootContext)
    const {startTime, endTime} = barStyle.timer

    // Set Values on Global state
    function handler(event, key) {
        const { value } = event.target
        const obj = {
            keyNameTimer:key,
            valTimer:value
        }
        setTimerField(obj)
    }

    return (
        <form className="overFlow" noValidate>
            <div  className="timerForm flexRow">
                <TextField
                    id="datetime-local"
                    label="Start Time"
                    type="datetime-local"
                    helperText="The bar will display during this period"
                    className={style.root}
                    margin="dense"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={startTime}
                    onChange={(e) => handler(e, 'startTime')}
                />
                <TextField
                    id="datetime-local"
                    label="End Time"
                    type="datetime-local"
                    helperText="The bar will display during this period"
                    className={style.root}
                    margin="dense"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={endTime}
                    onChange={(e) => handler(e, 'endTime')}
                />
            </div>
        </form>

    )
}

export default TimerForm