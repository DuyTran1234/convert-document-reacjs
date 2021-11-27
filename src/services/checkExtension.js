import { excelColor, jpgColor, mp4Color, pdfColor, powerpointColor, svgColor, wordColor } from './pickColor';
const path = require('path');
const checkExtension = (fileName, extensions) => {
    if (!fileName) {
        return false;
    }
    const extFileName = path.extname(fileName);
    const found = extensions.find((item) => {
        return item === extFileName;
    });
    if (!found) {
        return false;
    }
    return true;
}
const renderOptionsTool = () => {
    let listTool = [
        { label: "Word to PDF", value: 0, ext: ['.docx', '.doc', '.docm', '.dot', '.dotx', '.dotm', '.rtf'], color: wordColor },
        { label: "Excel to PDF", value: 1, ext: ['.xlsx', '.xls', '.xlsm', '.xlsb', '.xlt', '.xlam'], color: excelColor },
        { label: "PowerPoint to PDF", value: 2, ext: ['.ppt', '.pptx', '.pps', '.ppsx', '.pot'], color: powerpointColor },
        { label: "PDF to Word", value: 3, ext: ['.pdf'], color: pdfColor },
        { label: "PDF to Excel", value: 4, ext: ['.pdf'], color: pdfColor },
        { label: "PDF to PowerPoint", value: 5, ext: ['.pdf'], color: pdfColor },
        { label: "JPG to PDF", value: 6, ext: ['.jpg', '.jpeg'], color: jpgColor },
        { label: "SVG to PNG", value: 7, ext: ['.svg'], color: svgColor  },
        { label: "MP4 to MP3", value: 8, ext: ['.mp4'], color: mp4Color },
    ];
    // if(nameFile){
    //     const indexDot = nameFile.lastIndexOf('.');
    //     const typeFile = nameFile.slice(indexDot);
    //     switch (true) {
    //         case typeDocs.includes(typeFile):
    //             return [listTool[0]]

    //         case typeExcel.includes(typeFile):
    //             return [listTool[1]]

    //         case typePowerPoint.includes(typeFile):
    //             return [listTool[2]]

    //         case typePdf.includes(typeFile):
    //             return [listTool[3], listTool[4], listTool[5]]

    //         case typeFile === '.jpg':
    //             return[listTool[6]]

    //         case typeFile === '.svg':
    //             return [listTool[7]]
    //         case typeFile === '.mp4' :
    //             return [listTool[8]]
    //         default:
    //             return [];
    //     }
    // }
    return [...listTool];
};

export { checkExtension, renderOptionsTool };