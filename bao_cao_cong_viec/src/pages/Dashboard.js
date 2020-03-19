import React from 'react'
import Style from '../css/Css'
import Navigation from '../components/navigationBar'
import HandleBar from '../components/handleBar'
import ReportForm from '../components/formReport'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div className={Style.rightSlideDashboard}>
                    <HandleBar></HandleBar>
                    <ReportForm></ReportForm>
                </div>

            </div>
        )
    }
}
export default Dashboard