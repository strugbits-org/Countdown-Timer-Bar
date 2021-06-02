import '../../App.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'


const NavigateButtons = () => {
    const goto = useNavigate()
    const styleButton = {
        margin:'10px'
    }

    return (
            <div className="flexRow mt12">
                <Button style={styleButton} variant="contained" color="primary" onClick={() => goto('/')}>Home</Button>
                <Button style={styleButton} variant="contained" color="primary" onClick={() => goto('dashboard')}>Dashboard</Button>
                <Button style={styleButton} variant="contained" color="primary" onClick={() => goto('redirect')}>Redirect</Button>
                <Button style={styleButton} variant="contained" color="primary" onClick={() => goto('auth')}>Authenticate</Button>
                <Button style={styleButton} variant="contained" color="primary" onClick={() => goto('timer')}>Timer</Button>
            </div>
    )
}

export default NavigateButtons