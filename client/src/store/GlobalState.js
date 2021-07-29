import React, { useReducer, createContext } from 'react'
import { Reducer } from './Reducer'

const initialState = {
    isCreate: false,
    isHideList:true,
    cancel:false,
    stLink: {
        isNone: false,
        isBarClick: false,
        isButtonClick: true,
    },
    // Content Form Validation
    contentValidation:false,
    // Default Bar State its use only when user click on cancel timer for set default values of barstyle.
    defaultBarStyle: {
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
        
    },
    //Store values when creating time bar (First Store locally then data saved on database with fetch API)
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
        
    },
    test:{},
    //Store All Timers of a User (Come from a fetch API)
    timerList:[],
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

    // For Cancel Button When Click on Cancel hide form.
    const cancelTimer = (bool) => {
        // console.log('setContentField - - - - >', objData)
        dispatch({
            type: 'CANCEL_TIMER',
            payload: bool
        })
    }

    // If we have timer list and user click on create new timer,so timer lsit will be hidden
    const hideList = (bool) => {
        dispatch({
            type: 'HIDE_LIST',
            payload: bool
        })
    }
    // Set Initial Style Of Bar 
    const initialBar = (obj) => {
        dispatch({
            type: 'INITIAL_BAR',
            payload: obj
        })
    }

    // Set Form Validation 
    const setValidation = (bool, key) => {
        dispatch({
            type: 'SET_VALIDATION',
            payload: {bool, key}
        })
    }

    // Set Timer List on Global State 
    const GET_TIMER = (arr) => {
        dispatch({
            type: 'GET_TIMER',
            payload: arr
        })
    }

    // Set Test Input 
    // const SET_TEST = (obj) => {
    //     dispatch({
    //         type: 'SET_TEST',
    //         payload: obj
    //     })
    // }
    
    



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
            hideList,
            GET_TIMER,
            // SET_TEST,
            initialBar,
            setValidation,
            contentValidation: state.contentValidation,
            isCreate: state.isCreate,
            cancel:state.cancel,
            stateLink: state.link,
            defaultBarStyle: state.defaultBarStyle,
            barStyle: state.barStyle,
            stLink: state.stLink,
            timerList:state.timerList,
            isHideList:state.isHideList
            
        }}>
            {children}
        </RootContext.Provider>
    )
}