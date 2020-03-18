import React from "react";
import Style from '../css/Css'
import {FaRegUser,FaLock} from 'react-icons/fa'
class LoginPage extends React.Component {


    render() {
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
                    <input placeholder="Email" type='text' className={Style.formControlStyle}></input>
                </div>
                <div>
                    <FaLock className={Style.iconStyle} ></FaLock>
                    <input placeholder="Password" type='password' className={Style.formControlStyle}></input>
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
                    <button className={Style.loginButtonStyle}>
                        <label className={Style.loginTextStyle} >Đăng nhập</label>            
                    </button>
                </div>
            </div>
        );
    }
}
export default LoginPage;
