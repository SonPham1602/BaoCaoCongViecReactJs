import React,{Component} from 'react'
import Style from '../css/Css'
import {FaRegPaperPlane,FaRegFolderOpen,FaTasks,FaUsersCog} from 'react-icons/fa'
class navigation extends Component
{
    render(){
        return(
            <div>
                <div className={Style.leftSlideDashboard}>
                    <div>
                        <img src="/icon/logo.png" width='100%'></img>
                    </div>
                    <div>
                        <ul className={Style.navigationBar}>
                            <li>
                                <FaRegPaperPlane ></FaRegPaperPlane>
                                Gửi báo cáo
                            </li>
                            <li>
                                <FaRegFolderOpen></FaRegFolderOpen>
                                Xem báo cáo đã gửi
                            </li>
                            <li>
                                <FaTasks></FaTasks>
                                Quản lý báo cáo</li>
                            <li>
                                <FaUsersCog></FaUsersCog>
                                Quản lý nhân viên</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default navigation