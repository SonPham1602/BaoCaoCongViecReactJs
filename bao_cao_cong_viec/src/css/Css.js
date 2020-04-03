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
        marginTop: '75px',
        marginBottom: '10px',
        height: '100%',
        backgroundColor: '#f7f7f7',
        borderRight: '1px solid #ececec',
        position: 'fixed',
        width: '16%',
    },
    rightSlideDashboard:{
    
        width: '100%',
        background: 'white',
        //position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        zIndex: '1',
        // transform:'translateX(200px)',
    },
    handleBar:{
        width:'100%',
        height:'75px',
        background:'#3F51B5',
        display:'flex',
        position: 'fixed',
        zIndex:10,
    },

    aHolver: {
        $nest:{
            '& :hover':{
                background:'#D4D4D4'
            }
        }
    },

    navigationBar:{
        listStyleType:'none',
        // padding:'0px',
        overflow:'hidden',
        $nest:{
            '& li':{
                marginTop:'10px',
                fontSize:'15px',
                textAlign:'left',
                cursor:'pointer',
                width:"100%",
                marginLeft:'0px',
                padding:'10px',
            },
            // '& :hover':{
            //     background:'#D4D4D4'
            // }

        }
    },
    userImage:{
        borderRadius:'50%',
        cursor:'pointer',
        right:'10px',
        position:'absolute',
        top:'7px',
    },
    searchBoxHandleBar:{
        width:'400px',
        height:'30px',
        borderRadius:'25px',
        border:"none",
        fontSize:'18px',
        marginTop:'20px',
        marginLeft:'250px',
        outline:'none',
        paddingLeft:'40px',
        paddingRight:'20px'
    },
    userControlDiv:{
        background: 'white',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 3px 5px 10px',
        height: '200px',
        position: 'absolute',
        right: '10px',
        top: '75px',
        width: '200px',
        zIndex: '20',
        border: '1px solid darkgray',
    },
    selectPosition:{
        width:'500px'
    },
    richEditor:{
        textAlign:'left',
        // marginRight:'200px',
        fontSize:'20px',
        height: '100%',

    },
    titlePlaceToSent:{
        border: '1px solid gray',
        borderRadius: '5px',
        height: '30px',
        marginLeft: '20px',
        outline: 'none',
        paddingLeft: '10px',
        width: '500px',
        margin: '2px',
    },  
    contentRight:{
        marginTop:'85px',
        //width: '80%',
        background: 'white',
        //position: 'fixed',
        // top: '100px',
        // bottom: '75px',
        //margin: '20px',
        //left: '0px',
        paddingRight:'10px',
        zIndex: '1',
        // backgroundColor: 'blue',
        //  transform:'translateX(200px)',
        // paddingLeft:'40px',
    },
    selectPageStyle: {
        margin: '0',
        padding: '10px',
        list_style: 'none',
        position: 'relative',
        $nest:{
            '& :hover':{
                background:'#D4D4D4'
            }
        }
    } 
})
export default style