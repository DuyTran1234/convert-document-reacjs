
const createFormData = (fileInput, tool) => {
    let formData = new FormData();
    formData.append('fileUpload', fileInput);
    formData.append('tool', tool);
    return formData;
}

module.exports = {createFormData};