import '../App.css'
import React, { useState } from 'react'
import StyleForm from './assets/StyleForm'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const StyleConfiguration = () => {
    // const [collapse, setCollapse] = useState(false)

    return (
        <div className="mt12 maxFormHeight">
            <div className='contentConfigurationHead flexRow'>
                <h3>Style Configuration</h3>
                {/* <div className="collapseIcon flexColumn" title="Expand"
                    onClick={() => { collapse ? setCollapse(false) : setCollapse(true) }}>
                    {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    
                </div> */}
            </div>
            {/* Content Configuration Form */}
            <StyleForm />
        </div>
    )
}

export default StyleConfiguration