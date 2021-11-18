import React, { useContext } from "react";
import ToolsContext from "../context/ToolsContext";
function ListTool(props) {
    const toolContext = useContext(ToolsContext);
    const setTool = toolContext.setTool;

    const handleChangeOption = (event) => {
        const value = JSON.parse(event.target.value);
        console.log(value);
        setTool(value);
    } 
    return (
        <div>
            <select name="tools" onChange={handleChangeOption}>
                {props.listTool.map((item, index) => {
                    return <option key={index} value={JSON.stringify(item)}>{item.content}</option>
                })}
            </select>
        </div>
    );

}

export default ListTool;