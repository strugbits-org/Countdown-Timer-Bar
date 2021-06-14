import React from 'react'
import {useLocation, useNavigate} from "react-router-dom";

const Authentication = () => {
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    console.log(token)
    if(token !== null){
        let appID = "&appId=ad68a181-8785-47ea-bdca-6e2023af5f58";let redirect = "&redirectUrl=https://countdown-timer-bar-xlgrj.ondigitalocean.app/redirect"
        window.location.replace('https://www.wix.com/installer/install?'+token+appID+redirect)
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{token?token : "Authenticaiton"}</h1>
        </div>
    )
}

export default Authentication

/* 
    let { token} = await wixLocation.query;
    console.log('query', token);
    if (token !== undefined) {
		let tokenForUrl = "token="+token; let appID = "&appId=e8d352b7-a56d-4a45-9192-0fab8dd4bdfb";let redirect = "&redirectUrl=https://www.strugbits.com/redirect"
        wixLocation.to("https://www.wix.com/installer/install?"+token+appID+redirect);
*/