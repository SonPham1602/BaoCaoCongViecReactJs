import React from 'react'
import Style from '../css/Css'
import Navigation from '../components/navigationBar'


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
                    <div className={Style.handleBar}></div>
                    <div></div>
                </div>

            </div>
        )
    }
}
export default Dashboard