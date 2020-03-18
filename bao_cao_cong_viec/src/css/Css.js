import {stylesheet}from 'typestyle'
const style = stylesheet({
    formControlStyle: {
        width: '400px',
        height: '50px',
        fontSize: '20px',
        background: 'white',
        outline: 'none',
        border: '1px solid #707070',
        marginTop: '10px',
        borderRadius: '5px',
        paddingLeft: '50px',
        paddingRight: '50px',
    },
    loginLableStyle: {
        fontSize: '35px'
    },
    iconStyle: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        marginLeft: '20px',
        marginTop: '27.5px'

    },
    loginButtonStyle: {
        width: '500px',
        height: '50px',
        border: 'none',
        borderRadius: '5px',
        marginTop: '50px',
        background: '#515064',
        cursor: 'pointer'
    },
    loginTextStyle: {
        color: 'white',
        fontSize: '20px',
        cursor: 'inherit',
    },
    rememberPasswordDivStyle: {
        marginLeft: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
        transform: 'translateX(-50%)',
        marginTop: '10px'
    },
    leftSlideDashboard:{
        width: '200px',
        background: 'white',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        zIndex: '2',
        boxShadow: 'rgba(0, 0, 0, 0.25) 3px 5px 10px',
    },
    rightSlideDashboard:{
        width: '100%',
        background: 'white',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        zIndex: '1',
        transform:'translateX(200px)',
    },
    handleBar:{
        width:'100%',
        height:'75px',
        background:'#515064'
    },
    navigationBar:{
        listStyleType:'none',

        $nest:{
            '& li':{
                marginTop:'10px',
                fontSize:'15px',
                textAlign:'left',
                cursor:'pointer'
            }
        }
    }
    
})

export default style