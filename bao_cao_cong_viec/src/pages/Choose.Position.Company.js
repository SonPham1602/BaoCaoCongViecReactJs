import React  from 'react'
import Style from '../css/Css'
import {classes} from 'typestyle'

class ChoosePosition extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <div>
                    <img src="/icon/logo.png"></img>
                </div>
                <div>
                    <label className={Style.loginLableStyle}>Chọn vị trí trong công ty</label>
                </div>
                <div>
                    <select className={classes(Style.formControlStyle,Style.selectPosition)}>
                        <option>

                        </option>
                    </select>
                </div>
                <div>
                    <select className={classes(Style.formControlStyle,Style.selectPosition)}>
                        <option>

                        </option>
                    </select>
                </div>
                <div>
                    <select className={classes(Style.formControlStyle,Style.selectPosition)}>
                        <option>

                        </option>
                    </select>
                </div>
                <div>
                    <select className={classes(Style.formControlStyle,Style.selectPosition)}>
                        <option>

                        </option>
                    </select>
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