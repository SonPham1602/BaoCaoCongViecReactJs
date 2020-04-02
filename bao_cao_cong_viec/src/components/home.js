import React from 'react'
import MySchedule from './Schedule/myschedule'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        console.log("abc");
        return (
            <MySchedule></MySchedule>
        )
    }
}