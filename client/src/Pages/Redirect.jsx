import React from 'react'
import { useLocation } from "react-router-dom";
var axios = require('axios');

const Redirect = (props) => {
    const search = useLocation().search;
    let code = new URLSearchParams(search).get('code');
    if (code !== null) {
        console.log(code)
        // functiontoFetch(code);
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{code ? code : "Redirect"}</h1>
        </div>
    )
}

//--- fucntion to fetch

export const functiontoFetch = async (code) => {
    var data = JSON.stringify({
        "grant_type": "authorization_code",
        "client_id": "ad68a181-8785-47ea-bdca-6e2023af5f58",
        "client_secret": "88ab017c-6c9d-47ed-a372-e334e48a45fe",
        "code": "OAUTH2.eyJraWQiOiJWUTQwMVRlWiIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiYXBwSWRcIjpcImFkNjhhMTgxLTg3ODUtNDdlYS1iZGNhLTZlMjAyM2FmNWY1OFwiLFwiaW5zdGFuY2VJZFwiOlwiYjhjYTY5YzMtZjg0My00ZWNkLTlmMDgtMWNlOGYyZjE4MzllXCIsXCJzY29wZVwiOltcIlNDT1BFLkRDLk1BTkFHRS1ZT1VSLUFQUFwiXX0iLCJpYXQiOjE2MjM2NjM3MzMsImV4cCI6MTYyMzY2NDMzM30.5GvzZtYnflJxpBqFct1EamYncZqZka1RqpWXrPAPKBg",
        "Access-Control-Allow-Origin": "*"
    });
      
      var config = {
        method: 'post',
        url: 'https://www.wix.com/oauth/access',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
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