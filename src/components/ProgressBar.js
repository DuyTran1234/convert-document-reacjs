import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {withStyles} from '@material-ui/core/styles';
import colors from '../constants/colors';

function ProgressBar(props) {
const {value = 0} = props
    const LinearProgressCustom = withStyles((theme) => ({
        root: {
            height: 25 ,
            borderRadius: 10 ,
        },
        colorPrimary: {
            backgroundColor: colors?.white,
        },
        bar: {
            borderRadius: 5,
            backgroundColor: colors?.blue,
        },
    }))(LinearProgress);

  return (
    <Box style={styles?.containerBar}>
      <Box style={{ width: '60%', mr: 1 }}>
        <LinearProgressCustom variant="determinate" {...props} />
      </Box>
      <Box style={styles?.divPercent}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};
export default ProgressBar

const styles = {
    containerBar :{
         display: 'flex', alignItems: 'center' ,
         justifyContent: 'flex-end',
    },
    divPercent:{
        width: '10%',
        display:'flex',flexDirection:'row', 
        paddingLeft:20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
}