import React from 'react'
import ApiService from '../../share/apiservice'
import {SelectBox, Button} from 'devextreme-react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class ControlSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.dataShowControlSearch);
        this.state = {
            // Công ty
            dataCompany: [],
            dataCompanyShow: [],
            dataCompanySelect: "",
            // Chi nhánh
            dataBranch: [],
            dataBranchShow: [],
            dataBranchSelect: "",
            // Phòng ban
            dataDepartment: [],
            dataDepartmentShow: [],
            dataDepartmentSelect: "",
            // Team
            dataTeam: [],
            dataTeamShow: [],
            dataTeamSelect: "",
        }
        this.onSelectCompanyChange = this.onSelectDataChange.bind(this, "Company");
        this.onSelectBranchChange = this.onSelectDataChange.bind(this, "Branch");
        this.onSelectDepartmentChange = this.onSelectDataChange.bind(this, "Department");
        this.onSelectDepartmentChange = this.onSelectDataChange.bind(this, "Team");
        this.getAllCompany = this.getAllCompany.bind(this);
        this.getAllBranch = this.getAllBranch.bind(this);
        this.getAllDepartment = this.getAllBranch.bind(this);
        this.getAllTeam = this.getAllBranch.bind(this);
    }

    componentDidMount() {
        if(this.props.dataShowControlSearch.showCompanyId)
            this.getAllCompany();
        if(this.props.dataShowControlSearch.showBrandId)
            this.getAllBranch();
        if(this.props.dataShowControlSearch.showDepartmentId)
            this.getAllDepartment();   
        if(this.props.dataShowControlSearch.showTeamId)
            this.getAllTeam(); 
      }

    getAllCompany() {
        var data = [];
        ApiService.GetCompanys().then((result) => {
          if(result !== null && result !== undefined){
            if(result.data != null && result.data.status === 1)
            {
              data = result.data.data;
              this.setState({
                dataCompany: data,
                dataCompanySelect: (data.length > 0) ? data[0].id : "",
              })
            }
          }   
        });
    }
  
    getAllBranch() {
        var data = [];
        ApiService.GetBranchs().then((result) => {
          if(result !== null && result !== undefined){
            if(result.data != null && result.data.status === 1)
            {
                data = result.data.data;
                this.setState({
                dataBranch: data,
                })
            }
          }
        });
    }

    getAllDepartment() {
        var data = [];
        ApiService.GetDepartmentByCompanyId().then((result) => {
          if(result !== null && result !== undefined){
            if(result.data != null && result.data.status === 1)
            {
                data = result.data.data;
                this.setState({
                dataBranch: data,
                })
            }
          }
        });
    }

    getAllTeam() {
        var data = [];
        ApiService.GetTeamByCompanyId().then((result) => {
          if(result !== null && result !== undefined){
            if(result.data != null && result.data.status === 1)
            {
                data = result.data.data;
                this.setState({
                dataBranch: data,
                })
            }
          }
        });
    }

    onSelectDataChange(event, type){
        if(this.props.dataShowControlSearch.showDepartmentId)
            this.getAllDepartment();   
        if(this.props.dataShowControlSearch.showTeamId)
            this.getAllTeam();
        var idSelect = event.value;
        switch(type) {
            case "Company":
                var dataBranch = this.state.dataBranch.filter(m => m.companyId === idSelect)
                this.setState({
                    dataCompanySelect: idSelect,
                    dataBranchShow : dataBranch,
                    dataBrandSelect: (dataBranch.length > 0) ? dataBranch[0].id : "",
                });
                break;
            case "Branch":
                var dataDepartment = this.state.dataDepartment.filter(m => m.brandId === idSelect)
                this.setState({
                    dataBrandSelect: idSelect,
                    dataDepartmentShow : dataDepartment,
                    dataDepartmentSelect: (dataDepartment.length > 0) ? dataDepartment[0].id : "",
                });
                break;
            case "Department":
                var dataTeam = this.state.dataTeam.filter(m => m.departmentId === idSelect)
                this.setState({
                    dataDepartmentSelect: idSelect,
                    dataTeamShow : dataTeam,
                    dataTeamSelect: (dataTeam.length > 0) ? dataTeam[0].id : "",
                });
                break;
            case "Team":
                this.setState({
                    dataTeamSelect: idSelect,
                });
                break;
        }
        
    }

    render() {
        const currentStyle = {
            textAlign: "left"
        }
        
        return(           
            <div>
                <Row style={currentStyle}>
                    <Col xs lg="3" hidden={!this.props.dataShowControlSearch.showCompanyId}>
                        <div className="option">
                            <div>Công ty</div>
                            <SelectBox dataSource={this.state.dataCompany}
                                displayExpr="name"
                                valueExpr="id"
                                searchEnabled={true}
                                onValueChanged={this.onSelectCompanyChange}
                                value={this.state.dataCompanySelect} 
                            />    
                        </div>
                    </Col>
                    <Col xs lg="3" hidden={!this.props.dataShowControlSearch.showBrandId}>
                        <div className="option">
                            <div>Chi nhánh</div>
                            <SelectBox dataSource={this.state.dataBranchShow}
                                displayExpr="name"
                                valueExpr="id"
                                searchEnabled={true}
                                clearEnable={true}
                                showClearButton={true}
                                onValueChanged={this.onSelectBranchChange}
                                value={this.state.dataBranchSelect} 
                            />
                        </div>
                    </Col>
                    <Col xs lg="2" hidden={!this.props.dataShowControlSearch.showDepartmentId}>
                        <div className="option">
                            <div>Chi nhánh</div>
                            <SelectBox dataSource={this.state.dataDepartmentShow}
                                displayExpr="name"
                                valueExpr="id"
                                searchEnabled={true}
                                clearEnable={true}
                                showClearButton={true}
                                onValueChanged={this.onSelectDepartmentChange}
                                value={this.state.dataDepartmentSelect} 
                            />
                        </div>
                    </Col>
                    <Col xs lg="2" hidden={!this.props.dataShowControlSearch.showTeamId}>
                        <div className="option">
                            <div>Chi nhánh</div>
                            <SelectBox dataSource={this.state.dataTeamtShow}
                                displayExpr="name"
                                valueExpr="id"
                                searchEnabled={true}
                                clearEnable={true}
                                showClearButton={true}
                                onValueChanged={this.onSelectTeamChange}
                                value={this.state.dataTeamSelect} 
                            />
                        </div>
                    </Col>
                    <Col xs lg="2">
                        <div>
                            <div>&nbsp;</div>
                            <Button
                            height={35}
                            width={100}
                            type="default"
                            stylingMode="contained"
                            onClick={e => this.props.onSearchClick(e, {
                                companyId: this.state.dataCompanySelect,
                                brandId: this.state.dataBrandSelect
                            })}
                            >
                                <FontAwesome
                                    className="super-crazy-colors"
                                    name="search"
                                    style={{marginRight:'5px'}}>
                                </FontAwesome>
                                &nbsp;Xem
                            </Button>
                        </div>
                    </Col>
                </Row>
                <hr />     
            </div>
        );
    }
}