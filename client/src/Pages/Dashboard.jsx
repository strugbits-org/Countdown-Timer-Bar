import '../App.css'
import React, { useEffect, useState, useContext } from 'react'
import Guidance from '../components/Guidance'
import CreateNewBar from '../components/CreateNewBar'
import Preview from '../components/Preview'
import ScreenButtons from '../components/ScreenButtons'
import { RootContext } from '../store/GlobalState'
import {getTimerList} from '../store'


const Dashboard = () => {
    // const { isCreate } = useContext(RootContext)

    //Global State
    const {cancel} = useContext(RootContext)


    const [isCreate, setIsCreate] = useState(false)

    const [predefinedTemplate, setPredefinedTemplate] = useState('')

    useEffect(() => {
        console.log('predefinedTemplate', predefinedTemplate)
        
    })

    function restForm() {
        return (
            <div className="fullHeight">
                {!cancel && (
                    <>
                        <Preview />
                        <div className="contentBox">
                            <ScreenButtons />
                        </div>
                    </>
                )}
            </div>
        )
    }

    return (
        <div className="App">
            <Guidance />
            <CreateNewBar setVal={setIsCreate} />

            {/* If User Press "Create New Bar" button then render <BasicTemplate/> */}
            {isCreate && restForm()}

            {/* If User Select Any Template then render All below Components */}
            {/* {isBasicTemplate && restForm()} */}
        </div>
    )
}

export default Dashboard