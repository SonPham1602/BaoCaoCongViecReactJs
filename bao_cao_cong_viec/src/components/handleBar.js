import React from 'react'
import Style from '../css/Css'
class handleBar extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            showUserControl:false,
        }
        this.onClickUserButton = this.onClickUserButton.bind(this)
    }
    onClickUserButton(){
        this.setState({
            showUserControl:!this.state.showUserControl
        })
    }

    render(){
        return(
            <div className={Style.handleBar}>
                <div>
                    <input className={Style.searchBoxHandleBar}></input>
                </div>

                <div >
                    <img src="/icon/user.png" className={Style.userImage} width='60px' onClick={this.onClickUserButton}></img>
                    {this.state.showUserControl && <div className={Style.userControlDiv}>
                        <ul>
                            <li>Quản lý tài khoản</li>
                            <li>Đăng xuất</li>
                        </ul>
                    </div> }
    
                </div>
            </div>
        )
    }
}
export default handleBar