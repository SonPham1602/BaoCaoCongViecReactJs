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
        background:'#515064',
        display:'flex',
    },
    navigationBar:{
        listStyleType:'none',
        padding:'0px',
        overflow:'hidden',
        $nest:{
            '& li':{
                marginTop:'10px',
                fontSize:'15px',
                textAlign:'left',
                cursor:'pointer',
                width:"100%",
                marginLeft:'0px',
                padding:'10px'
            },
            '& :hover':{
                background:'#D4D4D4'
            }

        }
    },
    userImage:{
        borderRadius:'50%',
        cursor:'pointer',
        right:'205px',
        position:'absolute',
        top:'5px',
    },
    searchBoxHandleBar:{
        width:'400px',
        height:'30px',
        borderRadius:'25px',
        border:"none",
        fontSize:'18px',
        marginTop:'20px',
        marginLeft:'20px',
        outline:'none',
        paddingLeft:'40px',
        paddingRight:'20px'
    },
    userControlDiv:{
        background:'white',
        top: '75px',
        right: '200px',
        height: '200px',
        position: 'absolute',
        width: '200px',
        boxShadow:'rgba(0, 0, 0, 0.25) 3px 5px 10px',
        borderRadius:'5px',
        zIndex:'20'
    },
    selectPosition:{
        width:'500px'
    },
    richEditor:{
        textAlign:'left',
        // marginRight:'200px',
        fontSize:'20px',
        height: '100%'
    },
    titlePlaceToSent:{
        width:"500px",
        borderRadius:'5px',
        height:'30px',
        border:'1px solid gray',
        marginLeft: '20px',
        paddingLeft:'10px',
        outline:'none'
    },


    
})
export default style