import React from "react";
import ToolsContext from "../context/ToolsContext";

function InputUpload(props) {
    const toolContext = React.useContext(ToolsContext);
    const setFileInput = toolContext.setFileInput;
    const tool = toolContext.tool;

    const handleChangeFile = (e) => {
        console.log(e.target.files[0]);
        setFileInput(e.target.files[0]);
    }
    return (
        <div>
            <input type="file" onChange={handleChangeFile} accept={tool.ext} />
        </div>
    );
}

export default InputUpload;