import { post } from 'axios';
import { config } from 'dotenv';
config();
const serverApi = process.env.REACT_APP_API;
const convertFileApi = async (formData) => {
    console.log(serverApi);
    try {
        const result = await post(
            serverApi + '/convert-file',
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                }
            });
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

const downloadFileApi = (filenameConvert) => {
    return serverApi + `/download/filename/${filenameConvert}`;
}

export  { convertFileApi, downloadFileApi };