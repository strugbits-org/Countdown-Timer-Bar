import '../../App.css'
import React, { useState, useRef, useContext } from 'react'
import clsx from 'clsx';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import FormButtonsGroup from '../FormButtonsGroup';
import { RootContext } from '../../store/GlobalState';

const useStyles = makeStyles({
    root: {
        margin: '0px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    label: {
        color: 'balck'
    },
    formControl: {
        margin: '0px',
        padding: '0px',
        '& .MuiFormControlLabel-label': {
            fontFamily: 'Arial, Helvetica, sans-serif !important'
        }
    },
    styleRoot: {
        width: '85%',
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
            color: 'black',
            fontSize: '15px'
        },
        '& .MuiFormHelperText-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
        }
    }
})

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

//Styling TextField Component
const InputField = ({ label, helperText, setVal, val, keyName }) => {
    const style = useStyles()
    return (
        <TextField
            label={label}
            id="outlined-margin-dense"
            className={style.styleRoot}
            margin="dense"
            variant="outlined"
            onChange={e => setVal(e, keyName)}
            helperText={helperText}
            value={val}
        />
    )
}


const TargetingForm = () => {
    const style = useStyles()

    // const [customerTargeting, setCustomerTargeting] = useState('')
    // const [targetLocation, setTargetLocation] = useState('')
    // const [excludeLocation, setExcludeLocation] = useState('')

    // Global State
    const { setTargetField, barStyle } = useContext(RootContext)

    const { customerTargeting, targetLocation, excludeLocation } = barStyle.targeting


    // Set Values on Global state
    function handler(event, key) {
        const { value } = event.target
        const obj = {
            keyNameTarget: key,
            valTarget: value
        }
        setTargetField(obj)
    }

    return (
        <div className="overFlow">
            <form noValidate>
                {/* Customer Targeting */}
                <div className='mt12'>
                    <FormControl component="fieldset" className={style.fieldset}>
                        <p><b>Customer Targeting</b></p>
                        <RadioGroup aria-label="customerTargeting" name="customerTargeting" value={customerTargeting} onChange={e => handler(e, 'customerTargeting')}>
                            <FormControlLabel className={style.formControl} value="allCustomers" control={<StyledRadio />} label="All Customers" />
                            <FormControlLabel className={style.formControl} value="basedOnCustomerTag" control={<StyledRadio />} label="Target customers based on customer tag" />
                            <FormControlLabel className={style.formControl} value="basedOnLifetimeSpent" control={<StyledRadio />} label="Target customers based on lifetime spent" />
                        </RadioGroup>
                    </FormControl>
                </div>
                {/* Geo Location Targeting - target locations */}
                <div className="mt12">
                    <InputField
                        label="Geo Location Targeting - target locations"
                        helperText="If you want to display for all locations, leave this field blank"
                        keyName='targetLocation'
                        setVal={handler}
                        val={targetLocation}
                    />
                </div>
                {/* Geo Location Targeting - exclude locations */}
                <div className="mt12">
                    <InputField
                        label="Geo Location Targeting - exclude locations"
                        helperText="If you do not want to exclude any locations, leave this field blank"
                        keyName='excludeLocation'
                        setVal={handler}
                        val={excludeLocation}
                    />
                </div>
            </form>
            <FormButtonsGroup />
        </div>

    )
}

export default TargetingForm