import React, { Component } from 'react'
import Css from '../css/Css'
import {classes,style} from 'typestyle'
import { FaRegPaperPlane, FaRegFolderOpen, FaTasks, FaUsersCog } from 'react-icons/fa'
class navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectPageValue:null
        }
        this.onClickSelectPage = this.onClickSelectPage.bind(this)
    }
    onClickSelectPage(event)
    {
        this.props.callbackFunctionSelectPage(event.target.value)
        this.setState({
            selectPageValue:event.target.value
        })
    }
    render() {
        const {selectPageValue} = this.state
        const selectPageStyle = style({
            background: '#CFCFCF',
            $nest:{
                "&::after":{
                    backgroundColor: '#333',
                    position: 'absolute',
                    width: '7px',
                    content: 'open-quote',
                    marginTop: '-10px',
                    left: '0px',
                    paddingBottom: '10px',
                    paddingTop: '10px',
                }
            }
        })
        let postReportPage,viewListReport,managerReport,managerStaff
        if(selectPageValue===1)
        {
            postReportPage =  <li onClick={this.onClickSelectPage} value="1" className={selectPageStyle}>
            <FaRegPaperPlane ></FaRegPaperPlane>
                Gửi báo cáo
            </li>
        }
        else
        {
            postReportPage =  <li onClick={this.onClickSelectPage} value="1">
            <FaRegPaperPlane ></FaRegPaperPlane>
                Gửi báo cáo
            </li>
        }

        if(selectPageValue===2)
        {
            viewListReport =    <li onClick={this.onClickSelectPage} value = "2" className={selectPageStyle}>
            <FaRegFolderOpen></FaRegFolderOpen>
                Xem báo cáo đã gửi
            </li>
        }
        else
        {
            viewListReport =   <li onClick={this.onClickSelectPage} value = "2">
            <FaRegFolderOpen></FaRegFolderOpen>
                Xem báo cáo đã gửi
            </li>
        }

        if(selectPageValue===3)
        {
            managerReport =  <li value="3" onClick={this.onClickSelectPage} className={selectPageStyle}>
            <FaTasks></FaTasks>
                Quản lý báo cáo
            </li>
        }
        else
        {
            managerReport =  <li value="3" onClick={this.onClickSelectPage}>
            <FaTasks></FaTasks>
                Quản lý báo cáo
            </li>
        }

        if(selectPageValue===4)
        {
            managerStaff = <li value="4" onClick = {this.onClickSelectPage} className={selectPageStyle}>
            <FaUsersCog></FaUsersCog>
                Quản lý nhân viên
            </li>
        }
        else
        {
            managerStaff = <li value="4" onClick = {this.onClickSelectPage}>
            <FaUsersCog></FaUsersCog>
                Quản lý nhân viên
            </li>
        }
        return (
            <div>
                <div>
                    <img src="/icon/logo.png" width='100%'></img>
                </div>
                <div>
                    <ul className={Css.navigationBar}>
                        {postReportPage}
                        {viewListReport}
                        {managerReport}
                        {managerStaff}
                    </ul>
                </div>
            </div>
        )
    }
}
export default navigation