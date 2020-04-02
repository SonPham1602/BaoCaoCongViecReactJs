import React from 'react'
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react'
import Style from "../../css/Css"
import ApiService from '../../share/apiservice'
import { Row, Col, Alert } from 'react-bootstrap'
import {useAlert} from 'react-alert'
import { ItemTextFormat } from 'devextreme-react/bar-gauge';
Quill.register('modules/imageResize', ImageResize);

class ReportForm extends React.Component {
    constructor(props) {
        super(props)
        //mode=sent la gui bao cao
        //mode=view la hien thi bao cao
        //mode=edit la co the sua bao cao
        var {content,title,desciption,mode} = this.props
        console.log(mode)
        if(mode === undefined)
        {
            mode='sent'
        }
        if(content === undefined)
        {
            content=''
        }
        
        if(title === undefined)
        {
            title=''
        }
        if(desciption === undefined)
        {
            desciption=''
        }
        
        this.state = {
            title: title,
            content: content,
            desciption: desciption,
            modeView:mode
        } // You can also pass a Quill Delta here
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.handleChangeDesciption = this.handleChangeDesciption.bind(this)
        this.postReport = this.postReport.bind(this)
    }
    
    handleChangeContent(value) {
        this.setState({ content: value })
    }
    handleChangeTitle(event) {
        this.setState({ title: event.target.value })
    }
    handleChangeDesciption(event) {
        this.setState({ desciption: event.target.value })
    }
    modules = {
        imageResize: {
            // parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        },
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'color', 'align', 'font', 'background'
    ]
    postReport() {
        if(this.state.title==="")
        {
            alert("Nhập tiêu đề báo cáo");
        }
        else if(this.state.content==="")
        {
            alert("Nhập nội dung báo cáo");
        }
        else if(this.state.desciption==="")
        {
            alert("Nhập mô tả báo cáo");
        }
        else
        {
            var data = {
                title: this.state.title,
                desciption: "",
                content: this.state.content,
            }
            ApiService.PostReport(data).then((rep)=>{
                if(rep.status===200)
                {
                    alert("Gửi báo cáo thành công")
                    this.setState({
                        title: '',
                        content: '',
                        desciption: ''
                    })
                }
                else
                {
                    alert("Gửi cáo báo thất bại")
                }
            })
            
        }
        
    }
    render() {
        
        const wrapRichEditor = {
            height: '100%',
            //marginRight: '200px',
            minHeight: "500px"

        }
        const postButton = {
            cursor: 'pointer',
            border: 'none',
            background: '#515064',
            color: 'white',
            borderRadius: '5px',
            width: '200px',
            height: '50px'
        }

        const CheckModeView = () =>{
            if(this.state.modeView === 'sent')
            {
                return  <button onClick={this.postReport} style={postButton}>
                            <label>
                                Gửi báo cáo
                            </label>
                        </button>
            }
            else if(this.state.modeView === 'edit')
            {
                return  <button onClick={this.postReport} style={postButton}>
                <label>
                    Sửa báo cáo
                </label>
            </button>
            }
        }
        
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <Row className='p-0 m-0' >
                    <Col className='p-0 m-0' lg='1'>
                        <div style={{ float: 'left', marginTop: '10px',textAlign:"left" }}>
                            <p>Nhập tiêu đề:</p>
                            <p>Nhập mô tả:</p>
                        </div>

                    </Col>
                    <Col className='p-0 m-0'  lg='10'>
                        <div style={{ float: 'left', marginTop: '10px' }}>
                            <input value={this.state.title} onChange={this.handleChangeTitle} className={Style.titlePlaceToSent} ></input>
                            <br></br>
                            <input value={this.state.desciption} onChange={this.handleChangeDesciption} className={Style.titlePlaceToSent} ></input>
                        </div>
                    </Col>
                </Row>
                <Row className='p-0 m-0'>
                    <Col className='p-0 m-0'>
                        <div style={wrapRichEditor}>
                            <ReactQuill
                                className={Style.richEditor}
                                value={this.state.content}
                                onChange={this.handleChangeContent} modules={this.modules} formats={this.formats} />
                        </div>
                    </Col>
                </Row>
                <Row className='p-0 m-0'>
                    <Col className='p-0 m-0'>
                        <div style={{marginTop:'60px',marginBottom: '10px'}}>
                            {CheckModeView()}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ReportForm