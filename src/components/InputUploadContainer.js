import { Box } from "@mui/system";

function InputUploadContainer(props) {
    const {backgroundColor, listItem, boxBorder, boxBorderColor} = props;
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop= "5vh"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                // minHeight="100vh"
                paddingTop= "1vh"
                sx={{
                    border: boxBorder ? boxBorder : null,
                    borderColor: boxBorderColor ? boxBorderColor : null,
                    borderRadius: 5,
                    width: "80%",
                    minHeight: "50vh",
                    backgroundColor: backgroundColor,
                }}
            >
            {listItem.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
            </Box>
        </Box>
    );
}

export default InputUploadContainer;