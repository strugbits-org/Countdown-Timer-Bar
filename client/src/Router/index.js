import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Authentication from '../Pages/Authentication'
import Redirect from '../Pages/Redirect'
import Timer from '../Pages/Timer'
import Home from '../Pages/Home'



const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/auth' element={<Authentication />} />
            <Route exact path='/redirect' element={<Redirect />} />
            <Route exact path='/timer' element={<Timer />} />
            
            {/* <Route path='men/product/:id' element={<Product />} /> */}
            {/* <Route path='*' element={<Contact />} /> */}
        </Routes>
    )

}
export default Routers