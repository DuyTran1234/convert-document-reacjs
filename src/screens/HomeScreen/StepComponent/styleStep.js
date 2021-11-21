import {makeStyles} from "@material-ui/core/styles";
import {colors } from '../../../constants';

export default makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
    containerSteps:{
        width: '70%',
        minHeight:100,
        borderRadius:12,
        marginTop:20,
        "& .MuiPaper-root":{
            backgroundColor: colors?.transparent,
            borderRadius:10,

        }
    },
    stepItem:{
        width:'100%',
        display:'flex', flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center'
    },
    stepIcon:{
        paddingTop:20,
    },
    btnDownload:{
       width:135,height:40,
       borderRadius:8,
       backgroundColor:colors?.blue, 
    },
    txtDownload:{
        fontSize:14,fontWeight:'bold',
        color:colors?.white
    },
    btnDisable:{
        backgroundColor:'gray'
    }
  });

  export const useStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#784af4',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },

  });