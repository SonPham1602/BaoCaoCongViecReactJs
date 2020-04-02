import React from 'react'
import Style from '../css/Css'
import { FaSearch } from 'react-icons/fa'
import { Redirect} from "react-router-dom";
import ApiService from '../share/apiservice';
import AuthService from '../share/authservice'

class handleBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showUserControl: false,
            logOut: !AuthService.checkAuthorised()
        }
        this.onClickUserButton = this.onClickUserButton.bind(this)
        this.onLogout = this.onLogout.bind(this)       
    }
    onClickUserButton() {
        this.setState({
            showUserControl: !this.state.showUserControl
        })
    }

    onLogout(){
        var result = AuthService.logout();
        result.then(data => {
            this.setState({
                logOut: data
            })
        })   
    }

    render() {
        if(this.state.logOut)
        {
            return <Redirect to='/'/>
        }
        const logoHeader = {
            position: 'absolute',
            left: "10px",
            top: "10px"
        }
        const iconSeachBar = {
            position: 'absolute',
            left: "270px",
            top: "30px"
        }
        return (
            <div className={Style.handleBar}>               
                <div style={logoHeader}>
                    <img src="/icon/logo.png" width='200px'></img>
                </div>
                <div>
                    <div>
                        <input className={Style.searchBoxHandleBar}></input>
                        <FaSearch style={iconSeachBar}></FaSearch>
                    </div>

                </div>

                <div >
                    <img src="/icon/user.png" className={Style.userImage} width='60px' onClick={this.onClickUserButton}></img>
                    {this.state.showUserControl && <div className={Style.userControlDiv}>
                        <ul>
                            <li>Quản lý tài khoản</li>
                            <li>
                                <button onClick={this.onLogout}>Đăng xuất</button>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        )
    }
}
export default handleBar