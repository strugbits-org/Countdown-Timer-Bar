

import '../App.css'
import React, { useContext, useEffect } from 'react'
import ScreenButton from './assets/ScreenButton'
import BasicTemplate from './BasicTemplate'
import ContentConfiguration from './ContentConfiguration'
import TimerConfiguration from './TimerConfiguration'
import StyleConfiguration from './StyleConfiguration'
import TargetingConfiguration from './TargetingConfiguration'
import NextScreen from './NextScreen'
import FormButtonsGroup from './FormButtonsGroup'
import { useState } from 'react'
import { RootContext } from '../store/GlobalState'


const ScreenButtons = () => {
    // // Get barstyle from Global State
    const { contentValidation } = useContext(RootContext)

    // // Content from barstyle 
    // const { content } = barStyle

    // ----------------------------Local state
    const [errorText, setErrorText] = useState('')

    const [screenCounter, setScreenCounter] = useState(0)

    // const [basicForm, setBasicForm] = useState(true)
    // const [contentForm, setContentForm] = useState(false)
    // const [timerForm, setTimerForm] = useState(false)
    // const [styleForm, setStyleForm] = useState(false)
    // const [targetForm, setTargetForm] = useState(false)


    // const [basicTemp, setBasicTemp] = useState(true)
    // const [contentConfig, setContentConfig] = useState()
    // const [timerConfig, setTimerConfig] = useState()
    // const [styleConfig, setStyleConfig] = useState()
    // const [targetConfig, setTargetConfig] = useState()

    return (
        <React.Fragment>
            <div className="flexRow">
                <ScreenButton btnText='Basic Template' setVal={setScreenCounter} val={0} count={screenCounter}/>
                <ScreenButton btnText='Content Configuration' setVal={setScreenCounter} val={1} count={screenCounter}/>
                <ScreenButton btnText='Timer Configuration' setVal={setScreenCounter} val={2} count={screenCounter}/>
                <ScreenButton btnText='Style Configuration' setVal={setScreenCounter} val={3} count={screenCounter}/>
                <ScreenButton btnText='Target Configuration' setVal={setScreenCounter} val={4} count={screenCounter}/>
            </div>

            {screenCounter === 0 && <BasicTemplate />}
            {screenCounter === 1 && <ContentConfiguration/>}
            {screenCounter === 2 && <TimerConfiguration />}
            {screenCounter === 3 && <StyleConfiguration />}
            {screenCounter === 4 && <TargetingConfiguration />}
            {screenCounter === 4 ? <FormButtonsGroup /> : <NextScreen count={screenCounter} next={setScreenCounter} errorTxt={''} />}
        </React.Fragment>
    )
}

export default ScreenButtons




{/* <div className="flexRow">
                <ScreenButton btnText='Basic Template' setVal={() => setActive(true, false, false, false, false)} disable={basicInit ? false : true} />
                <ScreenButton btnText='Content Configuration' setVal={() => setActive(false, true, false, false, false)} disable={contentInit ? false : true} />
                <ScreenButton btnText='Timer Configuration' setVal={() => setActive(false, false, true, false, false)} disable={timerInit ? false : true} />
                <ScreenButton btnText='Style Configuration' setVal={() => setActive(false, false, false, true, false)} disable={styleInit ? false : true} />
                <ScreenButton btnText='Target Configuration' setVal={() => setActive(false, false, false, false, true)} disable={targetInit ? false : true} />
            </div> */}
            {/* {basicTemp && <BasicTemplate />}
            {contentConfig && <ContentConfiguration />}
            {timerConfig && <TimerConfiguration />}
            {styleConfig && <StyleConfiguration />}
            {targetConfig && <TargetingConfiguration />}
            {targetConfig ? <FormButtonsGroup /> : <NextScreen errorTxt={errorText} count={screenCounter} next={setScreenCounter} />} */}