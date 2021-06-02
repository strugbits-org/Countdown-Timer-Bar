import '../../App.css'
import saleImage from '../../Images/image1.jpg'
import React, { useState, useRef, useContext } from 'react'
import { TextField, FormControl, OutlinedInput, InputAdornment, FormHelperText, Input } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { RootContext } from '../../store/GlobalState';

const useStyles = makeStyles({
    // ColorField Component
    root: {
        width: 'calc(100% - 30px)',
        color: 'grey',
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
            height: '30px',
            padding: '0px',
            fontSize: '14px',
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
            color: 'gray',
        },
    },
    // For Upload Background Image Field
    rootFile: {
        width: '55%',
        color: 'grey',
        marginTop: '0px',
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
            padding: '0px',
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
            color: 'gray',
        },
        '& .MuiFormHelperText-root': {
            color:'red',
            fontFamily: 'Arial, Helvetica, sans-serif !important',
        }
    },
    // For StyleField Component
    styleRoot: {
        width: '75%',
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
            fontSize: '15px',
        },
        '& .MuiFormHelperText-root': {
            fontFamily: 'Arial, Helvetica, sans-serif !important',
        }
    }
})

//Color Field Component
const ColorField = ({ color, setColor, fieldName, keyName }) => {
    const style = useStyles()

    return (
        <div className="colorField flexRow">
            <input className="colorPicker"
                type="color"
                name="pickColor"
                value={color}
                onChange={(e) => setColor(e, keyName)}
            />
            <TextField
                label={fieldName}
                id="outlined-margin-dense"
                className={style.root}
                defaultValue={color}
                margin="dense"
                variant="outlined"
                value={color}
            />
        </div>
    )
}

//Styling Field Component
const StyleField = ({ label, helperText, adorment, setStyle, styleValue, keyName }) => {
    const style = useStyles()
    return (
        <TextField
            label={label}
            id="outlined-margin-dense"
            className={style.styleRoot}
            margin="dense"
            variant="outlined"
            onChange={e => setStyle(e, keyName)}
            helperText={helperText}
            InputProps={{
                endAdornment: <InputAdornment position="start">{<b style={{ fontSize: '11px' }}>{adorment}</b>}</InputAdornment>,
            }}
            value={styleValue}
        />
    )
}

//Its part of a Slider Bar
function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

//Select Animation Style
function selectAnimation(event, setButtonAnimation) {
    event.preventDefault()
    console.log(event.target.innerText)
    setButtonAnimation(event.target.innerText)

}

//Select Font Style
function selectFont(event, setFont) {
    event.preventDefault()
    console.log(event.target.innerText)
    setFont(event.target.innerText)
}

//Select Language
function selectLanguage(event, setLanguage) {
    event.preventDefault()
    console.log(event.target.innerText)
    setLanguage(event.target.innerText)
}

