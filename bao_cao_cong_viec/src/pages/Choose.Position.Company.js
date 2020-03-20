import React from 'react'
import Style from '../css/Css'
import Select from 'react-select'
import { classes } from 'typestyle'
import axios from 'axios'
import { ThemeConsumer } from 'styled-components'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


class ChoosePosition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idSelectCompany: '5e7318775adab12362cb836d',
            idSelectBranch: '',
            dataCompany: [],
            dataBranch: [],
            dataDepartment: [],
            dataTeam: []
        }
    }
    componentDidMount() {
        this.getDataCompany()
        this.getDataBranch()
        this.getDataDepartment()
        this.getDataTeam()
    }
    getDataCompany() {
        var dataCompany = []
        axios.get('http://localhost:4000/Company').then((res) => {
            res.data.map(e => {
                dataCompany.push({
                    value: e._id,
                    label: e.name
                })
            })
            this.setState({ dataCompany: dataCompany })
        })
    }
    getDataBranch() {
        var dataBranch = []
        axios.get('http://localhost:4000/Branch', { params: { companyId: "5e7318775adab12362cb836d" } }).then((res) => {
            console.log(res.data)
            res.data.map(e => {
                dataBranch.push({
                    value: e._id,
                    label: e.name
                })
            })
            this.setState({ dataBranch: dataBranch })
        })
    }
    getDataDepartment() {
        var dataDepartment = []
        axios.get('http://localhost:4000/Department').then((res) => {
            console.log(res.data)
            res.data.map(e => {
                dataDepartment.push({
                    value: e._id,
                    label: e.name
                })
            })
            this.setState({ dataDepartment: dataDepartment })
        })
    }

    getDataTeam() {
        var dataTeam = []
        axios.get('http://localhost:4000/Team').then((res) => {
            console.log(res.data)
            res.data.map(e => {
                dataTeam.push({
                    value: e._id,
                    label: e.name
                })
            })
            this.setState({ dataTeam: dataTeam })
        })
    }
    render() {

        const customStyles = {
            control: () => ({
                // none of react-select's styles are passed to <Control />
                width: '500px',
                display: '-webkit-box',
                display: '-webkit-flex',
                display: '-ms-flexbox',
                display: 'flex',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '5px',
                height: '50px',
                border: '1px solid gray',
                marginTop: '10px',

            }),
            option: (provided, state) => ({
                ...provided,
                borderBottom: '1px dotted pink',
                padding: 20,
                width: '500px',
                transform: 'translateX(-50%)',
                marginLeft: '50%',
            }),
            menu: () => ({
                width: 500,
                background: '#F5F5F5',
                transform: 'translateX(-50%)',
                marginLeft: '50%',
                position: 'absolute',
                zIndex: '5',
                border: '1px solid gray',
                borderRadius: '5px'
            }),
        }
        return (
            <div>
                <div>
                    <img src="/icon/logo.png"></img>
                </div>
                <div>
                    <label className={Style.loginLableStyle}>Chọn vị trí trong công ty</label>
                </div>
                <div>
                    <Select options={this.state.dataCompany} styles={customStyles} placeholder="Chọn công ty..."></Select>
                </div>
                <div>
                    <Select options={this.state.dataBranch} styles={customStyles} placeholder="Chọn chi nhánh..."></Select>
                </div>
                <div>
                    <Select options={this.state.dataDepartment} styles={customStyles} placeholder="Chọn phòng..."></Select>
                </div>
                <div>
                    <Select options={this.state.dataTeam} styles={customStyles} placeholder="Chọn nhóm..."></Select>
                </div>
                <div>
                    <button className={Style.loginButtonStyle}>
                        <label className={Style.loginTextStyle}>Tiếp tục</label>
                    </button>
                </div>
            </div>
        )
    }
}
export default ChoosePosition