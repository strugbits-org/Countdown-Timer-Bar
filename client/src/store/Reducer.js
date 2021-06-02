export const Reducer = (state, action) => {
    switch (action.type) {
        case 'CREATING_BAR':
            return {
                ...state,
                isCreate: action.payload
            }
        case 'SELECT_TEMPLATE':
            const { color, backgroundColor } = action.payload.data
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    style: {
                        ...action.payload.bar.style,
                        textColor: color,
                        backgroundColor,
                        buttonBackgroundColor: color,
                        timerBackgroundColor: color,
                        buttonTextColor: backgroundColor,
                        timerDigitColor: backgroundColor

                    }
                },

            }
        case 'BAR_ACTIONS':
            const { stLink } = action.payload.data
            const { clickable } = action.payload.data
            return {
                ...state,
                stLink: {
                    isNone: stLink.isNone,
                    isBarClick: stLink.isBarClick,
                    isButtonClick: stLink.isButtonClick,
                },
                barStyle: {
                    ...action.payload.bar,
                    content: {
                        ...action.payload.bar.content,
                        clickable: clickable
                    }
                }
            }
        case 'SET_CONTENT_FIELD':
            const { keyName, val } = action.payload.data
            // console.log('Reducer', keyName, val)
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    content: {
                        ...action.payload.bar.content,
                        [keyName]: val
                    }
                },
            }
        case 'OPEN_IN_NEW_TAB':
            const { data } = action.payload
            // console.log('Reducer', keyName, val)
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    content: {
                        ...action.payload.bar.content,
                        newTab: data
                    }
                },
            }
        case 'SET_TIMER_FIELD':
            const { keyNameTimer, valTimer } = action.payload.data
            console.log('SET_TIMER_FIELD - - - -> ', keyNameTimer, valTimer)
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    timer: {
                        ...action.payload.bar.timer,
                        [keyNameTimer]: valTimer
                    }
                },
            }
        case 'SET_STYLE_FIELD':
            const { keyNameStyle, valStyle } = action.payload.data
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    style: {
                        ...action.payload.bar.style,
                        [keyNameStyle]: valStyle
                    }
                },
            }
        case 'SET_TARGET_FIELD':
            const { keyNameTarget, valTarget } = action.payload.data
            console.log('SET_TARGET_FIELD - - - ->', keyNameTarget, valTarget)
            return {
                ...state,
                barStyle: {
                    ...action.payload.bar,
                    targeting: {
                        ...action.payload.bar.targeting,
                        [keyNameTarget]: valTarget
                    }
                },
            }
        case 'CANCEL_TIMER':
            return {
                ...state,
                cancel:action.payload
            }
        default:
            return {
                ...state
            }
    }
}
