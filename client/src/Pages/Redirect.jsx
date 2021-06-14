import React from 'react'
import { useLocation } from "react-router-dom";
var axios = require('axios');

const Redirect = async (props) => {
    const search = useLocation().search;
    let code = new URLSearchParams(search).get('code');
    if (code !== null) {
        let response = await functiontoFetch(code);
        console.log(response);
        let {access_token,refresh_token}=response;
        window.location.replace('https://www.wix.com/_api/site-apps/v1/site-apps/token-received?access_token='+access_token);
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{code ? code : "Redirect"}</h1>
        </div>
    )
}

//--- fucntion to fetch

export const functiontoFetch = async (code) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "grant_type": "authorization_code",
        "client_id": "ad68a181-8785-47ea-bdca-6e2023af5f58",
        "client_secret": "88ab017c-6c9d-47ed-a372-e334e48a45fe",
        "code": code
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://www.wix.com/oauth/access", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(error => console.log('error', error));
}


export default Redirect;

