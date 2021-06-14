import React from 'react'
import {useLocation} from "react-router-dom";

const Redirect = (props) => {
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    return (
        <div>
             <h1 style={{ textAlign: 'center' }}>{code ? code : "Redirect"}</h1>
        </div>
    )
}

//--- fucntion to fetch

export const functiontoFetch = async(code) => {
    let myHeaders = {
       "Content-Type": "application/json"
    }
    var raw = JSON.stringify({ "grant_type": "authorization_code", "client_id": "ad68a181-8785-47ea-bdca-6e2023af5f58", "client_secret": "88ab017c-6c9d-47ed-a372-e334e48a45fe", "code": code });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return await fetch("https://www.wix.com/oauth/access", requestOptions)
        .then(response => response.text())
        .then((result) => {
			return JSON.parse(result);
		})
        .catch(error => error);
}
 
 
export default Redirect;


/*
    //------------------------------- Page code --------------------------------------------
    let { code} = await wixLocation.query;
    if (code !== undefined) {
        let response = await generateAccessToken(code)
        let {access_token,refresh_token}=response;
        wixLocation.to('https://www.wix.com/_api/site-apps/v1/site-apps/token-received?access_token='+access_token);
        // local.setItem('tokens',JSON.stringify(response));
        // wixLocation.to("/alan");
    }
    //--------------------------------------------------------------------------------------
    //-------------------------- Back End --------------------------------------------------
    export async function generateAccessToken(code) {
    var myHeaders = {
        "Content-Type": "application/json"
    }
    var raw = JSON.stringify({ "grant_type": "authorization_code", "client_id": "e8d352b7-a56d-4a45-9192-0fab8dd4bdfb", "client_secret": "810e1aa4-a3bb-408d-8047-86f9f2bbb97d", "code": code });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return await fetch("https://www.wix.com/oauth/access", requestOptions)
        .then(response => response.text())
        .then((result) => {
			return JSON.parse(result);
		})
        .catch(error => error);
    }
*/