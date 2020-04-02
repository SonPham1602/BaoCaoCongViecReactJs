import React from "react";
import Style from '../css/Css'
import {FaRegUser,FaLock} from 'react-icons/fa'
import { Link,Redirect} from "react-router-dom";
import AuthService from '../share/authservice'

class LoginPage extends React.Component {
    constructor(props)
    {
        super(props);
        var username = localStorage.getItem("username");   
        var password = localStorage.getItem("password");
        var savepass = true; 
        if(username === undefined || username === null || username === ""){
            username = "";
        }
        if(password === undefined || password === null || password === ""){
            password = "";
            savepass = false;
        }            
           
        this.state = {
            user:{
                username: username,
                password: password,
                savepass: savepass
            },       
            goDashboard: AuthService.checkAuthorised(),
            goRegister: false
        }
        console.log(this.state);
        this.onClickLoginButton = this.onClickLoginButton.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeSavePass = this.onChangeSavePass.bind(this)
        this.onClickCreateNewAccount = this.onClickCreateNewAccount.bind(this)
    }
    onChangeEmail(event)
    {
        var data = event.target.value
        this.setState(prevState=>({
            user:{
                ...prevState.user,
                username:data
            }
        }))
    }
    onChangePassword(event)
    {
        var data = event.target.value
        this.setState(prevState=>({
            user:{
                ...prevState.user,
                password:data
            }
        }))
    }
    onChangeSavePass(event)
    {
        this.setState(prevState=>({
            user:{
                ...prevState.user,
                savepass: !prevState.user.savepass
            }
        }))
    }
    onClickLoginButton(){
        var result = AuthService.login(this.state.user.username, this.state.user.password, this.state.user.savepass);
        result.then(data => {
            this.setState({
                goDashboard: data
            })
        })      
    }
    onClickCreateNewAccount()
    {
        this.setState({
            goRegister:true
        })
    }   

    render() {
        const {goDashboard} = this.state
        const createAccountTextStyle={
            color:'black',
            textDecoration: 'none',
            cursor: 'pointer',
        }
        if(goDashboard===true){
            return <Redirect to='/home'/>
        }
        else{
            console.log(this.state.user);
            return (
                <div>
                    <div>
                        <img src={"/icon/logo.png"}></img>
                    </div>
                    <div>
                        <label className={Style.loginLableStyle}>Đăng nhập</label>
                    </div>
                    <div>
                        <FaRegUser className={Style.iconStyle}></FaRegUser>
                        <input value={this.state.user.username} onChange={this.onChangeEmail}  placeholder="Email" type='text' className={Style.formControlStyle}></input>
                    </div>
                    <div>
                        <FaLock className={Style.iconStyle} ></FaLock>
                        <input value={this.state.user.password} onChange={this.onChangePassword}  placeholder="Password" type='password' className={Style.formControlStyle}></input>
                    </div>
                    <div className={Style.rememberPasswordDivStyle}>
                        <div>
                            <input checked={this.state.user.savepass} onChange={this.onChangeSavePass} type='checkbox'></input> 
                            <label>Nhớ mật khẩu</label>
                        </div>
                        <div>
                            <a>
                                <label>Quên mật khẩu?</label>
                            </a>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.onClickLoginButton} className={Style.loginButtonStyle}>
                            <label className={Style.loginTextStyle} >Đăng nhập</label>            
                        </button>
                    </div>
                    <div>
                        <Link to='/register'>
                            <label style={createAccountTextStyle}>Tạo tài khoản</label>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
export default LoginPage;
