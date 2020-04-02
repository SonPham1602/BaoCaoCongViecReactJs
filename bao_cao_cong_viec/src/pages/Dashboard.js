import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Style from '../css/Css'
import HandleBar from '../components/handleBar'
import MyRouter from "../share/myrouter";
import AboutUser from '../components/managerstaff/aboutUser'
import FormReport from '../components/report/formReport'
import Home from '../components/home'
import ManagerReport from '../components/report/managerReport'
import ViewSendReport from '../components/report/viewSendReport'
import { Row, Col } from 'react-bootstrap'
import CompanyComponent from '../components/managerstaff/company';
import DepartmentComponent from '../components/managerstaff/department';
import TeamComponent from '../components/managerstaff/team';
import UserComponent from '../components/managerstaff/user';
import AccountGroupComponent from '../components/administrator/accountgroup';
import PermissionsComponent from '../components/administrator/permission';
import BranchComponent from '../components/managerstaff/branch';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Row className='p-0 m-0'>
                    <Col className='p-0 m-0'>
                        <HandleBar></HandleBar>
                    </Col>
                </Row>

                <Row  className='p-0 m-0'>
                    <Router>
                        <Col  className='p-0 m-0' xs lg="2" ><MyRouter></MyRouter></Col>
                        <Col  className='p-0 m-0' xs lg="10">
                            <div className={Style.contentRight}>
                                <Route component={Home} path="/home"></Route>
                                <Route component={FormReport} path="/report/sendReport"></Route>
                                <Route component={ManagerReport} path="/report/managerReport"></Route>
                                <Route component={ViewSendReport} path="/report/viewSendReport"></Route>
                                <Route component={CompanyComponent} path="/managerStaff/company"></Route>
                                <Route component={BranchComponent} path="/managerStaff/branch"></Route>
                                <Route component={DepartmentComponent} path="/managerStaff/department"></Route>
                                <Route component={TeamComponent} path="/managerStaff/team"></Route>
                                <Route component={UserComponent} path="/managerStaff/user"></Route>
                                <Route component={AboutUser} path="/managerStaff/aboutuser"></Route>
                                <Route component={AccountGroupComponent} path="/administration/accountgroup"></Route>
                                <Route component={PermissionsComponent} path="/administration/permission"></Route>
                            </div>
                        </Col>
                    </Router>
                </Row>

            </div>
        )
    }
}
export default Dashboard