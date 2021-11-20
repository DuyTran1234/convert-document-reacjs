import React, {useRef} from "react";
import ToolsContext from "../context/ToolsContext";
import {colors} from '../constants';

function InputUpload(props) {
    const toolContext = React.useContext(ToolsContext);
    const setFileInput = toolContext.setFileInput;
    const tool = toolContext.tool;
    const inputRef = useRef();

    const handleChangeFile = (e) => {
        console.log(e.target.files[0]);
        setFileInput(e.target.files[0]);
    }

    const onPressUpload =()=>{
        inputRef.current.click()
    }
    return (
        <React.Fragment >
            <button 
            onClick={()=>onPressUpload()}
            style={styles?.btnUpload}>Upload File</button>
            <input type="file" 
                ref={inputRef}
                style={styles?.inputFile}
                onChange={handleChangeFile} accept={tool.ext} />
        </React.Fragment>
    );
}

export default InputUpload;

const styles = {
    inputFile:{
        display:'none'
    },
    btnUpload:{
        width:100,
        height:40,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors?.blue,
        borderRadius:6,
        color:colors?.white,
    }
}