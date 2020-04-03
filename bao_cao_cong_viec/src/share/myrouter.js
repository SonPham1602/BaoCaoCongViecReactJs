import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import useCollapse from 'react-collapsed';
import Style from '../css/Css'
import FontAwesome from 'react-fontawesome'
import Global from '../share/global'
import classNames from 'classnames'


export default class MyRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Global.allMenu
        }
        this.Menu = this.Menu.bind(this)
        this.NodeParent = this.NodeParent.bind(this)
        this.DrawNode = this.DrawNode.bind(this)
    }

    render() {
        return (
            <div>
                <div className={Style.leftSlideDashboard}>
                    <Route component={this.Menu} path="/"></Route>
                </div>
            </div>           
        )
    }
    
    Menu() {
        const data = this.state.data;
        return (
                <ul className={classNames('m-0 p-0',Style.navigationBar)}>
                    {data.map((tmp, i) => {     
                        // Chỉ vẽ những thằng không có parent, thằng nào có parent thì về parent nó vẽ
                        if(tmp.parent === null || tmp.parent === undefined || tmp.parent === "") {
                            return (<this.DrawNode key={i} node={tmp} />)
                        }               
                    })}
                </ul>
        );
    }

    DrawNode(prop) {
        if(prop.node.isParent) 
            return (<this.NodeParent key={prop.node.name} node={prop.node} />) 
        else
            return (<this.NodeChild key={prop.node.name} node={prop.node} />)
    }
    
    NodeParent(prop) {
    var data = this.state.data.filter(m => m.parent === prop.node.name);
    const {getCollapseProps, getToggleProps} = useCollapse(); 
    return (
        <div>
            <li className={Style.selectPageStyle} {...getToggleProps()} >
                <FontAwesome
                className="super-crazy-colors"
                name={prop.node.icon}
                style={{marginRight:'5px'}}/>
                {prop.node.text}
                <FontAwesome
                className="super-crazy-colors"
                name="caret-down"
                style={{position:"absolute",right:'10px'}}
                />
                </li>
            <section {...getCollapseProps()}>
                <ul className={Style.navigationBar}>
                    {data.map((tmp, i) => { 
                        return (<this.DrawNode key={i} node={tmp} />)              
                    })}
                </ul>
            </section>
        </div>
        );
    }

    NodeChild(prop) {
        return (
            <Link to={prop.node.path} style={{color:'black',textDecoration:'none'}} className={Style.aHolver} >
                <li>

                    <FontAwesome
                        className="super-crazy-colors"
                        name={prop.node.icon}
                        style={{marginRight:'5px'}}>
                    </FontAwesome>

                    {prop.node.text}
                </li>
            </Link>
        );
    }
}