import React from 'react'
import Style from '../css/Css'
import Navigation from '../components/navigationBar'
import HandleBar from '../components/handleBar'
import ReportForm from '../components/formReport'
import ViewSendReport from '../components/viewSendReport'
import ManagerReport from '../components/managerReport'
import ManagerStaff from '../components/managerStaff'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPostReport: true,
            showViewSendReport: false,
            showManagerReport:false,
            showManagerStaff:false,
            user:{

            }
        }
    }
    
    unSelectAllPage()
    {
        this.setState({
            showPostReport: false,
            showViewSendReport: false,
            showManagerReport:false,
            showManagerStaff:false
        })
    }

    selectPage = (dataFromChild) =>{
        this.unSelectAllPage()
        if(dataFromChild === 1)
        {
            this.setState({
                showPostReport:true,
            })
        }
        else if(dataFromChild === 2)
        {
            this.setState({
                showViewSendReport:true
            })
        }
        else if(dataFromChild === 3)
        {
            console.log("3")
            this.setState({
                showManagerReport:true
            })
        }
        else if(dataFromChild === 4)
        {
            this.setState({
                showManagerStaff:true
            })
        }
    }


    render() {
        return (
            <div>
                <div  className={Style.leftSlideDashboard}>
                    <Navigation callbackFunctionSelectPage = {this.selectPage}></Navigation>
                </div>
                <div className={Style.rightSlideDashboard}>
                    <HandleBar></HandleBar>
                    {this.state.showPostReport &&  <ReportForm></ReportForm>}
                    {this.state.showViewSendReport && <ViewSendReport></ViewSendReport>}
                    {this.state.showManagerReport && <ManagerReport></ManagerReport>}
                    {this.state.showManagerStaff && <ManagerStaff></ManagerStaff>}
                </div>
            </div>
        )
    }
}
export default Dashboard