

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


const ScreenButtons = () => {
    const [screenCounter, setScreenCounter] = useState(1)

    const [basicInit, setBasicInit] = useState(true)
    const [contentInit, setContentInit] = useState()
    const [timerInit, setTimerInit] = useState()
    const [styleInit, setStyleInit] = useState()
    const [targetInit, setTargetInit] = useState()


    const [basicTemp, setBasicTemp] = useState(true)
    const [contentConfig, setContentConfig] = useState()
    const [timerConfig, setTimerConfig] = useState()
    const [styleConfig, setStyleConfig] = useState()
    const [targetConfig, setTargetConfig] = useState()

    function setActive(basic, content, timer, style, target) {
        basic && setScreenCounter(1)
        content && setScreenCounter(2)
        timer && setScreenCounter(3)
        style && setScreenCounter(4)
        target && setScreenCounter(5)

        setBasicTemp(basic)
        setContentConfig(content)
        setTimerConfig(timer)
        setStyleConfig(style)
        setTargetConfig(target)
    }

    function nextScreen() {
        let counter = screenCounter

        switch (counter) {
            case 1:
                setActive(true, false, false, false, false);
                console.log('Case 1', counter)
                break;

            case 2:
                console.log('Case 2', counter)
                setActive(false, true, false, false, false)
                setContentInit(true);
                break;
            case 3:
                console.log('Case 3', counter)
                setActive(false, false, true, false, false)
                setTimerInit(true);
                break


            case 4:
                console.log('Case 4', counter)
                setActive(false, false, false, true, false);
                setStyleInit(true);
                break
            case 5:
                console.log('Case 5', counter)
                setActive(false, false, false, false, true)
                setTargetInit(true);
                break

            default:
                console.log('Kuch nai chala')
        }
        
        setScreenCounter(screenCounter+1)


        
    }

    useEffect(() => {
        screenCounter === 1 && setScreenCounter(2)
    }, [screenCounter])


    return (
        <>
            <div className="flexRow">
                <ScreenButton btnText='Basic Template' setVal={() => setActive(true, false, false, false, false)} disable={basicInit ? false : true} />
                <ScreenButton btnText='Content Configuration' setVal={() => setActive(false, true, false, false, false)} disable={contentInit ? false : true} />
                <ScreenButton btnText='Timer Configuration' setVal={() => setActive(false, false, true, false, false)} disable={timerInit ? false : true} />
                <ScreenButton btnText='Style Configuration' setVal={() => setActive(false, false, false, true, false)} disable={styleInit ? false : true} />
                <ScreenButton btnText='Target Configuration' setVal={() => setActive(false, false, false, false, true)} disable={targetInit ? false : true} />
            </div>
            {basicTemp && <BasicTemplate />}
            {contentConfig && <ContentConfiguration />}
            {timerConfig && <TimerConfiguration />}
            {styleConfig && <StyleConfiguration />}
            {targetConfig && <TargetingConfiguration />}
            {targetConfig ? <FormButtonsGroup /> : <NextScreen next={nextScreen} />}

        </>
    )
}

export default ScreenButtons