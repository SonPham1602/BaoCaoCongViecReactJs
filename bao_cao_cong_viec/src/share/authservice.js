import React from 'react'
import axios from 'axios'
import Global from '../share/global'

export default class AuthSerice extends React.Component {
    static login(username, password) {
        var req = {
            UserName: username,
            Pwd: password
        };
        return axios.post(Global.url_auth + 'api/Auth/Login', req).then((response)=>{
            if(response.data.Status === 1)
            {
                localStorage.setItem("username", username);
                localStorage.setItem("token", response.data.Token);
                return true;
            }
            else{
                alert("Sai username hoặc pass")
                return false;
            }           
        })
    }

    static login_Ver1(username, password) {
        var req = {
            email: username,
            password: password
        };
        return axios.get(Global.url_auth + 'User',{params:req}).then((response)=>{
            //if(response.data.Status === 1)
           // {
                localStorage.setItem("username", username);
                localStorage.setItem("token", 'tesst');
               // localStorage.setItem("token", response.data.Token);
                return true;
           //// }
           // else{
            //    alert("Sai username hoặc pass")
            //    return false;
          //  }           
        })
    }

    static logout() {
        var headers = {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        }
        return axios.get(Global.url_auth + 'api/Auth/Logout', {
            headers: headers
        }).then((response)=>{
                localStorage.removeItem("username");
                localStorage.removeItem("token");
                return true;
            }
        )
    }

    static checkAuthorised() {
        var token = localStorage.getItem('token');
        var ressult = true;
        if(token === null || token === undefined || token === ""){
          ressult = false; 
        }  
        console.log(ressult)
        return ressult;   
    }  
}