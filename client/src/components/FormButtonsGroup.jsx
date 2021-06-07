import '../App.css'
import React, { useState, useContext } from 'react'
import { RootContext } from '../store/GlobalState'


const FormButtonsGroup = () => {
    const [collapse, setCollapse] = useState(false)
    const { first, barStyle, cancelTimer, cancel, hideList, initialBar, defaultBarStyle } = useContext(RootContext)
    // Content
    const { barName, mesgBeforeTimer, mesgAfterTimer, clickable, buttonText, linkURL, newTab } = barStyle.content
    // Timer
    const { startTime, endTime } = barStyle.timer
    // Style
    const { backgroundColor,
        buttonBackgroundColor,
        timerBackgroundColor,
        textColor,
        buttonTextColor,
        timerDigitColor,
        backgroundColorOpacity,
        backgroundImage,
        // buttonAnimation,
        fonts,
        // language,
        fontSize,
        barPadding,
        secToDisplay,
        intervalSec,
        secToAnimate

    } = barStyle.style
    // Targeting
    const { customerTargeting, targetLocation, excludeLocation } = barStyle.targeting



    function btnCancel() {
        console.log(cancel)
        cancelTimer(true)
        hideList(true)
        initialBar(defaultBarStyle)
    }

    function btnSave() {
        console.log('Data Saving', barStyle)

        var raw = JSON.stringify({
            "name": barName,
            "messageBeforeTimer": mesgBeforeTimer,
            "messageAfterTimer": mesgAfterTimer,
            "linkUrl": linkURL,
            "barClickable": clickable,
            "buttonText": buttonText,
            "newTab": newTab,
            "timer": {
                "startDate": startTime,
                "endDate": endTime
            },
            "styleSchema": {
                "backgroundColor": backgroundColor,
                "buttonBackgroundColor": buttonBackgroundColor,
                "timerBackgroundColor": timerBackgroundColor,
                "textColor": textColor,
                "buttonTextColor": buttonTextColor,
                "timerDigitColor": timerDigitColor,
                "backgroundColorOpacity": backgroundColorOpacity,
                "backgroundImage": backgroundImage,
                "buttonAnimation": '',
                "fonts": fonts,
                "language": '',
                "fontSize": fontSize,
                "barPadding": barPadding,
                "secondsDisplay": secToDisplay,
                "intervalSeconds": intervalSec,
                "animateSeconds": secToAnimate
            },
            "targetSchema": {
                "customerTargeting": customerTargeting,
                "targetLocations": targetLocation,
                "excludedLocations": excludeLocation
            }
        });

        var header = {
            "Content-Type": "application/json"
        }

        var requestOptions = {
            method: 'POST',
            headers: header,
            body: raw,
            redirect: 'follow'
        };

        fetch("/admin/createtimer", requestOptions)
            .then(response => response.text())
            .then(result => console.log('POST RESULT - - - - >', JSON.parse(result)))
            .catch(error => console.log('error', error));

    }

    return (
        <div className="mt12">
            <div className='flexRow flexRight'>
                <button className="button" onClick={btnCancel} > Cancel </button>
                <button className="button" onClick={btnSave} > Save </button>
            </div>
        </div>
    )
}

export default FormButtonsGroup