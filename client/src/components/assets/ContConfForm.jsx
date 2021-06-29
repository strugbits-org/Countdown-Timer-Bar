import '../../App.css'
import React, { useState, useRef, useContext } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { RootContext } from '../../store/GlobalState';
import NextScreen from '../NextScreen';

const useStyles = makeStyles({
    root: {
        width: '49%',
        color: 'grey',
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
                color: 'black',
            },
        },
        '& .MuiFormLabel-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
            color: 'grey'
        },
        '& .MuiFormHelperText-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
        }
    },
    formControlLabel: {
        '& .MuiFormControlLabel-label': {
            fontFamily: 'Arial, Helvetica, sans-serif !important'
        }
    },
    // forSelect: {
    //     '& .MuiSelect-select': {
    //         fontFamily: 'Arial, Helvetica, sans-serif !important',

    //     }
    // }

})



const ContConfForm = () => {
    const style = useStyles()


    // Global State - - - - 

    const { barActions, barStyle, setContentField, openInNewTab, contentValidation, setValidation } = useContext(RootContext)
    const { barName, mesgBeforeTimer, mesgAfterTimer, clickable, buttonText, linkURL, newTab } = barStyle.content

    // - - - - - Global State 

    //Local State - - - - 
    const [isNone, setIsNone] = useState(false)
    const [isBarClick, setIsBarClick] = useState(false)
    const [isButtonClick, setIsButtonClick] = useState(true)
    const [isValiate, setValidate] = useState(false)


    // Set Values on Global state
    function handler(event, key) {
        const { value } = event.target
        // console.log(' - - -  - -> value & key',value, key)
        // if(value.length > 3){
            const obj = {
                keyName: key,
                val: value
            }
            setContentField(obj)
        // }
    }

    // Set Values on Global state
    function handlerForNewTab(event, key) {
        const { checked } = event.target
        console.log(event, checked)
        openInNewTab(checked)
    }

    // Set Link Fields, changing on dropdown selection.
    function setLinkFields(event) {
        const { value } = event.target

        value === 'none' && setFieldState(true, false, false)
        value === 'barClickable' && setFieldState(false, true, false)
        value === 'buttonClickable' && setFieldState(false, false, true)

        function setFieldState(none, barClick, buttonClick) {
            setIsNone(none)
            setIsBarClick(barClick)
            setIsButtonClick(buttonClick)

            // Set Values in Object For barActions
            const obj = {
                stLink: {
                    isNone: none,
                    isBarClick: barClick,
                    isButtonClick: buttonClick,
                },
                clickable: value
            }
            // Set Values Globaly
            barActions(obj)
        }
    }

    return (
        <form className="overFlow" noValidate>
            {/* Bar Name */}
            <div className='mt12'>
                <TextField
                    label="Name"
                    id="outlined-margin-dense"
                    className={style.root}
                    helperText="For your own internal reference. Only you can see it"
                    margin="dense"
                    variant="outlined"
                    placeholder="My First Countdown Timer Bar"
                    value={barName}
                    onChange={(e) => handler(e, 'barName')}
                />
            </div>

            {/* Message Before Timer & Message After Timer */}
            <div className="dualInput flexRow mt12">
                <TextField
                    label="Message before timer"
                    id="outlined-margin-dense"
                    className={style.root}
                    margin="dense"
                    variant="outlined"
                    placeholder="Our anniversary sale will end in"
                    value={mesgBeforeTimer}
                    onChange={(e) => handler(e, 'mesgBeforeTimer')}
                />
                <TextField
                    label="Message after timer"
                    id="outlined-margin-dense"
                    className={style.root}
                    margin="dense"
                    variant="outlined"
                    placeholder="30% off for all orders"
                    value={mesgAfterTimer}
                    onChange={(e) => handler(e, 'mesgAfterTimer')}
                />
            </div>

            {/* Bar Clickable */}
            <div className='mt12'>
                <FormControl variant="outlined" className={style.root}>
                    <InputLabel id="demo-simple-select-outlined-label">Bar Clickable</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={clickable}
                        onChange={(e) => setLinkFields(e)}
                        label="Bar Clickable"
                        margin='dense'
                        variant='outlined'
                        helperText="Place a 'X' button on the bar, so users can hide the bar manually"
                    >
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="barClickable">Go to link when click on Bar</MenuItem>
                        <MenuItem value="buttonClickable">Go to link when click on Button</MenuItem>

                    </Select>
                    <FormHelperText>A clickable button will be displayed on the bar. The button will be removed, and the bar will not have any link</FormHelperText>
                </FormControl>
            </div>

            {/* Button Text */}
            {isButtonClick && (
                <div className='mt12'>
                    <TextField
                        label="Button Text"
                        id="outlined-margin-dense"
                        className={style.root}
                        helperText="Text on the button"
                        margin="dense"
                        variant="outlined"
                        placeholder="Shop Now"
                        value={buttonText}
                        onChange={(e) => handler(e, 'buttonText')}
                    />
                </div>
            )
            }

            {/* Link URL */}
            {(isBarClick || isButtonClick) && (
                <div className='mt12'>
                    <TextField
                        label="Link URL"
                        id="outlined-margin-dense"
                        className={style.root}
                        helperText="Dash to the provided link address after clicking the bar"
                        margin="dense"
                        variant="outlined"
                        type='url'
                        placeholder="e.g. https://testing.com/test"
                        value={linkURL}
                        onChange={(e) => handler(e, 'linkURL')}
                    />
                </div>
            )
            }

            {/* Open Link in New Tab */}
            {(isBarClick || isButtonClick) && (
                <div className='mt12'>
                    <FormControlLabel
                        className={style.formControlLabel}
                        control={
                            <Checkbox
                                checked={newTab}
                                onChange={e => handlerForNewTab(e, 'newTab')}
                                name="checkedB"
                                color="default"
                            />
                        }
                        label="Oper the link in a NEW tab after clicking the bar"
                    />
                </div>
            )
            }
        </form>

    )
}

export default ContConfForm