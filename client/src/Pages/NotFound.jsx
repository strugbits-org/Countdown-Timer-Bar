import React, { useEffect, useContext } from 'react'
import '../App.css'
import { RootContext } from '../store/GlobalState'

import notFound from '../../src/Images/404.jpg'

const NotFound = () => {
    return (
        <div className="flexColumn" style={{ backgroundColor:'rgb(242,242,242)',width: '100%', height: '100vh' }}>
            <img src={notFound} alt="404_Error_Not_found" />
        </div>
    )
}

export default NotFound
