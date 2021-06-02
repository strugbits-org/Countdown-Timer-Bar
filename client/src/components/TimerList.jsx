import '../App.css'
import React, { useContext, useEffect, useState } from 'react'
import { getTimerList } from '../store'
import { RootContext } from '../store/GlobalState'

const TimerList = () => {
    // const [data, setData] = useState([])
    const {timerList} = useContext(RootContext)
    // useEffect(async () => {
    //     let a = await getTimerList()
    //     GET_TIMER(await a.timerData)
    // }, [])
    return (
        <ul className="timerList flexColumn">
            <li className="listHeader">
                <ul className="listColumns flexRow">
                    <li className="listCol colName">Name</li>
                    <li className="listCol colGeo">Geo Target</li>
                    <li className="listCol colExcluded">Excluded Countries</li>
                    <li className="listCol colActions">Actions</li>
                    <li className="listCol colStatus">Status</li>
                </ul>
            </li>
            <li className="listBody">
                {timerList.length !== 0 && timerList.map((val) => {
                    const { name, _id } = val
                    return (
                        <ul className="listColumns flexRow" key={_id}>
                            <li className="listCol colName">{name}</li>
                            <li className="listCol colGeo">All Countires</li>
                            <li className="listCol colExcluded">N/A</li>
                            <li className="listCol colActions">
                                <button>Edit</button>
                                <button>Delete</button>
                                <button>Pause</button>
                            </li>
                            <li className="listCol colStatusVal">
                                <span>Active</span>
                            </li>
                        </ul>
                    )
                })
                }

                {/* <ul className="listColumns flexRow">
                    <li className="listCol colName">My First bar My First bar My First bar</li>
                    <li className="listCol colGeo">All Countries</li>
                    <li className="listCol colExcluded">N/A</li>
                    <li className="listCol colActions">
                        <button>Edit</button>
                        <button>Duplicate</button>
                        <button>Pause</button>
                    </li>
                    <li className="listCol colStatusVal">
                        <span>Active</span>
                    </li>
                </ul> */}
            </li>

        </ul>
    )
}

export default TimerList
