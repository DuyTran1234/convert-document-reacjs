import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const introduces = [
    {
        icon: <TipsAndUpdatesOutlinedIcon fontSize="large" />, 
        title: 'How to use?',
        content: "Select tool and choose your file into the toolbox above to begin. Word, Excel, PPT and image files will convert to PDF format. PDF files will convert to the file type you choose.",
    },
    {
        icon: <MilitaryTechOutlinedIcon fontSize="large" />, 
        title: 'Don\'t worry about security.',
        content: 'Your security is our priority. All our file transfers are secured with an advanced level of SSL encryption. Additionally, we destroy all files automatically from our servers.',
    },
    {
        icon: <ThumbUpOutlinedIcon fontSize="large" />, 
        title: 'Perform on all devices',
        content: 'You do not need to register or install a software. The online PDF converter works perfectly on all devices and popular browsers: IE, Firefox, Chrome & Opera.',
    },
    {
        icon: <LockOutlinedIcon fontSize="large" />, 
        title: 'Great quality',
        content: 'Test and see for yourself! To ensure best quality of PDF conversion',
    },
    {
        icon: <CompareArrowsOutlinedIcon fontSize="large" />, 
        title: 'Convert to PDF and other file types',
        content: "You can convert PDFs all in a single place. Also supports: Excel, Word, PPT, SVG, MP4"
    },
    {
        icon: <CloudUploadOutlinedIcon fontSize="large" />, 
        title: 'Access from anywhere',
        content: 'You can access the free PDF file converter anywhere, with an internet connection.'
    },
];

const getIntroduces = () => {
    return introduces;
}

export default getIntroduces;