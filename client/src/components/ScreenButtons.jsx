

import '../App.css'
import React, { useContext } from 'react'
import ScreenButton from './assets/ScreenButton'
import BasicTemplate from './BasicTemplate'
import ContentConfiguration from './ContentConfiguration'
import TimerConfiguration from './TimerConfiguration'
import StyleConfiguration from './StyleConfiguration'
import TargetingConfiguration from './TargetingConfiguration'
import { useState } from 'react'


const ScreenButtons = () => {
    const [basicTemp, setBasicTemp] = useState(true)
    const [contentConfig, setContentConfig] = useState()
    const [timerConfig, setTimerConfig] = useState()
    const [styleConfig, setStyleConfig] = useState()
    const [targetConfig, setTargetConfig] = useState()


    function setActive(basic, content, timer, style, target) {
        setBasicTemp(basic)
        setContentConfig(content)
        setTimerConfig(timer)
        setStyleConfig(style)
        setTargetConfig(target)
    }


    return (
        <>
            <div className="flexRow">
                <ScreenButton btnText='Basic Template' setVal={() => setActive(true, false, false, false, false)} />
                <ScreenButton btnText='Content Configuration' setVal={() => setActive(false, true, false, false, false)} />
                <ScreenButton btnText='Timer Configuration' setVal={() => setActive(false, false, true, false, false)} />
                <ScreenButton btnText='Style Configuration' setVal={() => setActive(false, false, false, true, false)} />
                <ScreenButton btnText='Target Configuration' setVal={() => setActive(false, false, false, false, true)} />
            </div>
            {basicTemp && <BasicTemplate />}
            {contentConfig && <ContentConfiguration />}
            {timerConfig && <TimerConfiguration />}
            {styleConfig && <StyleConfiguration />}
            {targetConfig && <TargetingConfiguration />}
        </>
    )
}

export default ScreenButtons