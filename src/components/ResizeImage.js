import React, { useContext } from "react";
import ToolsContext from "../context/ToolsContext";

function ResizeImage() {
    const toolsContext = useContext(ToolsContext);
    const resizeImage = toolsContext.resizeImage;
    const setResizeImage = toolsContext.setResizeImage;
    const tool = toolsContext.tool;

    const handleChangeWidth = (e) => {
        setResizeImage({ ...resizeImage, width: e.target.value });
    }
    const handleChangeHeight = (e) => {
        setResizeImage({ ...resizeImage, height: e.target.value });
    }
    let render = (
        <div>
            <br />
            <p>Resize Image</p>
            <br />
            Width <input type="text" value={resizeImage["width"]} onChange={handleChangeWidth} /><br />
            Height <input type="text" value={resizeImage["height"]} onChange={handleChangeHeight} /><br />
        </div>
    );
    return (
        <div>
            {tool.value === 7 ? render : ""}
        </div>
    );
}

export default ResizeImage;