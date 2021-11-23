import { typeDocs, typeExcel, typePdf, typePowerPoint } from '../constants/typeDocument';
const path = require('path');

const checkExtension = (fileName, extensions) => {
    if(!fileName) {
        return false;
    }
    const extFileName = path.extname(fileName);
    const found = extensions.find((item) => {
        return item === extFileName;
    });
    if(!found) {
        return false;
    }
    return true;
}

const listTool = [
    { label: "Word to PDF", value: 0, ext: ['.docx', '.doc', '.docm', '.dot', '.dotx', '.dotm', '.rtf'] },
    { label: "Excel to PDF", value: 1, ext: ['.xlsx', '.xls', '.xlsm', '.xlsb', '.xlt', '.xlam'] },
    { label: "PowerPoint to PDF", value: 2, ext: ['.ppt', '.pptx', '.pps', '.ppsx', '.pot'] },
    { label: "PDF to Word", value: 3, ext: ['.pdf'] },
    { label: "PDF to Excel", value: 4, ext: ['.pdf'] },
    { label: "PDF to PowerPoint", value: 5, ext: ['.pdf'] },
    { label: "JPG to PDF", value: 6, ext: ['.jpg', '.jpeg'] },
    { label: "SVG to PNG", value: 7, ext: ['.svg'] },
    { label: "MP4 to MP3", value: 8, ext: ['.mp4'] },
  ];

const renderOptionsTool = (nameFile)=>{
    if(nameFile){
        const indexDot = nameFile.lastIndexOf('.');
        const typeFile = nameFile.slice(indexDot);
        switch (true) {
            case typeDocs.includes(typeFile):
                return [listTool[0]]

            case typeExcel.includes(typeFile):
                return [listTool[1]]

            case typePowerPoint.includes(typeFile):
                return [listTool[2]]

            case typePdf.includes(typeFile):
                return [listTool[3], listTool[4], listTool[5]]

            case typeFile === '.jpg':
                return[listTool[6]]

            case typeFile === '.svg':
                return [listTool[7]]
            case typeFile === '.mp4' :
                return [listTool[8]]
            default:
                return [];
        }
    }
};

export {checkExtension, renderOptionsTool};