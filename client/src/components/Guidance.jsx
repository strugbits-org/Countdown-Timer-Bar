import '../App.css'
import React, {useRef, useContext, useEffect} from 'react'
import { RootContext } from '../store/GlobalState'

const Guidance = () => {


    const guidance = useRef()

    // Global State
    const {cancel, cancelTimer} = useContext(RootContext)

    useEffect(()=>{
        guidance.current.scrollIntoView()
    }, [cancel])



    return (
        <div className="contentBox" ref={guidance}>
            <ul className="guidanceList">
                <li className="list">
                    <h3>1. How to create Countdown Time Bar <a href="#">(Watch Video Tutorial)</a></h3>
                    
                </li>
                <li className="list">
                    <h3>2. Video Tutorials for 4 Countdown Timer Types</h3>
                    <ul className="innerList">
                        <li>Countdown Timer Type A for upcoming sales events? <a href="#">(Watch Video Tutorial)</a></li>
                        <li>Countdown Timer Type B for recurring sales events? <a href="#">(Watch Video Tutorial)</a></li>
                        <li>Countdown Timer Type C to promote same day or second day shipping? <a href="#">(Watch Video Tutorial)</a></li>
                        <li>Countdown Timer Type C for daily sales or flash sales? <a href="#">(Watch Video Tutorial)</a></li>
                    </ul>
                </li>
                <li className="list">
                    <h3>3. Don't see the bar while targeting products or customers? Click <a href="#">Here</a></h3>
                    <p className="li3_para">After thatm refresh the website, the bar should display properly. <br /> If it still does not work, email us at help@xyz.com, and we will help.</p>
                </li>
            </ul>
        </div>
    )
}

export default Guidance