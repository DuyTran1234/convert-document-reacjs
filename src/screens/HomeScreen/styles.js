import {makeStyles} from '@material-ui/core/styles';
import {colors} from '../../constants';
import {gif, images} from '../../assets';

export default makeStyles({
    container:{
        width:'100vw',height:'100vh',
        backgroundImage:`url(${images?.background})`,
        backgroundPosition:'center',
        backgroundRepeat:'none',
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    divTitle:{
        width:'70%',
        height:80,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors?.white,
        borderRadius:8,
        padding:"0px 20px 0px 20px",
        margin:"50px 0px 20px 0px"
    },
    iconTransfer:{
        width:50,height:50,borderRadius:10,
        borderWidth:4,borderColor:colors?.blue,
        borderStyle:'solid',
        marginRight:20
    },
    divText:{
        display:'flex',
        flexDirection:'column',
        width:`calc(100% - 300px)`,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    txtName:{
        fontSize:18,
        fontWeight:'700',
        color:colors?.black,
        padding:0,
        margin:0
    },
    txtDescription:{
        fontSize:14,
        fontWeight:'500',
        color:colors?.black,
        padding:0,
        paddingTop:5,
        margin:0
    },
    divSignIn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:"0px 15px 0px 15px"
    },
    btnSignIn:{
        width:100,
        height:40,
        borderRadius:8,
        textTransform:'initial',
        borderWidth:1, borderColor:colors?.blue,borderStyle:'solid',
        color:colors?.blue
        // display:'flex',jus
    },
    btnSignUp:{
        width:100,
        height:40,
        borderRadius:8,
        textTransform:'initial',
        backgroundColor:colors?.blue,
        color:colors?.white,
        marginLeft:10
    },
    divTextEasy:{
        width:'100%',
        alignItems:'center',
        display:'flex', flexDirection: 'row',
        justifyContent:'center'
    },
    txtTitle:{
        fontSize:42,
        fontWeight:'500',
        color:colors?.white,
        fontStyle:'italic',
        padding:0,margin:0
    },
    txtEasy:{
        fontSize:42,
        fontWeight:'500',
        color:colors?.black,
        padding:0,margin:0,
        paddingLeft:10
    },
    txtSupport:{
        fontSize:18,
        fontWeight:400,
        color:colors?.white,
        padding:0,margin:0,
    },
    selectContainer:{
        height:50,
        borderWidth:1, borderColor:colors?.blue,
        borderRadius:8,borderStyle:'solid'
    },
    divProgressBar:{
        width: '70%',
        borderRadius:12,
        marginTop:40,
        backgroundColor: colors?.transparent,
    }
})