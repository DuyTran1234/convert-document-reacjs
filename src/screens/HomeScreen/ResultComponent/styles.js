import {makeStyles } from '@material-ui/core/styles';
import colors from '../../../constants/colors';

export default makeStyles({
    container:{
        width:'100%', padding:20
    },
    divRow:{
        width:'100%',
        display:'flex', flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    divRowText:{
        display:'flex', flexDirection:'row',
        width:170
    },
    txtTitle:{
        fontSize:20,fontWeight:'bold',
        color:colors?.black
    },
    txtBlue:{
        fontSize:20,fontWeight:'bold',
        color:colors?.blue
    },
    divProgressBar:{
        width:'calc(100% - 200px)',
    },
    divFile:{
        width:'100%', display:'flex',
         flexDirection:'column'
    },
    txtTitleUploaded:{
        fontSize:22,fontWeight:'bold',
        color:colors?.black,
        textAlign:'left'
    },
})