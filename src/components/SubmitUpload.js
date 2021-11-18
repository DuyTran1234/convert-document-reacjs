import React, { useContext, useState } from "react";
import {convertFileApi} from "../api";
import {downloadFileApi} from "../api";
import ToolsContext from "../context/ToolsContext";
import { checkExtension } from "../services/checkExtension";
import LoadingAnimation from "./LoadingAnimation";

function SubmitUpload() {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState({ content: '' });
    const toolContext = useContext(ToolsContext);
    const tool = toolContext.tool;
    const fileInput = toolContext.fileInput;
    const resizeImage = toolContext.resizeImage;

    const handleSubmit = async () => {
        if (checkExtension(fileInput.name, tool.ext)) {
            console.log({...tool, ...fileInput, ...resizeImage});
            setIsLoading(true);
            let formData = new FormData();
            formData.append('fileUpload', fileInput);
            formData.append('tool', tool.value);
            formData.append('resizeImageJson', JSON.stringify(resizeImage));
            const result = await convertFileApi(formData);
            if (result) {
                if (result.status === 200) {
                    const content = (
                        <div>
                            <br /><a href={downloadFileApi(result.data)}>Download</a>
                        </div>);
                    setResponse({ content: content });
                    setIsLoading(false);
                }
            }
            else {
                const content = <p>Chuyển đổi tài liệu không thành công, vui lòng thử lại</p>;
                setResponse({ content: content });
                setIsLoading(false);
            }
        }
        else {
            window.alert('Chọn sai kiểu file, vui lòng lựa chọn lại');
        }
    }
    return (
        <div>
            <button type="submit" onClick={handleSubmit}>Convert</button>
            <br />
            {isLoading ? <LoadingAnimation /> : response.content}
        </div>
    );
}

export default SubmitUpload;