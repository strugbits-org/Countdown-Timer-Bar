import '../App.css'
import React, { useState } from 'react'
import TimerForm from './assets/TimerForm'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const TimerConfiguration = () => {
    // const [collapse, setCollapse] = useState(false)

    return (
        <div className="mt12 maxFormHeight">
            <div className='contentConfigurationHead flexRow'>
                <h3>Timer Configuration</h3>
                {/* <div className="collapseIcon flexColumn" title="Expand"
                    onClick={() => { collapse ? setCollapse(false) : setCollapse(true) }}>

                    {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div> */}
            </div>
            {/* Content Configuration Form */}
            <TimerForm />
        </div>
    )
}

export default TimerConfiguration