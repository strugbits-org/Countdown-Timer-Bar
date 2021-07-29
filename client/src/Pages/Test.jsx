import '../App.css'
import React, { useState } from 'react'


const Test = () => {
    const [test, setTest] = useState('')
    const [error, setError] = useState('')


    const btnSubmit = () => {
        setError('')
        if (test.length > 0) {
            var raw = JSON.stringify({
                "name":test
            });

            var header = {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": true
            }

            var requestOptions = {
                method: 'POST',
                headers: header,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:3001/admin/createtimer", requestOptions) //http://localhost:3001
                .then(response => response.text())
                .then(result => {
                    console.log('POST RESULT - - - - >', JSON.parse(result))
                    setError('Test Submit Successfully')
                })
                .catch(error => {
                    console.log('error', error)
                    setError('Error Please try again')
                }); 
        }
        else{
            setError('Input field required')
        }
    }


    return (
        <div className='flexColumn test'>
            <input type='text' className='testInput' value={test} onChange={(e) => setTest(e.target.value)} />
            <button className='testSubmit' onClick={btnSubmit}> Submit </button>
            <p>{error}</p>
        </div>
    )
}

export default Test
