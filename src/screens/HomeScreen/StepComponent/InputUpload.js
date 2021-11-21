import React, {useRef} from "react";
import {colors} from '../../../constants';
import {Button } from '@material-ui/core';

function InputUpload(props) {
    const {onChangeFile} = props;
    const inputRef = useRef();

    const onPressUpload =()=>{
        inputRef.current.click()
    }
    return (
        <React.Fragment >
            <Button 
                onClick={()=>onPressUpload()}
                style={styles?.btnUpload}
            >
                <p style={styles?.txtUpload}>Upload file</p>
            </Button>
            <input type="file" 
                ref={inputRef}
                style={styles?.inputFile}
                onChange={(e)=>onChangeFile(e.target.files[0])}/>
        </React.Fragment>
    );
}

export default InputUpload;

const styles = {
    inputFile:{
        display:'none'
    },
    btnUpload:{
        width:140,height:40,
       borderRadius:8,
       backgroundColor:colors?.blue, 
    },
    txtUpload:{
        fontSize:14,fontWeight:'bold',
        color:colors?.white
    }
}