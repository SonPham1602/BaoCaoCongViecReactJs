import React from 'react'
import Style from '../css/Css'
import {FaRegUser,FaRegEnvelope,FaPhone,FaLock} from 'react-icons/fa'
class RegisterPage extends React.Component {
    render(){
        const registerLableStyle = {
            fontSize: '35px'
        }
        const registerButtonStyle = {
            width: '500px',
            height: '50px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '50px',
            background: '#515064',
            cursor: 'pointer'
        }
        const registerTextStyle = {
            color: 'white',
            fontSize: '20px',
            cursor: 'inherit',
        }
        return(
            <div>
                <div>
                    <img src={"/icon/logo.png"}></img>
                </div>
                <div>
                    <label style={registerLableStyle}>Đăng kí tài khoản</label>
                </div>
                <div>
                    <FaRegUser className={Style.iconStyle}></FaRegUser>
                    <input type='text' placeholder="Họ và tên" className={Style.formControlStyle}></input>
                </div>
                <div>
                    <FaRegEnvelope className = {Style.iconStyle}></FaRegEnvelope>
                    <input type='email' placeholder="Email" className={Style.formControlStyle}></input>
                </div>
                <div>
                    <FaPhone className={Style.iconStyle}></FaPhone>
                    <input type='text' placeholder="Số điện thoại" className={Style.formControlStyle} ></input>
                </div>
                <div>
                    <FaLock  className={Style.iconStyle}></FaLock>
                    <input type='password' placeholder="Mật khẩu" className={Style.formControlStyle}></input>
                </div>
                <div>
                    <FaLock className={Style.iconStyle}></FaLock>
                    <input type='password' placeholder="Nhập lại mật khẩu" className={Style.formControlStyle}></input>
                </div>
                <div>
                    <button style={registerButtonStyle}>
                        <label style={registerTextStyle}>Đăng kí</label>
                    </button>
                </div>
            </div>
        )
    }
}
export default RegisterPage