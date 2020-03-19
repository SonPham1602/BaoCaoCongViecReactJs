import React from "react";
import Style from '../css/Css'
import axios from 'axios'
import {FaRegUser,FaLock} from 'react-icons/fa'
import { Link,Redirect} from "react-router-dom";
class LoginPage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            user:{
                email:"",
                password:""
            },
            goDashboard:false,
        }
        this.onClickLoginButton = this.onClickLoginButton.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onClickCreateNewAccount = this.onClickCreateNewAccount.bind(this)
    }
    onChangeEmail(event)
    {
        var data = event.target.value
        this.setState(prevState=>({
            user:{
                ...prevState.user,
                email:data
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
    onClickLoginButton(){
        axios.get("http://localhost:4000/User",{
            params:{
                email:this.state.user.email,
                password:this.state.user.password
            }
        }).then((response)=>{
            console.log("data",response.data)
            if(response.data.length !== 0)
            {
                this.setState({
                    goDashboard:true
                })
            }
        
            
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
            return <Redirect to='/dashboard'/>
        }
        else{
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
                        <input onChange={this.onChangeEmail}  placeholder="Email" type='text' className={Style.formControlStyle}></input>
                    </div>
                    <div>
                        <FaLock className={Style.iconStyle} ></FaLock>
                        <input  onChange={this.onChangePassword}  placeholder="Password" type='password' className={Style.formControlStyle}></input>
                    </div>
                    <div className={Style.rememberPasswordDivStyle}>
                        <div>
                            <input type='checkbox'></input> 
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