import React from 'react'
import ReactQuill,{Quill} from 'react-quill';
import ImageResize  from 'quill-image-resize-module-react'

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
            [{'color':['#FF0000','#00FF00','#0000FF','#000000']}],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image','color'
    ]
    render(){
        return(
            <div>
                    <ReactQuill 
                    style={{textAlign:'left'}}
                    value={this.state.text}
                    onChange={this.handleChange}  modules = {this.modules} formats={this.formats}/>
            </div>
        )
    }
}
export default ReportForm