import '../App.css'
import React, { useState } from 'react'
import ContConfForm from './assets/ContConfForm'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const ContentConfiguration = () => {
    // const [collapse, setCollapse] = useState(false)

    return (
        <div className="mt12 maxFormHeight">
            <div className='contentConfigurationHead flexRow'>
                <h3>Content Configuration</h3>
                {/* <div className="collapseIcon flexColumn" title="Expand" onClick={() => { collapse ? setCollapse(false) : setCollapse(true) }}>
                    {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div> */}
            </div>
            {/* Content Configuration Form */}
            <ContConfForm/>
        </div>
    )
}

export default ContentConfiguration