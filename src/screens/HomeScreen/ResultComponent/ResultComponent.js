import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Stepper, Step, StepButton, StepLabel, StepConnector,
  Typography, Button
} from '@material-ui/core';
import useStyles from './styles';
import ProgressBar from '../../../components/ProgressBar';

function ResultComponent(props) {
  const {
    isLoading,
    valueLoading,
    convertDone
  } = props

  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes?.divRow}>
        <div className={classes?.divRowText}>
          <p className={classes?.txtTitle}>File to</p>
          <p className={classes?.txtBlue}>&nbsp; CONVERT</p>
        </div>
        <div className={classes?.divProgressBar}>
          {isLoading ? <ProgressBar value={valueLoading} /> : "" }
          {convertDone?.isSuccess ? <p className={classes?.txtBlue}>{convertDone.messsage}</p> : <p className={classes?.txtBlue}>{convertDone.messsage}</p>}
        </div>
      </div>
      {/* <div className={classes?.divFile}>
        <p className={classes?.txtTitleUploaded}>File Uploaded:</p>
      </div> */}
      {/* name file result upload */}
    </div>
  );
}

export default ResultComponent
