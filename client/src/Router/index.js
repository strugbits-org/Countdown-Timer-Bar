import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Authentication from '../Pages/Authentication'
import Redirect from '../Pages/Redirect'
import Timer from '../Pages/Timer'
import Home from '../Pages/Home'
import Test from '../Pages/Test'
import NotFound from '../Pages/NotFound'



const Routers = () => {
    let goto = useNavigate() 
    

    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/auth' element={<Authentication />} />
            <Route exact path='/redirect' element={<Redirect />} />
            <Route exact path='/timer' element={<Timer />} />
            <Route exact path='/test' element={<Test />} />
            <Route exact path='*' element={<NotFound />} />
            {/* <Route path='*'>
                {goto('404')}
                {consoel}
            </Route> */}

            {/* <Route path='men/product/:id' element={<Product />} /> */}
        </Routes>
    )

}
export default Routers