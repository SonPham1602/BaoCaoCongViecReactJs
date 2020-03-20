import React from 'react'
import Global from '../share/global'
import axios from 'axios'

class ApiService extends React.Component {
  constructor(){
    super();
    this.token = localStorage.getItem('token');
    this.url_server = Global.url_server;
    this.headers = {
      'Content-Type': 'application/json',
      'token': this.token
    }
  }

  static checkAuthorised() {
    var ressult = true;
    if(this.token === null || this.token === undefined || this.token === ""){
      ressult = false; 
    }  
    console.log(ressult);
    return ressult;   
  }  

  static GET(path) {
    return axios.get(Global.url_auth + path, {
      headers: this.headers
    }).then((response)=>{
        if(response.status === 401)
          this.checkAuthorised();
        return response;
      }
    )
  }

  static POST(path, data) {
    return axios.Post(Global.url_auth + 'path', data, {
      headers: this.headers
    }).then((response)=>{
      if(response.status === 401)
        this.checkAuthorised();
      return response;
    });
  }

  static UPDATE(path, data) {
    return axios.Post(Global.url_auth + 'path', data, {
      headers: this.headers
    }).then((response)=>{
      if(response.status === 401)
        this.checkAuthorised();
      return response;
    });
  }
  
  static DELETE(path) {
    return axios.Post(Global.url_auth + 'path', {
      headers: this.headers
    }).then((response)=>{
      if(response.status === 401)
        this.checkcheckAuthorised();
      return response;
    });
  }

  static unAuthorised(){
    // Hàm này trả về trang login
  }

  static Logout(){
    return this.GET("api/Auth/Logout")
    .then((data) => data)
    .catch();
  }
} 

export default ApiService;