const StyleForm = () => {
    const style = useStyles()

    // const [backgroundColor, setBackgroundColor] = useState('#f1f1f1')
    // const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#F1A2e7')
    // const [timerBackgroundColor, setTimerBackgroundColor] = useState('#000')
    // const [textColor, setTextColor] = useState('#A2A3e3')
    // const [buttonTextColor, setButtonTextColor] = useState('#fff')
    // const [timerDigitColor, setTimerDigitColor] = useState('#000')
    // const [backgroundOpacity, setBackgroundOpacity] = useState(1)
    // const [font, setFont] = useState('')
    // const [fontSize, setFontSize] = useState('16')
    // const [barPadding, setBarPadding] = useState('0')
    // const [secToDisplay, setSecToDisplay] = useState('0')
    // const [intervalSeconds, setIntervalSeconds] = useState('0')
    // const [secondsToAnimate, setSecondsToAnimate] = useState('0')
    
    const [backgroundStyles, setBackgroundStyles] = useState({
        noImage: {
            background: '#dddddd',
            color: 'black',
            text: 'No Image'
        },
        sale1: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Sale'
        },
        sale2: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Summer Sale'
        },
        sale3: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Winter Sale'
        },
        sale4: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Discount Sale'
        },
        sale5: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'New Year Sale'
        },
        sale6: {
            background: '#dddddd',
            color: 'black',
            text: 'No Image'
        },
        sale7: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Sale'
        },
        sale8: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Summer Sale'
        },
        sale9: {
            background: `linear-gradient(to bottom,#c23b3b80,#c23b3b80),url('../src/Images/image1.jpg')`,
            color: 'white',
            text: 'Winter Sale'
        },
    })

    const [mesgUploadImage,setMesgUploadImage] = useState('')
    const [uploadBackground, setUploadBackground] = useState([])

    const [buttonAnimation, setButtonAnimation] = useState('')


    const [language, setLanguage] = useState('')


    // For Set a Background Color Opacity Value in Number 
    function getBgOpacity(val) {
        return val === '00' ? 0 : val === '1A' ? 0.1 :
            val === '33' ? 0.2 : val === '4D' ? 0.3 :
            val === '66' ? 0.4 : val === '80' ? 0.5 :
            val === '99' ? 0.6 : val === 'B3' ? 0.7 :
            val === 'CC' ? 0.8 : val === 'E6' ? 0.9 :
            val === 'FF' ? 1 : 1
    }


    // Global State
    const { setStyleField, barStyle } = useContext(RootContext)
    const { backgroundColor,
        buttonBackgroundColor,
        timerBackgroundColor,
        textColor,
        buttonTextColor,
        timerDigitColor,
        backgroundColorOpacity,
        fontSize,
        barPadding,
        secToDisplay,
        intervalSec,
        secToAnimate

    } = barStyle.style

    // Set Values on Global state
    function handler(event, key) {
        const { value } = event.target
        const obj = {
            keyNameStyle: key,
            valStyle: value
        }
        setStyleField(obj)
    }

    //Font handler
    function fontHandler(event, key) {
        event.preventDefault()
        const { id } = event.target
        console.log(id, key)
        const obj = {
            keyNameStyle: key,
            valStyle: id
        }
        console.log(id, key, obj)
        setStyleField(obj)
    }

    // For Slider (Background Opcaity)
    const handleSliderChange = (event, newValue) => {
        console.log(event, newValue)

        // For Set a Background Color Opacity Value in String 
        const bgColorOpacity = newValue === 0 ? '00' : newValue === 0.1 ? '1A' :
            newValue === 0.2 ? '33' : newValue === 0.3 ? '4D' :
                newValue === 0.4 ? '66' : newValue === 0.5 ? '80' :
                    newValue === 0.6 ? '99' : newValue === 0.7 ? 'B3' :
                        newValue === 0.8 ? 'CC' : newValue === 0.9 ? 'E6' :
                            newValue === 1 ? 'FF' : 1

        console.log('bgColorOpacity', bgColorOpacity)
        handler({ target: { value: bgColorOpacity } }, 'backgroundColorOpacity')
    };

    // For Background Image
    const uploadImage = (event) => {
        const {name, type} = event.target.files[0]
        setMesgUploadImage('')
        if(type === 'image/png' || type === 'image/jpeg' || type === 'image/jpg'){
            console.log(name, type)
            handler({target:{value:name}}, 'backgroundImage')
        }
        else{
            setMesgUploadImage('Only Image accepted with following format (.png, .jpg, .jpeg)')
        }        
    }

    return (
        <form className="overFlow defaultFont" noValidate>
            {/* Background Color */}
            <div className="selectColor flexRow mt12">
                <ColorField fieldName="Background Color" color={backgroundColor} setColor={handler} keyName='backgroundColor' />
                <ColorField fieldName="Button Background Color" color={buttonBackgroundColor} setColor={handler} keyName='buttonBackgroundColor' />
                <ColorField fieldName="Timer Background Color" color={timerBackgroundColor} setColor={handler} keyName='timerBackgroundColor' />
                <ColorField fieldName="Text Color" color={textColor} setColor={handler} keyName='textColor' />
                <ColorField fieldName="Button Text Color" color={buttonTextColor} setColor={handler} keyName='buttonTextColor' />
                <ColorField fieldName="Timer Digit Color" color={timerDigitColor} setColor={handler} keyName='timerDigitColor' />
            </div>

            {/* Slider */}
            <div className="slider mt12">
                <Typography gutterBottom>Background Color Opacity</Typography>
                <Slider
                    value={getBgOpacity(backgroundColorOpacity)}
                    onChange={handleSliderChange}
                    step={0.1}
                    min={0}
                    max={1}
                    marks
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="custom thumb label"
                />

                {/* <Slider
                    // ValueLabelComponent={ValueLabelComponent}
                    // aria-label="custom thumb label"
                    value={typeof backgroundOpacity === 'number' ? backgroundOpacity : 0}
                    onChange={handleChange}
                    aria-labelledby="input-slider"

                /> */}
                <small>The range is from 0 to 1, 0 = transparent and 1 =  solid </small>
            </div>

            {/* Background Images */}
            <div className="backgroundImages mt12">
                <p>Background Images: </p>
                <div className="backgroundStyles flexRow">
                    {
                        Object.keys(backgroundStyles).map(val => {
                            const { background, color, text } = backgroundStyles[val]
                            return (
                                <div className="design" key={val} style={{ background, color }}>{text}</div>
                            )
                        })

                    }
                </div>
            </div>

            {/* Upload Background Image */}
            <div className="uploadBackgroundImage mt12">
                <p className='p0 m0'>Upload Background Image</p>
                <TextField
                    id="outlined-margin-dense"
                    type='file'
                    variant="outlined"
                    margin="dense"
                    helperText={mesgUploadImage}
                    className={style.rootFile}
                    value={uploadBackground}
                    onChange={e => uploadImage(e)}
                />

            </div>

            {/* Button Animation*/}
            <div className="buttonAnimation mt12">
                <p className='p0 m0'>Button Animation</p>
                <div className="buttons flexRow">
                    <button className="selectButton" onClick={e => selectAnimation(e, setButtonAnimation)}>No Animation</button>
                    <button className="selectButton">Emiting</button>
                    <button className="selectButton">Bounce</button>
                    <button className="selectButton">Flash</button>
                    <button className="selectButton">Rubber Band</button>
                    <button className="selectButton">Swing</button>
                    <button className="selectButton">Tada</button>
                    <button className="selectButton">Wobble</button>
                    <button className="selectButton">Jello</button>
                    <button className="selectButton">Flip</button>
                </div>

            </div>

            {/* Fonts */}
            <div className="fonts mt12">
                <div className="buttonAnimation mt12">
                    <p className='p0 m0'>Fonts</p>
                    <div className="buttons flexRow">
                        <button className="selectButton" style={{ fontFamily: "'Lato', sans-serif" }} id={`'Lato', sans-serif`} onClick={e => fontHandler(e, 'fonts')}>Lato</button>
                        <button className="selectButton" style={{ fontFamily: "'Roboto', sans-serif" }} id={`'Roboto', sans-serif`} onClick={e => fontHandler(e, 'fonts')}>Roboto</button>
                        <button className="selectButton" style={{ fontFamily: "'Josefin Sans', sans-serif" }} id={`'Josefin Sans', sans-serif`} onClick={e => fontHandler(e, 'fonts')}>Josefin Sans</button>
                        <button className="selectButton" style={{ fontFamily: "'Open Sans', sans-serif" }} id={`'Open Sans', sans-serif`} onClick={e => fontHandler(e, 'fonts')}>Open Sans</button>
                        {/* <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Carter One</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Roboto</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Josefin Sans</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Open Sans</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Carter One</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Roboto</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Josefin Sans</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Open Sans</button>
                        <button className="selectButton" id={``} onClick={e => fontHandler(e, 'fonts')}>Carter One</button> */}
                    </div>

                </div>
            </div>

            {/* Language for "Days Hours Minutes Seconds" */}
            <div className="languageForTimer mt12">
                <div className="buttonAnimation mt12">
                    <p className='p0 m0'>Language for "Days Hours Minutes Seconds":</p>
                    <div className="buttons flexRow">
                        <button className="selectButton" onClick={e => selectLanguage(e, setLanguage)}>English</button>
                        <button className="selectButton">Arabic</button>
                        <button className="selectButton">Chinese Simplified</button>
                        <button className="selectButton">Chinese Traditional</button>
                        <button className="selectButton">Japanese</button>
                        {/* <button className="selectButton">Korean</button>
                        <button className="selectButton">Danish</button>
                        <button className="selectButton">German</button>
                        <button className="selectButton">Spanish</button>
                        <button className="selectButton">Finnish</button>
                        <button className="selectButton">French</button>
                        <button className="selectButton">Italian</button>
                        <button className="selectButton">Latvian</button>
                        <button className="selectButton">Dutch</button>
                        <button className="selectButton">Thai</button>
                        <button className="selectButton">French</button> */}
                    </div>

                </div>

            </div>

            {/* Font Size */}
            <div className="fontSize mt12">

                <StyleField
                    label='Font Size'
                    helperText="Bar Height is determined by Font Size and Bar Padding"
                    adorment="PX"
                    setStyle={handler}
                    keyName='fontSize'
                    styleValue={fontSize}
                />
            </div>

            {/* Bar Padding */}
            <div className="barPadding mt12">
                <StyleField
                    label='Bar padding'
                    helperText="Space Between text and upper/lower border"
                    adorment="PX"
                    keyName='barPadding'
                    setStyle={handler}
                    styleValue={barPadding}
                />
            </div>

            {/* Seconds To Display Before Retraction */}
            <div className="secToDiaplay mt12">
                <StyleField
                    label='Seconds To Display Before Retraction'
                    helperText="Bar will necer retract if this value is set 0"
                    adorment="Seconds"
                    keyName='secToDisplay'
                    setStyle={handler}
                    styleValue={secToDisplay}
                />
            </div>

            {/* Interval Seconds Between  Displays On Different Pages */}
            <div className="intervalSeconds mt12">
                <StyleField
                    label='Interval Seconds Between  Displays On Different Pages'
                    helperText="Wait these many seconds to show Countdown Timer Bar again"
                    adorment="Seconds"
                    keyName='intervalSec'
                    setStyle={handler}
                    styleValue={intervalSec}
                />
            </div>

            {/* Seconds to Animate when Displaying/Hiding Bar */}
            <div className="secondsToAnimate mt12">
                <StyleField
                    label='Seconds to Animate when Displaying/Hiding Bar'
                    helperText="Bar will not animate if set to 0"
                    adorment="Seconds"
                    keyName='secToAnimate'
                    setStyle={handler}
                    styleValue={secToAnimate}
                />
            </div>
        </form>


    )
}

export default StyleForm