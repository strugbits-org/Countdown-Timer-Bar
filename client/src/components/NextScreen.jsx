import '../App.css'
import React from 'react'
import { Button } from '@material-ui/core'





                

const NextScreen = ({next}) => {


    return (
        <div className="mt12">
            <Button color="secondary" variant="outlined" onClick={() => next()}>Next</Button>
        </div>
    )
}

export default NextScreen