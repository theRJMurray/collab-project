import React, { useState, useEffect } from 'react'
import { Line } from 'rc-progress'

const Gather = () => {
    const [time, setTime] = useState(0)
    const [work, setWork] = useState(false)

    useEffect(() => {
        if(work){
            const interval = setInterval(() => {
                if(time < 100) {
                    setTime(time + 25)
                } else {
                    setWork(false)
                    setTime(0)
                }
            }, 1250);

            return () => clearInterval(interval);
        }
    }, [time, work])

    const clickButton = () => {
        if(!work) {
            setWork(true)
        }
    }

    return <div style={{width: 100, height: 80, border: '1px solid black'}}>
        <div className="top">
            Oak Tree
        </div>
        <Line percent={time} strokeWidth="10" trailWidth="10" strokeColor={time === 100 ? 'green' : 'brown'} strokeLinecap="square" />
        <button className="button" onClick={clickButton}>
            Chop Wood
        </button>
    </div>
}

export default Gather