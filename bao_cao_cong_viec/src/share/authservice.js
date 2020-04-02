import React from 'react'
import axios from 'axios'
import Global from '../share/global'

export default class AuthSerice extends React.Component {
    static login(username, password, savepass) {
        var req = {
            email: username,
            pwd: password
        };
        return axios.post(Global.url_auth + 'api/author/Login', req).then((response)=>{
            if(response.data.status === 1)
            {
                localStorage.setItem("username", username);
                localStorage.setItem("token", response.data.token);
                if(savepass)
                    localStorage.setItem("password", password);
                else
                localStorage.removeItem("password");
                return true;
            }
            else{
                alert("Sai username hoặc pass")
                return false;
            }           
        })
    }

    static logout() {
        // var headers = {
        //     'Content-Type': 'application/json',
        //     'token': localStorage.getItem("token")
        // }
        // return axios.get(Global.url_auth + 'api/Auth/Logout', {
        //     headers: headers
        // }).then((response)=>{
                localStorage.removeItem("token");
                window.location.assign("/");
                return true;
        //     }
        // )
    }

    static checkAuthorised() {
        var token = localStorage.getItem('token');
        var ressult = true;
        if(token === null || token === undefined || token === ""){
          ressult = false; 
        }  
        return ressult;   
    }  
}