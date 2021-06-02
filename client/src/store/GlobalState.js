import React, { useReducer, createContext } from 'react'
import { Reducer } from './Reducer'

const initialState = {
    isCreate: false,
    cancel:false,
    stLink: {
        isNone: false,
        isBarClick: false,
        isButtonClick: true,
    },
    barStyle: {
        template: {
            backgroundColor: '#000000',
            color: '#DAA520'
        },
        content: {
            barName: '',
            mesgBeforeTimer: '',
            mesgAfterTimer: '',
            clickable: 'buttonClickable',
            buttonText: 'Shop Now',
            linkURL: '',
            newTab: false,
        },
        timer: {
            startTime: '',
            endTime: '',
        },
        style: {
            backgroundColor: '#000000',
            buttonBackgroundColor: '#DAA520',
            timerBackgroundColor: '#DAA520',
            textColor: '#DAA520',
            buttonTextColor: '#000000',
            timerDigitColor: '#000000',
            backgroundColorOpacity: 'FF',
            backgroundImage: '',
            buttonAnimation: '',
            fonts: ``,
            language: '',
            fontSize: '14',
            barPadding: '5',
            secToDisplay: '',
            intervalSec: '',
            secToAnimate: '',
        },
        targeting: {
            customerTargeting: '',
            targetLocation: '',
            excludeLocation: ''
        },
        
    }
}

export const RootContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    // Your Global Functions are Define Here

    // Create New Bar - Component
    const creatingBar = (bool) => {
        dispatch({
            type: 'CREATING_BAR',
            payload: bool
        })
    }
    
    // Basic Template - Component
    const selectTemplate = (objData) => {
        dispatch({
            type: 'SELECT_TEMPLATE',
            payload: { data: objData, bar: state.barStyle }
        })
    }
    
    // Content Configuration Form - Component
    const barActions = (objData) => {
        // console.log('= = = = => Bar Actions',objData)
        dispatch({
            type: 'BAR_ACTIONS',
            payload: { data: objData, bar:state.barStyle }
        })
    }
    
    const setContentField = (objData) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'SET_CONTENT_FIELD',
            payload: { data: objData, bar:state.barStyle }
        })
    }

    const openInNewTab = (bool) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'OPEN_IN_NEW_TAB',
            payload: { data: bool, bar:state.barStyle }
        })
    }

    // Timer Configuration Form - Component
    const setTimerField = (objData) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'SET_TIMER_FIELD',
            payload: { data: objData, bar:state.barStyle }
        })
    }

    // Style Configuration Form - Component
    const setStyleField = (objData) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'SET_STYLE_FIELD',
            payload: { data: objData, bar:state.barStyle }
        })
    }

    // Targeting Configuration Form - Component
    const setTargetField = (objData) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'SET_TARGET_FIELD',
            payload: { data: objData, bar:state.barStyle }
        })
    }

    // Targeting Configuration Form - Component
    const cancelTimer = (bool) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'CANCEL_TIMER',
            payload: bool
        })
    }





    return (
        <RootContext.Provider value={{
            first: 'Hello World Global State is Ready !!!!',
            creatingBar,
            selectTemplate,
            barActions,
            setContentField,
            openInNewTab,
            setTimerField,
            setStyleField,
            setTargetField,
            cancelTimer,
            isCreate: state.isCreate,
            cancel:state.cancel,
            stateLink: state.link,
            barStyle: state.barStyle,
            stLink: state.stLink
        }}>
            {children}
        </RootContext.Provider>
    )
}