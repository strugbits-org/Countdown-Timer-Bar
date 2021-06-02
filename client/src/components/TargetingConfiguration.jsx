import '../App.css'
import React, { useState } from 'react'
import TargetingForm from './assets/TargetingForm'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const TargetingConfiguration = () => {
    // const [collapse, setCollapse] = useState(false)

    return (
        <div className="mt12">
            <div className='contentConfigurationHead flexRow'>
                <h3>Targetting Configuration</h3>
                {/* <div className="collapseIcon flexColumn" title="Expand"
                    onClick={() => { collapse ? setCollapse(false) : setCollapse(true) }}>

                    {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div> */}
            </div>
            {/* Content Configuration Form */}
            <TargetingForm />
        </div>
    )
}

export default TargetingConfiguration