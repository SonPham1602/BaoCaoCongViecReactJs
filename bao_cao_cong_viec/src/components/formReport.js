import React from 'react'
import ReactQuill,{Quill} from 'react-quill';
import ImageResize  from 'quill-image-resize-module-react'
import Style from "../css/Css"

Quill.register('modules/imageResize', ImageResize);

class ReportForm extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        this.setState({ text: value })
    }
    modules = {
        imageResize: {
            // parchment: Quill.import('parchment'),
            modules: [ 'Resize', 'DisplaySize' ]
        },
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
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
        'link', 'image','color','align','font','background'
    ]
    render(){
        const wrapRichEditor = {
            height:'50%',
            marginRight: '200px',
            padding:'50px',
            
        }
        const postButton = {
            cursor: 'pointer',
            marginRight: '200px',
            border: 'none',
            background: '#515064',
            color:'white',
            borderRadius: '5px',
            width: '200px',
            height: '50px'
        }
        return(
            <div style={{height:'100%',width:'100%'}}>
                <div style={{float:'left',paddingLeft:'50px',marginTop:'10px'}}> 
                    <label>Nhập tiêu đề</label>
                    <input className={Style.titlePlaceToSent} ></input>
                </div>
                <div style={wrapRichEditor}>
                    <ReactQuill
                        className={Style.richEditor}
                        value={this.state.text}
                        onChange={this.handleChange}  modules = {this.modules} formats={this.formats}/>
                </div>
                <div>
                    <button style={postButton}>
                        <label>
                            Gửi báo cáo
                        </label>
                    </button>
                </div>
            </div>
        )
    }
}
export default ReportForm